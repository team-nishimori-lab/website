<template>
  <div class="class-name">
    <div v-if="loadingTime || loadingApi" class="loader">
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
    <transition name="hl">
      <div v-if="!(loadingTime || loadingApi)" class="hl">
        <div class="headline">
          {{ className }}
        </div>
      </div>
    </transition>
    <transition name="part">
      <div v-if="!(loadingTime || loadingApi)" class="md">
        <div class="md-block-outer">
          <div v-html="content" class="md-block"></div>
        </div>
      </div>
    </transition>
    <transition name="gist-link">
      <div v-if="!(loadingTime || loadingApi)" class="gist-link">
        <b-button
          variant="outline-dark"
          v-bind:href="url"
          target="_blank"
          size="lg"
        >
          Gistへ移動
        </b-button>
      </div>
    </transition>

    <div class="footer-space"></div>
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
.class-name {
  text-align: center;
}

.loader {
  margin: 10vh 0 3rem;
}

.md-block-outer {
  padding: 0.2rem 3% 0.2rem;
}

.md-block {
  padding: 0.5rem 1rem;
  margin: 2rem 0;
  background: #F0F0F0;
  border-top: solid 5px #008554;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);

  /deep/ {
    * {
      text-align: left;
      color: #333333;
      font-size: 1.2rem;
    }

    table, th, td {
      border-collapse: collapse;
      border: 1.5px solid #3f3f3f;
      line-height: 1.5rem;
    }

    th {
      width: 1.2rem;
      padding: 0.6rem;
      font-weight: bold;
      background: #3f3f3f;
      color: #ffffff;
    }

    td {
      width: 10rem;
      padding: 10px;
    }

    tr:nth-child(even) {
      background: #E0E0E0;
    }

    h1 {
      font-size: 2.2rem;
      padding-bottom: 0.2rem;
      padding-top: 0;
      padding-left: 0.2rem;
      margin-top: 1rem;
      position: relative;
      border-left: 5px solid #999999;

      &::before, &::after {
        position: absolute;
        left: 0;
        content: '';
        width: 100%;
        height: 6px;
        box-sizing: border-box;
      }

      &::before {
        top: 0;
        border-top: 2px solid #999999;
      }

      &::after {
        bottom: 0;
        border-top: 1px solid #BBBBBB;
        border-bottom: 2px solid #999999;
      }
    }

    h2 {
      font-size: 1.8rem;
      position: relative;

      &::before, &::after {
        position: absolute;
        left: 0;
        content: '';
        width: 100%;
        height: 6px;
        box-sizing: border-box;
      }

      &::after {
        bottom: 0;
        border-bottom: 2px solid #AAAAAA;
      }
    }

    h3 {
      font-size: 1.4rem;
    }

    h4 {
      font-size: 1.2rem;
    }

    a {
      color: #45A8F0;
      font-weight: bold;
    }

    pre {
      margin: 0px 2rem;
      padding: 1rem;
      border: 3px inset #AAAAAA;
      background: #D6D6D6;
    }
  }
}

.footer-space {
  margin-top: 5vh;
}
</style>
