<template>
  <div class="logo">
    <svg
      viewBox="0 0 250 180"
      :height="svgHeight + 'px'"
      :width="svgHeight * ratio + 'px'"
      id="svg-bg"
    >
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
        <path stroke-width="10" id="bar1" :d="moveBar1" />
        <path stroke-width="10" id="bar2" :d="moveBar2" />
        <path stroke-width="10" id="bar3" :d="moveBar3" />
        <path stroke-width="3" id="under-bar" :d="moveUnderBar" />
      </g>
      <text x="105" y="120" class="text" id="l" :style="{ opacity: showl }">
        l
      </text>
      <text x="143" y="120" class="text" id="ab" :style="{ opacity: showab }">
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
</template>

<script>
export default {
  data() {
    return {
      animaitonSpanBars: 160,
      animaitonSpanOthers: 20,
      extendObj: null,
      times: 3,
      step: 0,
      bar1: {
        height: 0
      },
      bar2: {
        height: 0
      },
      bar3: {
        height: 0
      },
      underBar: {
        width: 0
      },
      showl: 0,
      showab: 0,
      showLower: 0,
      ratio: 25 / 18
    };
  },
  props: {
    svgHeight: null
  },
  computed: {
    moveBar1() {
      return "M 75 120 v " + `${-this.bar1["height"]}`;
    },
    moveBar2() {
      return "M 100 120 v " + `${-this.bar2["height"]}`;
    },
    moveBar3() {
      return "M 125 120 v " + `${-this.bar3["height"]}`;
    },
    moveUnderBar() {
      return "M 20 132 h " + `${this.underBar["width"]}`;
    }
  },
  methods: {
    extendBars() {
      if (this.step == 0) {
        this.bar1["height"] = 40;
        this.step += 1;
      } else if (this.step == 1) {
        this.bar2["height"] = 70;
        this.step += 1;
      } else if (this.step == 2) {
        this.bar3["height"] = 100;
        this.step += 1;
        this.times -= 1;
        if (this.times <= 0) {
          clearInterval(this.extendObj);
          this.extendObj = window.setInterval(
            this.extendUnderBar,
            this.animaitonSpanOthers
          );
        }
      } else {
        this.bar1["height"] = 0;
        this.bar2["height"] = 0;
        this.bar3["height"] = 0;
        this.step = 0;
      }
    },
    extendUnderBar() {
      if (this.underBar["width"] + 2 >= 220) {
        this.underBar["width"] = 210;
        clearInterval(this.extendObj);
        setTimeout(this.fadeBar3, 350);
        this.showl = 1; // 上の文字 l の表示
        this.showLower = 1; // 下の文字 nishimori の表示
        this.showab = 1; // 上の文字 ab の表示
      } else {
        this.underBar["width"] = this.underBar["width"] + 9;
      }
    },
    fadeBar3() {
      this.bar3["height"] = 0;
    }
  },
  mounted() {
    this.extendObj = window.setInterval(
      this.extendBars,
      this.animaitonSpanBars
    );
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Merriweather:300&display=swap");

.logo {
  text-align: center;
  // width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

#svg-bg {
  display: table-cell;
  vertical-align: middle;
  margin: 0 auto;
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // margin: 0 auto;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
}

path {
  stroke: #ffffff;
  fill: #ffffff;
}

%lab {
  fill: rgb(53, 181, 240); /* テキストの色 */
}

.text {
  // font-family: "Merriweather", serif;
  font-family: "Merriweather", serif;

  &#l {
    @extend %lab;
    font-weight: 200;
    font-size: 120px;
    opacity: 0;
    transition: opacity 0.8s 0.3s;
  }

  &#ab {
    @extend %lab;
    font-weight: 600;
    font-size: 70px;
    opacity: 0;
    transition: opacity 0.8s 0.3s;
  }

  &#lower {
    fill: #ffffff;
    font-weight: 600;
    font-size: 28px;
    letter-spacing: 8px;
    opacity: 0;
    transition: opacity 0.5s 0s;
  }
}
</style>
