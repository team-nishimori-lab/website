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
      <div class="md-block-outer">
        <div v-html="content" class="md-block"></div>
      </div>
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
    // this.className = /#class_(.+)/.exec(this.orgData["description"])[1];
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

<style scoped lang="stylus">
.md-block-outer
  padding: 0.2em 3% 0.2em;

.md-block
  padding: 0.5em 1em;
  margin: 2em 0;
  background: #F0F0F0;
  border-top: solid 5px #008554;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);

  *
    text-align: left;

  h1
    font-size: 10px !important;
    color: #444444
    text-align: left;
  p
    font-size: 10px;
</style>
