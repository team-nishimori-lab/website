<template>
  <div class="timer-set">
    <form v-on:submit="pushed">
      <div id="time">
        全体の時間 :
        <select v-model="min" required>
          <option v-for="m in minutesList" v-bind:key="m" v-bind:value="m">{{ m }}</option>
        </select>分
        <select v-model="sec" required>
          <option v-for="s in secondsList" v-bind:key="s" v-bind:value="s">{{ s }}</option>
        </select>秒
      </div>
      <div id="qst">
        <select class="select" v-model="qstNum" required>
          <option v-for="q in qstList" v-bind:key="q" v-bind:value="q">{{ q }}</option>
        </select>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="label">出題数</label>
      </div>
      <div id="sub-qst">
        <select class="select" v-model="subQstNum" required>
          <option v-for="sq in subQstList" v-bind:key="sq" v-bind:value="sq">{{ sq }}</option>
        </select>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label class="label">1題あたりの出問数</label>
      </div>
      <div id="submit-button">
        <b-button type="submit" block variant="outline-secondary">タイマースタート</b-button>
      </div>
    </form>
    <div id="format-button-div">
      <b-dropdown right text="玉手箱" variant="outline-info">
        <b-dropdown-item disabled>計数理解</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(15, 0, 29, 1)">図表読み取り-29問 (全29問, 15分)</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(35, 0, 40, 1)">図表読み取り-40問 (全40問, 35分)</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(20, 0, 20, 1)">表の穴埋め (全20問, 20分)</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(9, 0, 50, 1)">四則逆算 (全50問, 9分)</b-dropdown-item>
        <b-dropdown-item disabled>言語理解</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(15, 0, 8, 4)">GAB形式-32問 (8長文, 全32問, 15分)</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(25, 0, 13, 4)">GAB形式-52問 (13長文, 全52問, 25分)</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(10, 0, 8, 4)">IMAGES形式 (8長文, 全32問, 10分)</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(25, 0, 10, 1)">趣旨把握形式 (10長文, 全10問, 25分)</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item disabled>英語</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(10, 0, 8, 3)">GAB形式 (8長文, 全24問, 10分)</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(10, 0, 8, 3)">IMAGES形式 (8長文, 全24問, 10分)</b-dropdown-item>
      </b-dropdown>
      <b-dropdown right text="WebCAB" variant="outline-info">
        <b-dropdown-item disabled>CAB</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(9, 0, 50, 1)">暗算 (全50問, 9分)</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(12, 0, 30, 1)">法則性 (全30問, 12分)</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(15, 0, 36, 1)">命令表 (全36問, 15分)</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(16, 0, 30, 1)">暗号 (全30問, 16分)</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item disabled>GAB</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(25, 0, 13, 4)">言語 (13長文, 全52問, 25分)</b-dropdown-item>
        <b-dropdown-item v-on:click="formatted(35, 0, 35, 1)">計数 (全35問, 35分)</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimerSet",
  data() {
    return {
      minutesList: [...new Array(100).keys()],
      secondsList: [...new Array(60).keys()],
      qstList: [...new Array(300).keys()].slice(1),
      subQstList: [...new Array(10).keys()].slice(1),
      min: 0,
      sec: 0,
      qstNum: null,
      subQstNum: null
    };
  },
  methods: {
    pushed: function() {
      this.$emit("start", this.min, this.sec, this.qstNum, this.subQstNum);
    },
    formatted(min, sec, qstNum, subQstNum) {
      this.min = min;
      this.sec = sec;
      this.qstNum = qstNum;
      this.subQstNum = subQstNum;
      console.log("hoge", min, sec, qstNum, subQstNum);
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
#time {
  font-size: 1.5rem;
}

#qst, #sub-qst {
  position: relative;
  width: 14rem;
  margin: 2em auto;
  text-align: center;

  &:after {
    position: absolute;
    top: 1.2rem;
    right: 1rem;
    width: 0;
    height: 0;
    padding: 0;
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(0, 0, 0, 0.3);
    pointer-events: none;
  }

  .select {
    position: relative;
    font-family: inherit;
    background-color: transparent;
    width: 100%;
    padding: 0.7rem 0.7rem 0.2rem 0;
    font-size: 1.3rem;
    border-radius: 0;
    border: none;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.3);
    appearance: none;
    -webkit-appearance: none;

    &::-ms-expand {
      display: none;
    }

    &:focus {
      outline: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0);
    }

    $:focus ~ .label, &:valid ~ .label {
      color: #3a7cd1;
      top: -1.2rem;
      transition: 0.2s ease all;
      font-size: 1rem;
    }

    &:focus ~ .bar:before, &:focus ~ .bar:after {
      width: 50%;
    }
  }

  .label {
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.3rem;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 10px;
    transition: 0.2s ease all;
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;

    &:before, &:after {
      content: '';
      height: 2px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: #3a7cd1;
      transition: 0.2s ease all;
    }

    &:before {
      left: 50%;
    }

    &:after {
      right: 50%;
    }
  }

  .highlight {
    position: absolute;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }
}

#submit-button {
  padding: 0 35%;
}

#format-button-div {
  margin: 2.5rem 10%;
  padding: 1.5rem;
  border: 3px solid #DDDDDD;
}
</style>
