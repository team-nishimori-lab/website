<template>
  <div class="lab">
    <img fluid alt="Vue logo" src="../assets/logo.png" />
    <ToastButton />
  </div>
</template>

<script>
// @ is an alias to /src
import ToastButton from "@/components/ToastButton.vue";

export default {
  components: {
    ToastButton
  }
};
</script>
