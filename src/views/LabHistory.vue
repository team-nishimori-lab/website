<template>
  <div class="lab">
    <svg viewbox="0 0 300 300" width="600" height="300">
      <g>
        <path
          stroke="#3f3f3f"
          stroke-width="5"
          fill="#3f3f3f"
          d="
        M 100 130 
        l -30 -50
        H 130
        Z
        v 50
        "
        ></path>
        <path
          stroke="#3f3f3f"
          stroke-width="10"
          fill="#3f3f3f"
          id="bar1"
          :d="moveBar1"
        ></path>
        <path
          stroke="#3f3f3f"
          stroke-width="10"
          fill="#3f3f3f"
          id="bar2"
          :d="moveBar2"
        ></path>
        <path
          stroke="#3f3f3f"
          stroke-width="3"
          fill="#5f5f5f"
          id="under-bar"
          :d="moveUnderBar"
        ></path>
      </g>
      <text x="165" y="180" class="text" id="l" :style="{ opacity: showl }">
        l
      </text>
      <text x="203" y="180" class="text" id="ab" :style="{ opacity: showab }">
        ab
      </text>
      <text
        x="76"
        y="224"
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
      animaitonSpanBar1: 30,
      animationSpanBar2: 30,
      animaitonSpanUnderBar: 30,
      extendObj: null,
      bar1: {
        height: 0
      },
      bar2: {
        height: 0
      },
      underBar: {
        width: 0
      },
      showl: 0,
      showab: 0,
      showLower: 0
    };
  },
  computed: {
    moveBar1() {
      return "M 125 180 v " + `${-this.bar1["height"]}`;
    },
    moveBar2() {
      return "M 150 180 v " + `${-this.bar2["height"]}`;
    },
    moveUnderBar() {
      return "M 70 192 h " + `${this.underBar["width"]}`;
    }
  },
  methods: {
    extendBar1() {
      if (this.bar1["height"] + 2 >= 40) {
        this.bar1["height"] = 40;
        clearInterval(this.extendObj);
        this.extendObj = window.setInterval(
          this.extendBar2,
          this.animationSpanBar2
        );
      } else {
        this.bar1["height"] = this.bar1["height"] + 3;
      }
    },
    extendBar2() {
      if (this.bar2["height"] + 2 >= 70) {
        this.bar2["height"] = 70;
        clearInterval(this.extendObj);
        this.extendObj = window.setInterval(
          this.extendUnderBar,
          this.animaitonSpanUnderBar
        );
        this.showl = 1; // 下の文字 nishimori の表示
      } else {
        this.bar2["height"] = this.bar2["height"] + 3;
      }
    },
    extendUnderBar() {
      if (this.underBar["width"] + 2 >= 220) {
        this.underBar["width"] = 220;
        clearInterval(this.extendObj);
        this.showLower = 1; // 下の文字 nishimori の表示
        this.showab = 1; // 下の文字 nishimori の表示
      } else {
        this.underBar["width"] = this.underBar["width"] + 9;
      }
    }
  },
  mounted() {
    this.extendObj = window.setInterval(
      this.extendBar1,
      this.animaitonSpanBar1
    );
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Merriweather:300&display=swap");
@import url("https://fonts.googleapis.com/css?family=Comic+Neue&display=swap");

%lab {
  fill: rgba(25, 120, 240, 0.75); /* テキストの色 */
  stroke: #707070;
  stroke-width: 2px; /* ふちどりのふとさ */
}

.text {
  // font-family: "Merriweather", serif;
  font-family: "Merriweather", serif;

  &#l {
    @extend %lab;
    font-weight: 200;
    font-size: 120px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &#ab {
    @extend %lab;
    font-weight: 600;
    font-size: 70px;
    opacity: 0;
    transition: opacity 0.5s 0.2s;
  }

  &#lower {
    font-family: "Comic Neue", cursive;
    font-weight: 600;
    font-size: 30px;
    letter-spacing: 10px;
    opacity: 0;
    transition: opacity 0.5s;
  }
}
</style>
