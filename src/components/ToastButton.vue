<template>
  <div>
    <p></p>
    <input v-model="inputText" type="text" placeholder="任意の文字列を入力" />
    <p>これ → {{ inputText }}</p>
    <b-button @click="makeToast()">いっぱいおしてね</b-button>
  </div>
</template>

<script>
export default {
  name: "ToastButton",
  data() {
    return {
      toastCount: 0,
      inputText: ""
    };
  },
  props: {},
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
