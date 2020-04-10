<template>
  <transition appear name="hl">
    <div class="lab-contents">
      <div class="header-space"></div>
      <div class="headline">
        研究について
      </div>
      <div class="msg" id="study">
        西森研究室では, 無線通信技術についての研究を行っており, 中でも
        <span class="red bold">MIMO</span> (
        <span class="red bold">M</span>ultiple
        <span class="red bold">I</span>nput
        <span class="red bold">M</span>ultiple
        <span class="red bold">O</span>utput )
        技術を無線LANや携帯電話に適用させた研究を中心に行っています.
        <br />
        研究室内で多くのテーマがあり, それらには電波の伝搬特性の解析を行ったり,
        無線技術を用いたシステムの評価や, 伝搬環境制御の手法提案などがあります.
        <br />
        メンバー全員で熱心に研究に取り組んでおり, 学会発表や論文投稿を通して,
        様々な表彰を頂いております. <br />
      </div>

      <div class="headline">
        研究室について
      </div>
      <div class="msg" id="lab">
        先生のご指導のもと,
        研究室のメンバーがそれぞれのテーマに取り組んでいます. その結果,
        学会発表や論文投稿といった形で多くの成果を残しています.<br />
        また, 研究室のメンバー同士で普段から意見交換をしたり,
        雰囲気の良い研究室です.
      </div>

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
  </transition>
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
.footer-space {
  margin-top: 5vh;
}

.msg {
  margin: 0 7% 5rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
  border-left: 0.3rem solid rgba(140, 140, 140, 0.8);
  background-color: rgba(200, 200, 200, 0.2);
  padding: 0 1rem;
}

.red {
  color: rgba(230, 150, 20, 1);
  font-size: 1.7rem;
}

.bold {
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
    font-size: 2.2rem;

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
      box-shadow: 0.4rem 0.4rem 0.3rem rgba(150, 150, 150, 0.8);

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
