<template>
  <div class="home">
    <!-- <transition name="hl" appear>
      <header class="header">
        <div class="headline">
          ホーム
        </div>
      </header>
    </transition> -->
    <div id="header">
      <svg viewBox="0 0 250 180" height="60%" width="60%" id="svg-bg">
        <!-- <svg viewBox="0 0 250 180" id="svg-bg"> -->
        <g>
          <path
            stroke-width="5"
            d="
        M 50 70 
        l -30 -50
        h 60
        z
        v 50
        "
          />
          <path
            stroke-width="10"
            id="bar1"
            d="
          M 75 120
          v -40
          "
          />
          <path
            stroke-width="10"
            id="bar2"
            d="
            M 100 120 v -70
          "
          />
          <path
            stroke-width="3"
            id="under-bar"
            d="
          M 20 132 h 210
          "
          />
        </g>
        <text x="105" y="120" class="text" id="l">
          l
        </text>
        <text x="143" y="120" class="text" id="ab">
          ab
        </text>
        <text
          x="22"
          y="164"
          class="text"
          id="lower"
          :style="{ opacity: showLower }"
        >
          Nishimori
        </text>
      </svg>
    </div>

    <!-- --- --- --- --- welcome --- --- --- --- -->
    <transition name="part" appear>
      <div class="links">
        <router-link to="/lab/contents" id="lab">
          <p>
            研究室について
          </p>
        </router-link>
        <router-link to="/class" id="class">
          <p>
            授業について
          </p>
        </router-link>
        <router-link to="/faq" id="faq">
          <p>
            よくある質問
          </p>
        </router-link>
        <router-link to="/link" id="link">
          <p>
            リンク
          </p>
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  mounted: function() {},
  beforeDestroy: function() {}
};
</script>

<style scoped lang="scss">
svg {
  display: table-cell;
  vertical-align: middle;
  margin: 0 auto;

  path {
    stroke: #d0d0d0;
    fill: #d0d0d0;
  }

  %lab {
    fill: rgb(53, 141, 220); /* テキストの色 */
  }

  .text {
    // font-family: "Merriweather", serif;
    font-family: "Merriweather", serif;

    &#l {
      @extend %lab;
      font-weight: 200;
      font-size: 120px;
    }

    &#ab {
      @extend %lab;
      font-weight: 600;
      font-size: 70px;
    }

    &#lower {
      fill: #606060;
      font-weight: 600;
      font-size: 28px;
      letter-spacing: 8px;
    }
  }
}

@mixin after-template($url) {
  content: "";
  display: inline-block;
  width: 8vh;
  height: 8vh;
  background-size: contain;
  vertical-align: middle;
  background-image: url($url);
}

#header {
  text-align: center;
  // width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  height: 100vh;
  background: linear-gradient(#202020, #ffffff);
}

.links {
  a {
    height: 16vh;
    display: flex;
    align-items: center;
    padding: 0 10vh;
    margin: 0 0;
    border: 0px solid rgba(0, 0, 0, 0);
    text-shadow: 0.2rem 0.2rem 0.1rem rgba(10, 10, 10, 0.2);
    border: 1px solid rgba(20, 20, 20, 0.1);
    background-color: rgba(245, 245, 245, 0.7);

    p {
      margin: 0 auto;
      font-size: 2.2rem;
      color: rgb(0, 0, 0);
      display: table-cell;
    }
    transition: background 1s, image 1s;
    transition: 0.5s;

    &#lab {
      &::after {
        opacity: 0;
        transition-duration: 0.5s;
        @include after-template("../assets/home/lab.svg");
      }
      background-position: 20% 20%;
    }

    &#class {
      &::after {
        opacity: 0;
        transition-duration: 0.5s;
        @include after-template("../assets/home/class.svg");
      }
      background-position: 20% 23%;
    }

    &#faq {
      &::after {
        opacity: 0;
        transition-duration: 0.5s;
        @include after-template("../assets/home/faq.svg");
      }
      background-position: 20% 48%;
    }

    &#link {
      &::after {
        opacity: 0;
        transition-duration: 0.5s;
        @include after-template("../assets/home/link.svg");
      }
      background-position: 20% 20%;
    }

    &:hover {
      text-decoration: none;
      text-shadow: 0.1rem 0.1rem 0.05rem rgba(10, 10, 10, 0.5);
      margin: 2vh 10vw;
      background-color: rgba(235, 235, 235, 0.9);
      border: 1px solid rgba(20, 20, 20, 0.1);
      border-radius: 1rem;

      p {
        color: rgb(244, 244, 244);
      }

      &#lab {
        background: linear-gradient(
            90deg,
            rgba(10, 10, 10, 0.4),
            rgba(200, 200, 200, 0.3)
          ),
          url("../assets/home/lab_bg.jpg");
        background-size: cover;
        background-position: 20% 30%;
        &::after {
          opacity: 1;
        }
      }
      &#class {
        background: linear-gradient(
            90deg,
            rgba(10, 10, 10, 0.4),
            rgba(200, 200, 200, 0.3)
          ),
          url("../assets/home/class_bg.jpg");
        background-size: cover;
        background-position: 20% 30%;
        &::after {
          opacity: 1;
        }
      }
      &#faq {
        background: linear-gradient(
            90deg,
            rgba(10, 10, 10, 0.4),
            rgba(200, 200, 200, 0.3)
          ),
          url("../assets/home/faq_bg.jpg");
        background-size: cover;
        background-position: 20% 55%;
        &::after {
          opacity: 1;
        }
      }
      &#link {
        background: linear-gradient(
            90deg,
            rgba(10, 10, 10, 0.4),
            rgba(200, 200, 200, 0.3)
          ),
          url("../assets/home/link_bg.jpg");
        background-size: cover;
        background-position: 20% 30%;
        &::after {
          opacity: 1;
        }
      }

      // &::after {
      //   content: "";
      //   display: inline-block;
      //   width: 8vh;
      //   height: 8vh;
      //   background-size: contain;
      //   vertical-align: middle;
      // }
    }
  }
}

.header {
  text-align: center;
}
</style>
