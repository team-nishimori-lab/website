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
    <transition name="hl">
      <div v-show="!(loadingTime || loadingApi)" class="hl">
        <div class="headline">
          授業を選択
        </div>
      </div>
    </transition>
    <transition name="content">
      <div v-show="!(loadingTime || loadingApi)" class="select">
        <form id="classSelect">
          <div class="container" v-html="radioList"></div>
        </form>
        <div style="padding: 0% 35%">
          <b-button v-on:click="selected" block variant="outline-secondary">
            決定
          </b-button>
        </div>
      </div>
    </transition>
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
      var state = document.getElementById("classSelect").radio.value;
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
      str += `<div class="radio">`;
      if (id == 0) {
        str += `<input name="radio" type="radio" id="${id}" value="${d["id"]}" checked/>`;
      } else {
        str += `<input name="radio" type="radio" id="${id}" value="${d["id"]}" />`;
      }
      str += `<label class="radio-label" for="${id}">${className}</label>`;
      str += "</div>";
      id++;
    }
    this.radioList = str;
  },
  components: {
    VueLoading
  }
};
</script>

<style scoped lang="scss">
$color1: #f4f4f4;
$color2: #3197ee;

.class {
  text-align: center;
}

.container {
  /deep/ .radio {
    margin: 0.5rem;
    input[type="radio"] {
      position: absolute;
      opacity: 0;
      + .radio-label {
        &:before {
          content: "";
          background: $color1;
          border-radius: 100%;
          border: 1px solid darken($color1, 25%);
          display: inline-block;
          width: 1.4em;
          height: 1.4em;
          position: relative;
          top: -0.2em;
          margin-right: 1em;
          vertical-align: middle;
          cursor: pointer;
          text-align: center;
          transition: all 250ms ease;
        }
      }
      &:checked {
        + .radio-label {
          &:before {
            background-color: $color2;
            box-shadow: inset 0 0 0 4px $color1;
          }
        }
      }
      &:focus {
        + .radio-label {
          &:before {
            outline: none;
            border-color: $color2;
          }
        }
      }
      &:disabled {
        + .radio-label {
          &:before {
            box-shadow: inset 0 0 0 4px $color1;
            border-color: darken($color1, 25%);
            background: darken($color1, 25%);
          }
        }
      }
      + .radio-label {
        &:empty {
          &:before {
            margin-right: 0;
          }
        }
      }
    }
  }
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  font-size: 2rem;
}
</style>
