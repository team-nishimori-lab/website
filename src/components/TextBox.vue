<template>
  <div>
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    hoge
  </div>
</template>

<script>
export default {
  name: "TextBox",
  data() {
    return {
      // message: String
    };
  },
  props: {},
  methods: {
    makeToast() {}
  }
};
</script>
