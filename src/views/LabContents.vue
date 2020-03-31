<template>
  <div class="lab-contents">
    <div class="headline">
      研究内容
    </div>
    <div id="bg"></div>
    <p class="scroll-Y" :class="{ sticky: position > 0 }">{{ scrollY }}</p>

    <!-- <div style="height: 300vh"></div> -->
  </div>
</template>

<script>
export default {
  name: "Lab_Contents",
  data() {
    return {
      scrollY: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    }
  }
};
</script>

<style scoped lang="stylus">
.lab-contents {
  text-align: center;
}

#bg {
  // background-repeat: no-repeat;
  width: 100%;
  height: 300vh;
  padding-top: calc(300 / 1000 * 100%); /* calc(画像高さ ÷ 画像横幅 × 100%) */
  // padding-top: 100vh;
  // background: url("https://source.unsplash.com/user/unsplash/") center center / cover no-repeat;
  background-attachment: fixed;
  background-size: cover;
  // background: url(bg.jpg) center center / cover no-repeat;
}

.scroll-Y {
  position: fixed;
}
</style>
