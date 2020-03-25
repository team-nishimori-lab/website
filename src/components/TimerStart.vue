<template>
  <div class="timer-start">
    <div class="show-remain-time">
      <!-- 全体時間に関する表示 -->
      <div class="name all">全体</div>
      <div class="num all">-</div>
      <div class="remain-time all">{{ getRemainAllTime }}</div>

      <b-progress
        class="bar-all"
        variant="success"
        :value="allBarWidth"
        :max="1000"
        show-progress
        animated
      ></b-progress>

      <!-- 題時間に関する表示 -->
      <div class="name qst">題</div>
      <div class="num qst">{{ qstCount }}</div>
      <div class="remain-time qst">{{ getRemainQstTime }}</div>

      <b-progress
        class="bar-qst"
        variant="success"
        :value="qstBarWidth"
        :max="1000"
        show-progress
        animated
      ></b-progress>

      <!-- 問時間に関する表示 -->
      <div class="name sub-qst" v-if="showSubQstTime">問</div>
      <div class="num sub-qst" v-if="showSubQstTime">{{ subQstCount }}</div>
      <div class="remain-time sub-qst" v-if="showSubQstTime">{{ getRemainSubQstTime }}</div>

      <b-progress
        class="bar-sub-qst"
        variant="success"
        :value="subQstBarWidth"
        :max="1000"
        show-progress
        animated
        v-if="showSubQstTime"
      ></b-progress>

      <!-- <div class="qstTime">題の残り : {{ getRemainQstTime }}</div>
      <div class="subQstTime" v-if="showSubQstTime">問の残り : {{ getRemainSubQstTime }}</div>-->
    </div>
    <div class="time-table">
      <table v-once>
        <thead>
          <tr>
            <th>---</th>
            <th>数</th>
            <th>1つあたりの時間</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>全体</td>
            <td>-</td>
            <td>{{ parseInt(allTime / 60) }}分 {{ allTime % 60 }}秒</td>
          </tr>
          <tr>
            <td>題</td>
            <td>{{ qstNum }}</td>
            <td>{{ qstTime.toFixed(1) }}秒/題</td>
          </tr>
          <tr v-if="showSubQstTime">
            <td>問</td>
            <td>{{ subQstNum }}</td>
            <td>{{ subQstTime.toFixed(1) }}秒/問</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimerStart",
  data() {
    return {
      allTime: 0,
      qstTime: 0,
      subQstTime: 0,

      remainAllTime: 0,
      remainQstTime: 0,
      remainSubQstTime: 0,

      allTimes: { min: 0, sec: 0 },
      qstTimes: { min: 0, sec: 0 },
      subQstTimes: { min: 0, sec: 0 },
      qstCount: 0,
      subQstCount: 0,
      timerObj: null,

      showSubQstTime: true,

      allBarWidth: 0,
      qstBarWidth: 0,
      subQstBarWidth: 0
    };
  },
  created() {
    // 割り当て時間を設定
    this.remainAllTime = this.allTime = this.min * 60 + this.sec;
    this.remainQstTime = this.qstTime = this.allTime / this.qstNum;
    this.remainSubQstTime = this.subQstTime = this.qstTime / this.subQstNum;
    if (this.subQstNum <= 1) {
      this.showSubQstTime = false;
    }

    let self = this;
    this.timerObj = setInterval(function() {
      self.count();
    }, 100);
  },
  methods: {
    count: function() {
      // 全体の残り時間に対する処理
      if (this.remainAllTime <= 0) {
        this.complete();
      } else {
        this.remainAllTime -= 0.1;
      }

      // 題の残り時間に対する処理
      if (this.remainQstTime <= 0) {
        this.qstCount += 1;
        this.remainQstTime = this.qstTime;
        this.subQstCount = 0;
        this.remainSubQstTime = this.subQstTime;
      } else if (this.remainSubQstTime <= 0) {
        this.remainQstTime -= 0.1;
        this.subQstCount += 1;
        this.remainSubQstTime = this.subQstTime;
      } else {
        this.remainSubQstTime -= 0.1;
        this.remainQstTime -= 0.1;
      }

      this.allBarWidth =
        ((this.allTime - this.remainAllTime) / this.allTime).toFixed(4) * 1000;
      this.qstBarWidth =
        ((this.qstTime - this.remainQstTime) / this.qstTime).toFixed(4) * 1000;
      this.subQstBarWidth =
        ((this.subQstTime - this.remainSubQstTime) / this.subQstTime).toFixed(
          4
        ) * 1000;
    },

    complete: function() {
      clearInterval(this.timerObj);
    }
  },
  computed: {
    getRemainAllTime: function() {
      let timeStrings = [
        parseInt(this.remainAllTime / 60).toString(),
        parseInt(this.remainAllTime % 60).toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str;
        } else {
          return str;
        }
      });
      return timeStrings[0] + ":" + timeStrings[1];
    },
    getRemainQstTime: function() {
      return this.remainQstTime.toFixed(1);
    },
    getRemainSubQstTime: function() {
      return this.remainSubQstTime.toFixed(1);
    }
  },
  props: {
    min: null,
    sec: null,
    qstNum: null,
    subQstNum: null
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.show-remain-time {
  margin: 0 15%;
  // font関係
  font-size: 3rem;
  // grid関係
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  grid-template-rows: 1fr 0.1fr 1fr 0.1fr 1fr 0.1fr;

  .all {
    font-size: 3.3rem;
    grid-row-start: 1;
    grid-row-end: 2;
    margin-bottom: 0;
  }

  .bar-all {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 4;
    margin-bottom: 3rem;
  }

  .qst {
    font-size: 2.8rem;
    grid-row-start: 3;
    grid-row-end: 4;
    // background-color: #20cE8E;
    // border-bottom: 0.5rem solid rgba(200, 200, 200, 0.8);
    margin-bottom: 1rem;
  }

  .bar-qst {
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 1;
    grid-column-end: 4;
    margin-bottom: 3rem;
  }

  .sub-qst {
    font-size: 2.4rem;
    grid-row-start: 5;
    grid-row-end: 6;
    margin-bottom: 1rem;
  }

  .bar-sub-qst {
    grid-row-start: 6;
    grid-row-end: 7;
    grid-column-start: 1;
    grid-column-end: 4;
    margin-bottom: 3rem;
  }
}

.allTime {
  font-size: 3rem;
}

.qstTime {
  font-size: 2.5rem;
}

.subQstTime {
  font-size: 2.2rem;
}

.time-table {
  text-align: center;
  margin: 1rem 0;

  table {
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }

  table, th, td {
    font-size: 1.4rem;
    border-collapse: collapse;
    border: 1.5px solid #3f3f3f;
    line-height: 1.5rem;
  }

  th {
    padding: 0.8rem;
    font-weight: bold;
    background: #3f3f3f;
    color: #ffffff;
  }

  td {
    width: 10rem;
    padding: 1rem;
  }

  tr:nth-child(even) {
    background: #E0E0E0;
  }
}
</style>
