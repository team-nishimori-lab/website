<template>
  <div class="home">
    <b-img
      fluid
      alt="Vue logo"
      src="https://www.niigata-u.ac.jp/wp-content/uploads/2019/04/emain_color.jpg"
    />
    時間に応じて一言
    <div>
      <b-button
        variant="outline-secondary"
        href="https://github.com/haru1843"
        target="_blank"
      >
        Github
      </b-button>
      <b-button
        variant="outline-success"
        href="https://qiita.com/haru1843"
        target="_blank"
      >
        Qiita
      </b-button>
      <b-button
        variant="outline-info"
        href="https://twitter.com/haru1843inf"
        target="_blank"
      >
        Twitter
      </b-button>
      <b-button
        variant="outline-danger"
        href="https://atcoder.jp/users/haru1843"
        target="_blank"
      >
        AtCoder
      </b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home"
  // components: {
  //   HelloWorld
  // }
};
</script>
