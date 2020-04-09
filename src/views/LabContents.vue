<template>
  <div class="lab-contents">
    <div class="header-space"></div>
    西森研究室では MIMO (Multiple Input Multiple Output)技術を用いて,
    無線LAN・携帯電話への適用を目指した研究を行っています.
    <br />
    <br />
    西森研究室では,
    最新のスマートフォンやWi-Fiに導入されているMIMOと呼ばれる技術に関数る研究を行っています.
    今年度も多くの学会発表や論文投稿を行うことがでｋました。これからは,
    これまでに培ったスキルを発揮して,
    ただ前だけを見て社会の荒波を乗り越えていきましょう.
    <br />
    <br />
    私達の研究室では, 無線通信技術についての研究を行っており,
    スマートフォンやドローンから電波の解析など様々なテーマについて検討しています.メンバー全員で熱心に研究に取り組んでおり,
    学会発表や論文投稿を通して, 様々な表彰を頂いております.
    <br />
    <br />

    <br />
    <br />

    <br />
    <br />

    <div id="read-more">
      <button v-on:click="toggleActive()" :class="getReadMoreClass()">
        READ MORE
      </button>
      <transition name="links">
        <div class="links" v-if="active">
          <router-link to="/lab/theme" class="link" id="theme">
            <p>
              各研究テーマについて
            </p>
          </router-link>
          <router-link to="/lab/activity" class="link" id="activity">
            <p>
              研究室の普段の活動について
            </p>
          </router-link>
          <router-link to="/lab/history" class="link" id="history">
            <p>
              研究実績について
            </p>
          </router-link>
        </div>
      </transition>
    </div>

    <div class="footer-space"></div>
  </div>
</template>

<script>
export default {
  name: "Lab_Contents",
  data() {
    return {
      active: false
    };
  },
  mounted() {},
  methods: {
    toggleActive() {
      this.active = !this.active;
    },
    getReadMoreClass() {
      if (this.active) {
        return { activated: true };
      }

      return { activated: false };
    }
  }
};
</script>

<style scoped lang="scss">
.header-space {
  height: 10vh;
}

.footer-space {
  margin-top: 5vh;
}

#read-more {
  margin: 0 5%;
  background-color: #303030;

  button {
    position: relative;
    width: 100%;
    height: 10vh;
    border: none;
    display: inline-block;
    background-color: #303030;
    color: #f0f0f0;
    font-weight: 700;

    line-height: 10vh;
    text-align: left;
    font-size: 1.8rem;

    &:focus {
      outline: none;
    }

    &::before {
      content: "";
      display: inline-block;
      width: 6vh;
      height: 6vh;
      margin: 2vh 1rem;
      // margin: 1vh 1vw 1vh;
      vertical-align: top;
      transform: rotateZ(90deg);
      background-image: url("../assets/lab/contents/open.svg");
      background-size: 100% 100%;
      transition: 0.4s;
    }
    &.activated {
      &::before {
        transform: rotateZ(0deg);
        background-image: url("../assets/lab/contents/close.svg");
      }
    }
  }

  .links {
    padding: 0 10% 1.5rem;

    .link {
      color: #101010;
      display: block;
      text-decoration: none;
      background-color: #ffffff;
      p {
        margin: 1.5rem 0;
        padding: 1rem 1rem;
        font-size: 1.8rem;
      }
    }
  }
}

// transition関係
.links-enter {
  opacity: 0;
  // border-bottom: 0px;
}

.links-enter-active {
  transition: 0.7s;
}

.links-enter-to {
  opacity: 1;
}

.links-leave {
  opacity: 1;
}

.links-leave-active {
  transition: 0.2s;
}

.links-leave-to {
  opacity: 0;
  font-size: 0.5rem;
}
</style>
