<template>
  <div>
    <input v-model="message" type="text" placeholder="任意の文字列を入力" />
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "TextBox",
  data() {
    return {
      message: ""
    };
  },
  props: {},
  methods: {
    makeToast() {}
  }
};
</script>
