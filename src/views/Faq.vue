<template>
  <div class="faq">
    <transition name="hl" appear>
      <div class="headline">
        よくある質問
      </div>
    </transition>
    <!--  -->
    <div class="faq-link" id="link-study">
      <button
        v-on:click="toggleActive('study')"
        :class="getActivatedClass('study')"
      >
        研究について
      </button>
      <transition name="link-contents">
        <div v-if="activeList['study']" class="link-contents">
          <a
            :href="`#` + q"
            v-for="(text, q) in faqList['study']"
            v-once
            v-smooth-scroll="{ duration: 750 }"
            :key="q"
          >
            {{ q }}
          </a>
        </div>
      </transition>
    </div>
    <!--  -->
    <div class="faq-link" id="link-lab">
      <button
        v-on:click="toggleActive('lab')"
        :class="getActivatedClass('lab')"
      >
        西森研の活動について
      </button>
      <transition name="link-contents">
        <div v-if="activeList['lab']" class="link-contents">
          <a
            :href="`#` + q"
            v-for="(text, q) in faqList['lab']"
            v-once
            v-smooth-scroll="{ duration: 750 }"
            :key="q"
          >
            {{ q }}
          </a>
        </div>
      </transition>
    </div>
    <!--  -->
    <div class="faq-link" id="link-course">
      <button
        v-on:click="toggleActive('course')"
        :class="getActivatedClass('course')"
      >
        進路について
      </button>
      <transition name="link-contents">
        <div v-if="activeList['course']" class="link-contents">
          <a
            :href="`#` + q"
            v-for="(text, q) in faqList['course']"
            v-once
            v-smooth-scroll="{ duration: 750 }"
            :key="q"
          >
            {{ q }}
          </a>
        </div>
      </transition>
    </div>
    <!--  -->
    <div class="faq-link" id="link-assign">
      <button
        v-on:click="toggleActive('assign')"
        :class="getActivatedClass('assign')"
      >
        配属にあたって
      </button>
      <transition name="link-contents">
        <div v-if="activeList['assign']" class="link-contents">
          <a
            :href="`#` + q"
            v-for="(text, q) in faqList['assign']"
            v-once
            v-smooth-scroll="{ duration: 750 }"
            :key="q"
          >
            {{ q }}
          </a>
        </div>
      </transition>
    </div>

    <div id="divider"></div>

    <hr />
    <!-- answer, study -->

    <div class="ans" v-once id="ans-study">
      <div
        class="content"
        v-for="(text, q) in faqList['study']"
        :id="q"
        :key="q"
      >
        <p class="qst">Q : {{ q }}</p>
        <div class="text">
          <p>{{ text }}</p>
        </div>
      </div>
    </div>

    <hr />
    <!-- answer, lab -->

    <div class="ans" v-once id="ans-lab">
      <div class="content" v-for="(text, q) in faqList['lab']" :id="q" :key="q">
        <p class="qst">Q : {{ q }}</p>
        <div class="text">
          <p>{{ text }}</p>
        </div>
      </div>
    </div>

    <hr />
    <!-- answer, course -->

    <div class="ans" v-once id="ans-course">
      <div
        class="content"
        v-for="(text, q) in faqList['course']"
        :id="q"
        :key="q"
      >
        <p class="qst">Q : {{ q }}</p>
        <div class="text">
          <p>{{ text }}</p>
        </div>
      </div>
    </div>

    <hr />
    <!-- answer, assign -->

    <div class="ans" v-once id="ans-assign">
      <div
        class="content"
        v-for="(text, q) in faqList['assign']"
        :id="q"
        :key="q"
      >
        <p class="qst">Q : {{ q }}</p>
        <div class="text">
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Faq",
  data() {
    return {
      activeList: {
        lab: false,
        study: false,
        course: false,
        assign: false
      },
      faqList: {
        study: {
          "どんな研究しているの？":
            "主にMIMOを利用した電波系の研究を行っています. \n詳しくは'研究について/研究内容'へどうぞ.",
          "主な研究テーマは？":
            "いろいろあります. \n詳しくは'研究について/主なテーマ'へどうぞ.",
          "実験はやってるの？":
            "同学科の他の研究室と比べ, いろんな実験を行っています.",
          "これまでの卒業研究は？": "hoge",
          "外部との共同研究は？": "hoge"
        },
        lab: {
          "学会への発表はありますか？": "あるよ.",
          "アルバイトをしている人はいますか？": "hoge",
          "プログラミングはしますか？": "ときどき",
          "シミュレーションって何するの？": "パソコンでほげ",
          "どのようなソフトを利用しているの？": "hoge",
          "研究室の設備は？": "hoge"
        },
        course: {
          "主な就職先は？": "hoge",
          "修士への進学の割合は？": "ほげ",
          "他大学への院進学ってあり？": "piyo",
          就職活動と両立できますか: "gogo",
          "ドクター(博士後期課程)に行きたい": "tya"
        },
        assign: {
          "配属している学生数は？": "200000人くらい",
          "研究室の雰囲気は？": "いいかんじ",
          研究室見学をしたい: "ぜひ, 連絡してくれ",
          研究室の人に話を聞きたい: "聞いて",
          "自分の研究はどのように決まりますか？": "てきとうに",
          "部屋はどんな感じですか？": "聞いて",
          "パソコンの支給はありますか？": "あるかも",
          研究がうまくできるか心配: "どうにかなる",
          "どんな勉強をしておくべき？": "聞いて",
          "電波系の講義を取っていなくても大丈夫？": "うん",
          "研究が行き詰まったら？": "先生がサポートしてくれます",
          "研究室の場所はどこですか？": "そこ"
        }
      }
    };
  },
  methods: {
    toggleActive(key) {
      this.activeList[key] = !this.activeList[key];
    },
    getActivatedClass(key) {
      if (this.activeList[key]) {
        return { "activated-button": true };
      }
      return { "activated-button": false };
    }
  }
};
</script>

