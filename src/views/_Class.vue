<template>
  <div class="class">
    <div v-show="loadingTime || loadingApi" class="loader">
      <vue-loading
        type="beat"
        color="#BCBCBC"
        :size="{ width: '140px', height: '140px' }"
      >
      </vue-loading>
      <div class="load-str">
        授業データの更新中...
      </div>
    </div>
    <div v-show="!(loadingTime || loadingApi)" class="select">
      <div class="headline">
        授業を選択
      </div>
      <form id="classSelect">
        <span v-html="radioList"></span>
      </form>
      <div style="padding: 0% 30%">
        <b-button v-on:click="selected" block variant="outline-secondary">
          決定
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { VueLoading } from "vue-loading-template";

export default {
  name: "Class",
  methods: {
    ToastAleart() {
      this.$bvToast.toast("いずれかの授業を選択してください", {
        title: "ValueError",
        autoHideDelay: 3000,
        appendToast: false
      });
    },
    selected: function() {
      var state = document.getElementById("classSelect").classItem.value;
      if (state == "") {
        this.ToastAleart();
      } else {
        this.$router.push(`/class/${state}`);
      }
    }
  },
  data() {
    return {
      orgData: "hoge",
      radioList: "",
      loadingTime: true,
      loadingApi: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loadingTime = false;
    }, 500);
    const axios = require("axios");
    axios
      .get("https://api.github.com/users/nishimori-lab/gists")
      .then(response => {
        this.orgData = response["data"];
        this.loadingApi = false;
      });
  },
  beforeUpdate() {
    var str = "";
    var id = 0;
    if (!this.orgData) {
      this.$router.push(`/class`);
    }
    for (var d of this.orgData) {
      try {
        var className = /#class_(.+)/.exec(d["description"])[1];
      } catch (error) {
        continue;
      }
      str += `<input name="classItem" type="radio" id="${id}" value="${d["id"]}">`;
      str += `<label for="${id}">${className}</label>`;
      str += "<br>";
      id++;
    }
    this.radioList = str;
  },
  components: {
    VueLoading
  }
};
</script>
