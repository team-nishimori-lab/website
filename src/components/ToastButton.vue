<template>
  <div>
    <b-button @click="makeToast()">いっぱいおしてね</b-button>
    <p>hoge</p>
  </div>
</template>

<script>
export default {
  name: "ToastButton",
  data() {
    return {
      toastCount: 0
    };
  },
  props: {
    inputText: String
  },
  methods: {
    makeToast() {
      this.toastCount++;
      this.$bvToast.toast(
        `${this.inputText} と 入力することは固く禁じられています.`,
        {
          title: `${this.toastCount}回目の忠告`,
          autoHideDelay: 5000,
          appendToast: false
        }
      );
    }
  }
};
</script>
