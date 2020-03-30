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
      <div class="links">
        <router-link to="/lab/contents" id="lab">
          <p>
            研究室について
          </p>
        </router-link>
        <router-link to="/class" id="class">
          <p>
            <!-- Check about contents of class -->
            CLASS
          </p>
        </router-link>
        <router-link to="/faq" id="faq">
          <p>
            FAQ
          </p>
        </router-link>
        <router-link to="/link" id="link">
          <p>
            LINK
          </p>
        </router-link>
      </div>
    </transition>
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
@mixin after-template($url) {
  content: "";
  display: inline-block;
  width: 8vh;
  height: 8vh;
  background-size: contain;
  vertical-align: middle;
  background-image: url($url);
}

.links {
  a {
    height: 13vh;
    display: flex;
    align-items: center;
    padding: 0 10vh;
    margin: 0 0;
    border: 0px solid rgba(0, 0, 0, 0);
    text-shadow: 0.2rem 0.2rem 0.1rem rgba(10, 10, 10, 0.2);
    border: 1px solid rgba(20, 20, 20, 0.1);
    background-color: rgba(245, 245, 245, 1);

    p {
      margin: 0 auto;
      font-size: 2.2rem;
      color: rgb(0, 0, 0);
      display: table-cell;
    }
    transition: 0.5s;

    &:hover {
      text-decoration: none;
      text-shadow: 0.1rem 0.1rem 0.05rem rgba(10, 10, 10, 0.5);
      margin: 2vh 10vw;
      background-color: rgba(235, 235, 235, 0.8);
      border: 1px solid rgba(20, 20, 20, 0.1);
      border-radius: 1rem;

      &#lab {
        &::after {
          @include after-template("../assets/home/lab.svg");
        }
      }
      &#class {
        &::after {
          @include after-template("../assets/home/class.svg");
        }
      }
      &#faq {
        &::after {
          @include after-template("../assets/home/faq.svg");
        }
      }
      &#link {
        &::after {
          @include after-template("../assets/home/link.svg");
        }
      }

      // &::after {
      //   content: "";
      //   display: inline-block;
      //   width: 8vh;
      //   height: 8vh;
      //   background-size: contain;
      //   vertical-align: middle;
      // }
    }
  }
}

.header {
  text-align: center;
}
</style>
