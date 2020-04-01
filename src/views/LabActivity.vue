<template>
  <div class="lab-activity">
    <div class="headline">
      普段の生活
    </div>
    <div></div>
    "コアタイムはありますか？": "あります.", "ゼミはありますか？": "あります"<br />
    "輪講ってなんですか？": "あれです.", "進捗報告的なやつはある？": "hoge"<br />
    "研究室の一年間のスケジュールは？": "違うところに年表的な"<br />
    "研究室のイベントとか？": "これも違うところにはる", "当番はありますか？":
    "週替りで簡単なゴミ捨て", "長期休暇のスケジュールは？": "hoge"<br />
  </div>
</template>

<script>
export default {
  name: "Lab_Activity",
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

.lab-activity {
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
