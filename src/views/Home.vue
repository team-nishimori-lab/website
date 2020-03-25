<template>
  <div class="home">
    <transition name="hl" appear>
      <header class="header">
        <div class="headline">
          ホーム
        </div>
      </header>
    </transition>

    <!-- --- --- --- --- welcome --- --- --- --- -->
    <transition name="part" appear>
      <div id="welcome" class="box">
        <div class="content">
          <router-link to="/">Welcome</router-link>
          <p>Welcome to our website.{{ this.scrollY + this.height }}</p>
        </div>
        <div class="circle1"></div>

        <div class="circle2"></div>

        <div class="circle3"></div>
      </div>
    </transition>

    <!-- --- --- --- --- lab --- --- --- --- -->

    <div id="lab" class="box" :style="{ opacity: opacityList['lab'] }">
      <div class="content">
        <router-link to="/lab/contents">Lab</router-link>
        <p>研究紹介など</p>
      </div>
      <div class="circle1"></div>

      <div class="circle2"></div>

      <div class="circle3"></div>
    </div>

    <!-- --- --- --- --- class --- --- --- --- -->
    <div id="class" class="box" :style="{ opacity: opacityList['class'] }">
      <div class="content">
        <router-link to="/class">Class</router-link>
        <p>授業概要や配布資料など</p>
      </div>
      <div class="circle1"></div>

      <div class="circle2"></div>

      <div class="circle3"></div>
    </div>

    <!-- --- --- --- --- FAQ --- --- --- --- -->
    <div id="faq" class="box" :style="{ opacity: opacityList['faq'] }">
      <div class="content">
        <router-link to="/faq">FAQ</router-link>
        <p>研究室へのよくある質問</p>
      </div>
      <div class="circle1"></div>

      <div class="circle2"></div>

      <div class="circle3"></div>
    </div>

    <!-- --- --- --- --- Link --- --- --- --- -->
    <div id="link" class="box" :style="{ opacity: opacityList['link'] }">
      <div class="content">
        <router-link to="/link">Link</router-link>
        <p>リンク集はこちらから!</p>
      </div>
      <div class="circle1"></div>

      <div class="circle2"></div>

      <div class="circle3"></div>
    </div>

    <!-- <transition name="show-content">
    </transition> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      scrollY: 0,
      opacityList: {
        lab: 0,
        class: 0,
        faq: 0,
        link: 0
      }
    };
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;

      for (let key in this.opacityList) {
        if (this.opacityList[key] != 0) continue;

        let yPos =
          document.getElementById(key).getBoundingClientRect().top +
          this.scrollY;
        if (this.scrollY + this.height - this.height / 5 > yPos) {
          this.opacityList[key] = 1;
        }
      }
    },
    route(url) {
      this.$router.push(url);
    }
  },
  mounted: function() {
    window.addEventListener("scroll", this.handleScroll);
    for (let key in this.opacityList) {
      if (this.opacityList[key] != 0) continue;

      let yPos =
        document.getElementById(key).getBoundingClientRect().top + this.scrollY;
      if (this.scrollY + this.height - 100 > yPos) {
        this.opacityList[key] = 1;
      }
    }
  },
  beforeDestroy: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped lang="scss">
.box {
  margin: 2rem auto 10rem;
  height: 19rem;
  width: 19rem;
  transition: 1.2s;

  .content {
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 1.8rem;
    font-weight: 500;
    height: 19rem;
    width: 19rem;
    position: absolute;
    padding: 2.5rem 1.5rem;
    z-index: 3;

    %text-base {
      vertical-align: middle;
      z-index: 1;
      // margin-top: 2rem;
      // margin-left: 4rem;
      position: relative;
      font-size: 1.6rem;
      font-weight: 500;
    }

    a {
      @extend %text-base;
      padding: 0.4rem 1.2rem;
      color: #707070;
      font-size: 1.8rem;
      font-weight: 700;
      background-color: rgba(255, 255, 255, 0.4);
      box-shadow: 6px 5px rgba(30, 100, 235, 0.3);
      transition: 0.3s;

      &:hover {
        color: #202020;
        background-color: rgba(255, 255, 255, 0.6);
        box-shadow: 3px 3px rgba(30, 100, 235, 0.6);
      }
    }

    p {
      margin-top: 1rem;
      color: #ffffff;
      font-weight: 600;
      @extend %text-base;
      text-shadow: 3px 3px rgba(20, 20, 20, 0.3);
    }
  }

  .circle1,
  .circle2,
  .circle3 {
    mix-blend-mode: multiply;
    position: absolute;
    text-decoration: none;
    height: 19rem;
    width: 19rem;
  }

  .circle1 {
    background-color: rgba(20, 210, 110, 0.2);
    border-top-left-radius: 40% 60%;
    border-top-right-radius: 50% 30%;
    border-bottom-right-radius: 60% 40%;
    border-bottom-left-radius: 40% 50%;
    animation: border-animation 6s infinite linear;
  }

  .circle2 {
    background-color: rgba(30, 200, 160, 0.3);
    border-top-left-radius: 60% 50%;
    border-top-right-radius: 40% 50%;
    border-bottom-right-radius: 50% 60%;
    border-bottom-left-radius: 60% 70%;
    animation: border-animation 4s infinite linear;
  }

  .circle3 {
    background-color: rgba(110, 230, 90, 0.2);
    border-top-left-radius: 50% 60%;
    border-top-right-radius: 50% 40%;
    border-bottom-right-radius: 50% 30%;
    border-bottom-left-radius: 50% 40%;
    animation: border-animation 3s infinite linear;
  }
}

@keyframes border-animation {
  to {
    transform: rotate(360deg);
  }
}

.middle {
  background-color: rgba(20, 20, 20, 0.9);
}

.header {
  text-align: center;
}

// transition系
// .hl-enter {
//   opacity: 0;
// }

// .hl-enter-active {
//   transition: opacity 0.5s;
// }

// .hl-enter-to {
//   opacity: 1;
// }
</style>
