<template>
  <div class="home">
    <!-- <transition name="hl" appear>
      <header class="header">
        <div class="headline">
          ホーム
        </div>
      </header>
    </transition> -->
    <div id="header" :class="imgClassActiveDict">
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
        <text x="22" y="164" class="text" id="lower">
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
    return {
      imgClassActiveDict: {
        "bg-img01": false,
        "bg-img02": false,
        "bg-img03": false,
        "bg-img04": false,
        "bg-img05": false
      }
    };
  },
  created() {
    var keys = Object.keys(this.imgClassActiveDict);
    var random = Math.floor(Math.random() * keys.length);
    this.imgClassActiveDict[keys[random]] = true;
  }
};
</script>

<style scoped lang="scss">
svg {
  display: table-cell;
  vertical-align: middle;
  margin: 0 auto;

  path {
    stroke: #ffffff;
    fill: #ffffff;
  }

  %lab {
    fill: rgb(53, 141, 220);
  }

  .text {
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
      fill: #ffffff;
      font-weight: 600;
      font-size: 28px;
      letter-spacing: 8px;
    }
  }
}

@mixin after-template($url) {
  content: "";
  display: inline-block;
  width: 8vw;
  height: 8vw;
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
  background-size: cover;
}

.bg-img01 {
  background: linear-gradient(
      rgba(10, 10, 10, 0.6) 20%,
      rgba(110, 110, 110, 0.7) 80%,
      rgba(255, 255, 255, 01)
    ),
    url("../assets/home/header/01.jpg");
}

.bg-img02 {
  background: linear-gradient(
      rgba(10, 10, 10, 0.6) 20%,
      rgba(110, 110, 110, 0.7) 80%,
      rgba(255, 255, 255, 01)
    ),
    url("../assets/home/header/02.jpg");
}

.bg-img03 {
  background: linear-gradient(
      rgba(10, 10, 10, 0.6) 20%,
      rgba(110, 110, 110, 0.7) 80%,
      rgba(255, 255, 255, 01)
    ),
    url("../assets/home/header/03.png");
}

.bg-img04 {
  background: linear-gradient(
      rgba(10, 10, 10, 0.6) 20%,
      rgba(110, 110, 110, 0.7) 80%,
      rgba(255, 255, 255, 01)
    ),
    url("../assets/home/header/04.jpg");
}

.bg-img05 {
  background: linear-gradient(
      rgba(10, 10, 10, 0.6) 20%,
      rgba(110, 110, 110, 0.7) 80%,
      rgba(255, 255, 255, 01)
    ),
    url("../assets/home/header/05.jpg");
}

.links {
  a {
    height: 16vh;
    display: flex;
    align-items: center;
    padding: 0 10vw;
    margin: 0 0;
    text-shadow: 0.2rem 0.2rem 0.1rem rgba(10, 10, 10, 0.2);
    border: 0.05rem solid rgba(20, 20, 20, 0.1);
    background-color: rgba(245, 245, 245, 0.7);

    p {
      margin: 0 auto;
      font-size: 2rem;
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
      background-position: 20% 23%;
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
      margin: 0 7vw;
      background-color: rgba(235, 235, 235, 0.9);
      border: 0.15rem solid rgba(20, 20, 20, 0.6);
      border-radius: 1rem;

      p {
        font-weight: 700;
        color: rgb(244, 244, 244);
      }

      &#lab {
        background: linear-gradient(
            90deg,
            rgba(10, 10, 10, 0.6),
            rgba(230, 230, 230, 0.3)
          ),
          url("../assets/home/lab_bg.jpg");
        background-size: cover;
        background-position: 20% 35%;
        &::after {
          opacity: 1;
        }
      }
      &#class {
        background: linear-gradient(
            90deg,
            rgba(10, 10, 10, 0.6),
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
            rgba(10, 10, 10, 0.6),
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
            rgba(10, 10, 10, 0.6),
            rgba(230, 230, 230, 0.3)
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
