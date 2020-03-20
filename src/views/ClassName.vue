<template>
  <div class="className">
    <div v-show="loadingTime || loadingApi" class="loader">
      <vue-loading
        type="beat"
        color="#BCBCBC"
        :size="{ width: '140px', height: '140px' }"
      >
      </vue-loading>
      <div class="load-str">
        授業データの取得中..
      </div>
    </div>
    <div v-show="!(loadingTime || loadingApi)" class="classInfo">
      <div class="headline">
        {{ className }}
      </div>
      <br />
      <div v-html="content" class="md-block"></div>
      <b-button variant="outline-secondary" v-bind:href="url" target="_blank">
        Gistへ移動
      </b-button>
    </div>
  </div>
</template>

<script>
import { VueLoading } from "vue-loading-template";
import marked from "marked";

export default {
  name: "ClassName",
  data() {
    return {
      orgData: "",
      className: "",
      url: "",
      content: "",
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
      .get(`https://api.github.com/gists/${this.$route.params["gistId"]}`)
      .then(response => {
        this.orgData = response["data"];
        this.loadingApi = false;
      });
  },
  beforeUpdate() {
    try {
      this.className = /#class_(.+)/.exec(this.orgData["description"])[1];
    } catch (error) {
      this.$router.push(`/error`);
    }
    this.url = this.orgData["html_url"];
    this.content = marked(this.orgData["files"]["README.md"]["content"]);
  },
  components: {
    VueLoading
  }
  // components: {
  //   HelloWorld
  // }
};
</script>
