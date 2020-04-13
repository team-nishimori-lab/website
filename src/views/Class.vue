<template>
  <div class="class">
    <div class="header-space"></div>

    <div v-show="loadingTime || loadingApi" class="loader">
      <vue-loading
        type="beat"
        color="#BCBCBC"
        :size="{ width: '140px', height: '140px' }"
      >
      </vue-loading>
      <div class="load-str">
        授業データの更新中...
      </div>
    </div>
    <transition name="hl">
      <div v-show="!(loadingTime || loadingApi)" class="hl">
        <div class="headline">
          授業を選択
        </div>
      </div>
    </transition>
    <transition name="part">
      <div v-show="!(loadingTime || loadingApi)" class="select">
        <form id="classSelect">
          <div class="container">
            <div
              once
              v-for="classInfo in getClassInfo()"
              :key="classInfo['id']"
              class="radio"
            >
              <input
                name="radio"
                type="radio"
                :id="classInfo['id']"
                :value="classInfo['value']"
              />
              <label class="radio-label" :for="classInfo['id']">
                {{ classInfo["className"] }}
              </label>
            </div>
          </div>
        </form>
        <div style="padding: 0% 35%">
          <b-button
            id="decide"
            v-on:click="selected"
            block
            variant="outline-secondary"
          >
            決定
          </b-button>
        </div>
      </div>
    </transition>
    <div class="footer-space"></div>
  </div>
</template>

<script>
import { VueLoading } from "vue-loading-template";

export default {
  name: "Class",
  methods: {
    ToastAleart() {
      this.$bvToast.toast("いずれかの授業を選択してください", {
        title: "ValueError",
        autoHideDelay: 3000,
        appendToast: false
      });
    },
    selected: function() {
      var state = document.getElementById("classSelect").radio.value;
      if (state == "") {
        this.ToastAleart();
      } else {
        this.$router.push(`/class/${state}`);
      }
    },
    getClassInfo() {
      var infoArr = [];
      var id = 0;
      if (!this.orgData) {
        this.$router.push(`/class`);
      }
      for (var d of this.orgData) {
        try {
          var className = /#class_(.+)/.exec(d["description"])[1];
        } catch (error) {
          continue;
        }

        infoArr[id] = {
          className: className,
          id: id,
          value: d["id"]
        };
        id++;
      }
      return infoArr;
    }
  },
  data() {
    return {
      orgData: "hoge",
      radioList: "",
      loadingTime: true,
      loadingApi: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loadingTime = false;
    }, 500);
    const axios = require("axios");
    axios
      .get("https://api.github.com/users/nishimori-lab/gists")
      .then(response => {
        this.orgData = response["data"];
        this.loadingApi = false;
      });
  },
  components: {
    VueLoading
  }
};
</script>

<style scoped lang="scss">
$color1: #f4f4f4;
$color2: #3197ee;

.class {
  text-align: center;
}

.container {
  .radio {
    margin: 0.5rem 0;
    width: 80vw;
    input {
      position: absolute;
      opacity: 0;
      + .radio-label {
        transition: 0.4s;
        border: 1px dashed rgba(40, 40, 40, 0.5);
        border-radius: 0.5rem;
        background-color: rgb(235, 235, 235);
        color: rgb(50, 50, 50);

        width: 100%;
        font-size: 1.8rem;
        line-height: 7vh;

        &:before {
          content: "";
          background: $color1;
          border-radius: 100%;
          border: 1px solid darken($color1, 25%);
          display: inline-block;
          width: 4vh;
          height: 4vh;
          margin: 1.5vh 0.5rem 1.5vh 1rem;
          vertical-align: top;
          cursor: pointer;
          transition: all 500ms ease;
        }
      }
      &:checked {
        + .radio-label {
          border: 1px solid rgba(40, 40, 40, 0.8);
          border-radius: 2rem;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.3) 60%,
            rgba(30, 140, 245, 0.5)
          );

          font-size: 1.9rem;
          color: rgb(0, 0, 0);
          margin-left: 1rem;
          text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);

          &:before {
            background-color: $color2;
            box-shadow: inset 0 0 0 4px $color1;
          }
        }
      }
      &:focus {
        + .radio-label {
          &:before {
            outline: none;
            border-color: $color2;
          }
        }
      }
      &:disabled {
        + .radio-label {
          &:before {
            box-shadow: inset 0 0 0 4px $color1;
            border-color: darken($color1, 25%);
            background: darken($color1, 25%);
          }
        }
      }
      + .radio-label {
        margin: 0;
        &:empty {
          &:before {
            margin-right: 0;
          }
        }
      }
    }
  }
}

.loader {
  margin: 10vh 0 0;
}

#decide {
  font-size: 1.5rem;
}

.container {
  // @media only screen and (max-width: 550px) {
  //   padding: 0 0 0 15%;
  // }
  // @media only screen and (min-width: 550px) and (max-width: 800px) {
  //   padding: 0 0 0 30%;
  // }
  // @media only screen and (min-width: 800px) and (max-width: 3000px) {
  //   padding: 0 0 0 35%;
  // }
  // @media only screen and (min-width: 3000px) {
  //   padding: 0 0 0 45%;
  // }
  padding: 0 0 0 10vw;
  text-align: left;
  margin: 0;
}

.footer-space {
  margin-top: 5vh;
}
</style>