<style scoped lang="scss">
$assign-color: rgb(240, 158, 45);
$assign-bg-color: rgba(240, 158, 45, 0.3);
$study-color: rgb(16, 199, 245);
$study-bg-color: rgba(16, 199, 245, 0.3);
$course-color: rgb(72, 236, 113);
$course-bg-color: rgba(72, 236, 113, 0.3);
$lab-color: rgb(253, 78, 78);
$lab-bg-color: rgba(253, 78, 78, 0.3);

#divider {
  height: 40vh;
}

hr {
  width: 90%;
  margin: 15vh auto;
  border-top: 0.2rem dashed #dddddd;
}

@mixin after-template($url) {
  content: "";
  display: inline-block;
  width: 4vw;
  height: 4vw;
  margin: 1vh 1vw 1vh;
  vertical-align: middle;
  background-image: url($url);
  transition: 0.2s;
}

.faq {
  text-align: center;
}

.activated-button {
  &::before {
    transform: rotateZ(90deg);
  }
}

.faq-link {
  margin: 0 auto 3vh;
  transition: 0.6s;
  width: 70vw;

  &#link-study {
    button {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.3) 60%,
        $study-bg-color
      );
      border: 0.05rem solid $study-bg-color;
    }
  }

  &#link-lab {
    button {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.3) 60%,
        $lab-bg-color
      );
      border: 0.05rem solid $lab-bg-color;
    }
  }

  &#link-course {
    button {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.3) 60%,
        $course-bg-color
      );
      border: 0.05rem solid $course-bg-color;
    }
  }

  &#link-assign {
    button {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.3) 60%,
        $assign-bg-color
      );
      border: 0.05rem solid $assign-bg-color;
    }
  }

  button {
    text-align: left;
    font-size: 1.8rem;
    border: none;
    width: 100%;

    &::before {
      @include after-template("../assets/faq/right_arrow.svg");
    }
  }

  .link-contents {
    padding: 0 5%;

    a {
      display: block;
      text-align: left;
      text-decoration: none;
      margin: 1vh 0 1vh;
      padding: 1% 1% 1% 4%;
      font-size: 1.5rem;
      color: #707070;
      border-left: 0.1rem solid #a0a0a0;
      transition: 0.3s;

      &:hover {
        box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.4);
        border-left: 0.24rem solid #a0a0a0;
        color: #303030;
        font-weight: 700;
      }
    }
  }
}

@mixin left-border($color) {
  border-left: 0.3rem solid $color;
}

@mixin text-bg($color) {
  background: radial-gradient($color, #ffffff 70%);
}

.ans {
  &#ans-study {
    .content {
      .qst {
        @include left-border($study-color);
      }
      .text {
        @include text-bg($study-bg-color);
      }
    }
  }
  &#ans-lab {
    .content {
      .qst {
        @include left-border($lab-color);
      }
      .text {
        @include text-bg($lab-bg-color);
      }
    }
  }
  &#ans-course {
    .content {
      .qst {
        @include left-border($course-color);
      }
      .text {
        @include text-bg($course-bg-color);
      }
    }
  }
  &#ans-assign {
    .content {
      .qst {
        @include left-border($assign-color);
      }
      .text {
        @include text-bg($assign-bg-color);
      }
    }
  }
  margin: 3vh 10vw;
  .content {
    position: relative;
    margin: 2vh auto;
    padding: 18vh 0 0;
    height: 20rem;
    width: 85vw;

    .qst {
      box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
      padding-left: 3vw;
      position: absolute;
      left: 0vw;
      top: 8vh;
      font-size: 2.1rem;
    }
    .text {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      color: rgb(60, 60, 60);
      border-radius: 50%;
      // background: radial-gradient(rgba(255, 199, 120, 0.6), #ffffff 70%);
      // width: 70vw;
      padding: 3rem 0;
      margin: 0 auto;
      white-space: pre-line;
      word-wrap: break-word;
      p {
        display: table-cell;
        margin: 0 auto;
      }
    }
  }
}

// transition関係
.link-contents-enter {
  opacity: 0;
  // border-bottom: 0px;
}

.link-contents-enter-active {
  transition: 0.5s;
}

.link-contents-enter-to {
  opacity: 1;
}

.link-contents-leave {
  opacity: 1;
}

.link-contents-leave-active {
  transition: 0.5s;
}

.link-contents-leave-to {
  opacity: 0;
  font-size: 0.5rem;
}
</style>
