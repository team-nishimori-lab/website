<template>
  <div class="lab-theme">
    <div id="bg" class="normal"></div>

    <div v-if="loadingTime || loadingApi" class="loader">
      <vue-loading
        type="spiningDubbles"
        color="rgba(10, 10, 10, 0.5)"
        :size="{ width: '10rem' }"
      >
      </vue-loading>
      <div class="load-str">
        授業データの取得中..
      </div>
    </div>

    <div class="header-space"></div>
    <transition name="hl">
      <div id="theme-links" v-if="!(loadingTime || loadingApi)">
        <div id="link-title">テーマ一覧</div>

        <div class="link" v-for="(theme, index) in themeList" :key="theme.name">
          <a :href="`#g${index}`" v-smooth-scroll="{ duration: 500 }">
            <div>
              <p class="icon"><i class="far fa-arrow-alt-circle-right"></i></p>
              <p>{{ theme.name }}</p>
            </div>
          </a>
        </div>
      </div>
    </transition>

    <transition name="part">
      <div class="divider"></div>
    </transition>

    <transition name="part">
      <div id="theme-contents" v-if="!(loadingTime || loadingApi)">
        <div
          class="container"
          v-for="(theme, index) in themeList"
          :key="theme.name"
        >
          <div class="link-dest" :id="`g${index}`"></div>
          <div class="theme-name">{{ theme.name }}</div>
          <div class="theme-summary">
            <div class="msg">{{ theme.summary.msg }}</div>
            <div class="img-container" v-if="theme.summary.setImg">
              <img
                :src="theme.summary.img.url"
                :alt="theme.summary.img.altMsg"
                :style="{ width: theme.summary.img.width }"
              />
            </div>
          </div>
          <div class="theme-QA">
            <div class="QA-content" v-for="d in theme.QA" :key="d.Q">
              <div class="qst">{{ d.Q }}</div>
              <div class="ans" v-html="d.A"></div>
              <div class="img-container" v-if="d.setImg">
                <img
                  :src="d.img.url"
                  :alt="d.img.altMsg"
                  :style="{ width: d.img.width }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { VueLoading } from "vue-loading-template";

import jsonData from "../assets/lab/theme/json/data.json";

export default {
  name: "Lab_Contents",
  data() {
    return {
      themeList: jsonData["data"],
      loadingApi: true,
      loadingTime: true
    };
  },
  created() {
    setTimeout(() => {
      this.loadingTime = false;
    }, 500);

    const axios = require("axios");
    axios
      .get(`https://api.github.com/gists/9a77be93a74c5f8d8f7ba52cb8c0699f`)
      .then(response => {
        if (response["data"]["description"] != "#homepage_theme") {
          return;
        }

        const dataList = [];
        for (let fileName in response["data"]["files"]) {
          dataList.push(
            JSON.parse(response["data"]["files"][fileName]["content"])
          );
        }
        this.themeList = dataList;
        this.loadingApi = false;
      });
  },
  mounted() {},
  beforeUpdate() {},
  beforeDestroy() {},
  methods: {},
  components: {
    VueLoading
  }
};
</script>

<style scoped lang="scss">
.lab-theme {
  text-align: center;
}

.loader {
  margin: 10vh auto 3rem;
  text-align: center;

  .load-str {
    color: rgba(10, 10, 10, 0.5);
    font-size: 2.2rem;
  }
}

.divider {
  height: 10vh;
  width: 90vw;

  margin: 0 auto;

  // border-top: 0.7rem dashed rgba(30, 30, 30, 0.2);
}

#bg {
  display: inline-block;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  transition: 1.5s;

  &.normal {
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(226,960,464)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%233893ff'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='708' height='590' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.06'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-size: 100% 100%;
    /* background by SVGBackgrounds.com */
  }
}

.header-space {
  height: 10vh;
}

#theme-links {
  display: block;
  margin: 0 3% 20vh;
  padding: 0rem 0 5vh;

  background-color: rgba(50, 50, 50, 0.6);

  border-radius: 1rem;

  #link-title {
    color: rgb(240, 240, 240);
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 5rem;
    border-bottom: 0.1rem dashed rgb(230, 230, 230);
  }

  .link {
    border-bottom: 0.1rem dashed rgb(230, 230, 230);

    div {
      text-align: left;
      padding: 0 1rem 0 0;

      transition: 0.4s;

      line-height: 8vh;

      p {
        color: rgb(240, 240, 240);
        vertical-align: middle;
        display: inline-block;
        font-size: 1.6rem;
        margin: 0 0;

        // @media only screen and (max-width: 500px) {
        //   font-size: 1.6rem;
        // }
        // @media only screen and (min-width: 500px) {
        //   font-size: 1.6rem;
        // }

        transition: 0.4s;

        &.icon {
          vertical-align: middle;
          font-size: 2.6rem;
          margin: 0 1rem;
        }
      }

      &:hover {
        background-color: rgba(20, 20, 20, 0.9);

        p {
          color: rgb(255, 255, 255);
          &.icon {
            margin-right: 2.5rem;
          }
        }
      }
    }
  }
}

.container {
  text-align: left;

  background-color: rgba(255, 255, 255, 0.9);

  @media only screen and (max-width: 751px) {
    width: 95%;
  }

  @media only screen and (min-width: 751px) {
    width: 700px;
  }

  display: block;
  border: solid 2px #a0a0a0;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 0.2rem rgba(0, 0, 0, 0.7);
  margin: 0 auto 20vh;
  padding: 1rem 2%;

  $note-line-height: 2rem;

  $name-color: #000000;
  $summary-color: #202020;
  $qst-color: #202020;
  $ans-color: #333333;

  .link-dest {
    // border-top: 3px solid #ff0000;
    // width: 100px;
    position: relative;
    top: -10vh;
    left: 0;
  }

  .theme-name {
    display: inline-block;
    border-left: 0.35rem solid rgba(30, 120, 230, 0.8);
    padding: 1rem;
    margin: 0 0 2rem;

    color: $name-color;
    font-size: 1.8rem;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);

    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .theme-summary {
    margin: 0 0 2rem;
    padding: 1rem;
    background-color: rgb(220, 220, 220);
    border-radius: 1rem;

    .msg {
      white-space: pre-wrap;
      word-wrap: break-word;
      font-size: 1.4rem;
      color: $summary-color;
    }

    .img-container {
      text-align: center;
      img {
        margin: 1.5rem 0 0;
      }
    }
  }

  .theme-QA {
    .QA-content {
      background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 97%,
        rgb(160, 160, 160) 97%,
        rgb(160, 160, 160) 100%
      );
      background-size: 100% $note-line-height;
      line-height: $note-line-height;
      padding: 0 0 1rem;
      .qst {
        font-size: 1.4rem;
        color: $qst-color;

        &::before {
          content: "";
          display: inline-block;
          width: $note-line-height;
          height: $note-line-height;
          margin: 0 0.5rem 0 0;
          vertical-align: top;
          background-image: url("../assets/lab/theme/qst-header.svg");
          background-size: 100% 100%;
          transform: scale(-1, 1);
        }
      }
      .ans {
        font-size: 1.1rem;
        color: $ans-color;

        white-space: pre-wrap;
        word-wrap: break-word;
      }
      margin: $note-line-height 0 0;

      .img-container {
        text-align: center;
        img {
          margin: 1.5rem 0 0;
        }
      }
    }
  }
}
</style>
