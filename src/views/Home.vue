<template>
  <div class="home">
    <transition name="hl" appear>
      <header class="header">
        <div class="headline">
          ホーム
        </div>
      </header>
    </transition>

    <!-- --- --- --- --- welcome --- --- --- --- -->
    <transition name="part" appear>
      <div class="link" id="lab">How about Nishimori lab?</div>
    </transition>

    <transition name="part" appear>
      <div class="link" id="class">hoge</div>
    </transition>

    <transition name="part" appear>
      <div class="link" id="faq">hoge</div>
    </transition>

    <transition name="part" appear>
      <div class="link" id="link">hoge</div>
    </transition>

    <!-- <transition name="show-content">
    </transition> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  mounted: function() {},
  beforeDestroy: function() {}
};
</script>

<style scoped lang="scss">
.link {
  &#lab {
    border: 3px solid #ff0000;
  }
}
.header {
  text-align: center;
}
</style>
