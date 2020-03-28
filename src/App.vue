<template>
  <div id="app">
    <div class="shutter">
      <ShowLogo :svgHeight="svgHeight"></ShowLogo>
    </div>

    <div class="content">
      <div id="header">
        <b-navbar toggleable="xl" type="dark" variant="dark" fixed="top">
          <!-- ロゴなど -->
          <b-navbar-brand to="/">西森研究室</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <!-- 各項目へのリンク -->
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item-dropdown text="Lab" right>
                <b-dropdown-item to="/lab/contents">Contents</b-dropdown-item>
                <b-dropdown-item to="/lab/member">Member</b-dropdown-item>
                <b-dropdown-item to="/lab/history">History</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item to="/class">Class</b-nav-item>
              <b-nav-item to="/faq">FAQ</b-nav-item>
              <b-nav-item to="/link">Link</b-nav-item>
              <b-nav-item to="/timer">Timer</b-nav-item>
            </b-navbar-nav>

            <!-- 右側の要素 -->
            <b-navbar-nav class="ml-auto">
              <b-nav-text id="time-msg">{{ timeMsg }}</b-nav-text>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <router-view />
      <div id="footer">
        <b-navbar
          type="dark"
          variant="dark"
          fixed="bottom"
          class="inner"
        >Copyright (C) 2020- nishimori lab. All Rights Reserved.</b-navbar>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import ShowLogo from "@/components/ShowLogo2.vue";

export default {
  name: "App",
  data() {
    return {
      timeMsg: String,
      scrollY: 0,
      svgHeight: 0
    };
  },
  created() {
    this.svgHeight =
      (window.innerHeight * 25) / 18 > window.innerWidth
        ? window.innerWidth * (18 / 25)
        : window.innerHeight;
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.timeMsg = this.getMessageByTime();
  },
  updated() {
    this.timeMsg = this.getMessageByTime();
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
    getMessageByTime() {
      var now_hour = moment(new Date()).format("HH");
      let message = "";
      if (now_hour <= "02") {
        message = "深夜までご苦労様です";
      } else if (now_hour <= "04") {
        message = "目が開きません...";
      } else if (now_hour <= "06") {
        message = "気持ちの良い朝ですね";
      } else if (now_hour <= "09") {
        message = "おはようございます";
      } else if (now_hour <= "11") {
        message = "そろそろお昼ですね";
      } else if (now_hour <= "13") {
        message = "お昼を食べに行きましょう!";
      } else if (now_hour <= "16") {
        message = "眠たい時間です...";
      } else if (now_hour <= "18") {
        message = "こんばんわ";
      } else if (now_hour <= "20") {
        message = "夕食は済みましたか?";
      } else if (now_hour <= "22") {
        message = "一日お疲れ様でした";
      } else if (now_hour <= "24") {
        message = "一日が終わります";
      }
      return message;
    }
  },
  components: {
    ShowLogo
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Medula+One&display=swap");
// span #openning-msg {
//   font-family: "Medula One", cursive;
//   position: fixed;
//   font-weight: 550;
//   font-size: 3rem;
//   color: #ffffff;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: 9999;
//   margin: 0px auto;
//   animation: textFade 2.0S ease 0s 1 alternate forwards running;
// }

.shutter {
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(245, 245, 245);
  // background-color: #008554;
  z-index: 9998;
  animation: byeShutter 2s forwards 1.6s;

  ShowLogo {
    z-index: 9999;
    width: 10px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(200, 200, 200, 0.4);
    // background-color: #dae8da;
    width: 0;
    height: 1px;
    animation: shutterOpen 2s forwards 1.6s;
  }
}

.content {
  animation: none 2s forwards 1.6s;
}

@keyframes byeShutter {
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
    z-index: -1;
  }
}

@keyframes shutterOpen {
  0% {
    width: 0;
    height: 15rem;
  }
  50% {
    width: 100%;
    height: 11%;
  }
  90% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 100%;
    height: 100%;
  }
}

// @keyframes textFade {
//   0% {
//     top: 20vh;
//     opacity: 1;
//     // -webkit-transform: scale(1) rotate(3deg);
//   }
//   5% {
//     -webkit-transform: scale(1.5) rotate(3deg);
//   }
//   15% {
//     -webkit-transform: scale(2.5) rotate(-3deg);
//   }
//   25% {
//     -webkit-transform: scale(3.5) rotate(3deg);
//   }
//   35% {
//     -webkit-transform: scale(4.5) rotate(-3deg);
//   }
//   40% {
//     opacity: 1;
//     top: 30vh;
//   }
//   45% {
//     -webkit-transform: scale(4.5) rotate(0deg);
//   }
//   90% {
//     top: 0vh;
//     opacity: 0;
//   }
//   95% {
//     display: none;
//     transform: scale(0.5);
//   }
//   100% {
//   }
// }
</style>

<style scoped lang="stylus">
#header {
  margin-top: 7vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#footer {
  margin-top: 5vh;

  .inner {
    color: #DDDDDD;
    font-size: 0.7rem;
  }
}

#time-msg {
  font-size: 0.8rem;
}
</style>

<style lang="stylus">
html {
  font-size: 13px;
}

@media only screen and (min-width: 651px) {
  html {
    font-size: 16px;
  }
}

@media only screen and (min-width: 961px) {
  html {
    font-size: 19px;
  }
}

@import url('https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap&subset=japanese');

font-KM = 'Kosugi Maru';
hl-fs = 2.2rem;
hl-line-px = 0.2rem;
hl-line-color = #008554;

* {
  font-family: 'Gothic', sans-serif;
  font-size: 1.1rem;
}

.load-str {
  font-family: font-KM, sans-serif;
  color: #AAAAAA;
  font-size: 30px;
}

.headline {
  text-shadow: 0.2rem 0.2rem 0.2rem rgba(30, 30, 30, 0.25);
  text-align: center;
  font-family: font-KM, sans-serif;
  font-size: hl-fs;
  position: relative;
  line-height: 2.8rem;
  padding: 0.25rem 1rem;
  margin: 1rem 0 3rem;
  display: inline-block;
  border-bottom: 0.15rem solid rgba(0, 0, 0, 0.9);
}

// transition系
.hl-enter {
  opacity: 0;
}

.hl-enter-active {
  transition: opacity 0.5s;
}

.hl-enter-to {
  opacity: 1;
}

.part-enter {
  opacity: 0;
}

.part-enter-active {
  transition: opacity 1.5s;
}

.part-enter-to {
  opacity: 1;
}

.subpart-enter {
  opacity: 0;
}

.subpart-enter-active {
  transition: opacity 2.5s;
}

.subpart-enter-to {
  opacity: 1;
}
</style>
