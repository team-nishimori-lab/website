<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 v-show="showText">{{ button_msg }}</h1>
    <button v-on:click="pushed">push!</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    button_msg: String,
    showText: Boolean
  },
  methods: {
    pushed: function() {
      this.showText = !this.showText;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
