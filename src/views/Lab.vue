<template>
  <div class="lab">
    <img fluid alt="Vue logo" src="../assets/logo.png" />
    <ToastButton inputText="inputText" />
    <TextBox />
  </div>
</template>

<script>
// @ is an alias to /src
import ToastButton from "@/components/ToastButton.vue";
import TextBox from "@/components/TextBox.vue";

export default {
  components: {
    ToastButton,
    TextBox
  }
};
</script>
