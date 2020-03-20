<script>
export default {
  name: "Toast",
  methods: {
    makeToast(text, title) {
      this.$bvToast.toast(text, {
        title: title,
        autoHideDelay: 5000,
        appendToast: false
      });
    }
  }
};
</script>
