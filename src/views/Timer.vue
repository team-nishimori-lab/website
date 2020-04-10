<template>
  <div class="timer">
    <div class="header-space"></div>

    <transition name="hl" appear>
      <div class="headline">タイマー</div>
    </transition>
    <transition name="part" appear>
      <div>
        <TimerSet @start="start" v-if="isSetting"></TimerSet>
        <TimerStart
          v-if="!isSetting"
          :min="min"
          :sec="sec"
          :qstNum="qstNum"
          :subQstNum="subQstNum"
        ></TimerStart>
      </div>
    </transition>
  </div>
</template>

<script>
import TimerSet from "@/components/TimerSet.vue";
import TimerStart from "@/components/TimerStart.vue";

export default {
  name: "Timer",
  data() {
    return {
      isSetting: true,
      allTimes: {},
      qstNum: 0,
      subQstNum: 0
    };
  },
  components: {
    TimerSet,
    TimerStart
  },
  methods: {
    start(min, sec, qstNum, subQstNum) {
      this.isSetting = false;
      this.min = min;
      this.sec = sec;
      this.qstNum = qstNum;
      this.subQstNum = subQstNum;
    }
  }
};
</script>

<style scoped lang="stylus">
.timer {
  text-align: center;
}
</style>
