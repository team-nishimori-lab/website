<template>
  <div class="faq">
    <div class="header-space"></div>

    <transition name="hl" appear>
      <div class="headline">
        よくある質問
      </div>
    </transition>

    <!--  -->
    <transition name="subpart" appear>
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
    </transition>

    <!--  -->
    <transition name="part" appear>
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
    </transition>

    <!--  -->
    <transition name="part" appear>
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
    </transition>

    <!--  -->
    <transition name="part" appear>
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
    </transition>

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

    <div class="footer-space"></div>
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
            "主にMIMOを利用した無線通信技術の研究を行っています. \n詳しくは「研究について/研究内容」へどうぞ.",
          "主な研究テーマは？":
            "いろんなテーマがあり, ここに書ききれないので\n「研究について/主なテーマ」へどうぞ.",
          "実験はやってるの？":
            "同学科の他の研究室と比べ, 多くの実験を行っています.\n学校内での実験や学外に出ての実験など色々あります."
        },
        lab: {
          "学会への発表はありますか？":
            "精力的に行っています.\n機会があればB4でも発表します.",
          "アルバイトをしている人はいますか？":
            "もちろんいます. バイトをしながらでも問題なく研究活動できます.",
          "プログラミングはしますか？":
            "シミュレーションを行う際にMATLABを利用します.\n他にも状況に応じてプログラムを書きます.",
          "シミュレーションって何するの？":
            "弊研究室であれば, MATLABなどでプログラムを書き, \n現実のモデルを想定してPC上で実験を行います.",
          "どのようなソフトを利用しているの？":
            "MATLABを始め, レイトレース用のEEM-RTMを主に使っています.\n他にも必要に応じて色々なソフトを利用しています.",
          "研究室の設備は？":
            "実験用の設備は十分に揃っているので, ストレスなく研究に専念できます.\nまた, 実験器具も十分にあるため, 様々な実験行えます."
        },
        course: {
          // "主な就職先は？": "@どこ？",
          "修士への進学の割合は？":
            "学科自体の進学率が高いのもありますが, \n弊研究室の学生の多くが修士に進学しています.",
          "他大学への院進学ってあり？": "@あり？",
          "就職活動と両立できますか？": "@できる？"
          // "ドクター(博士後期課程)に行きたい": "@どうぞ？"
        },
        assign: {
          "配属している学生数は？":
            "他の研究室に比べて学生数は比較的多く, \n年度にもよりますが, 20人前後くらいです.",
          "研究室の雰囲気は？": "@いいかんじ",
          研究室の人に話を聞きたい: "@聞く？",
          研究室見学をしたい: "@連絡してください?",
          "自分の研究はどのように決まりますか？": "@どう決まる？",
          // "部屋はどんな感じですか？": "@別ページへ?",
          // "パソコンの支給はありますか？": "@どうだろう？",
          研究がうまくできるか心配: "@どうでしょう？",
          // "どんな勉強をしておくべき？": "@どうですか？",
          // "電波系の講義を取っていなくても大丈夫？": "@多分大丈夫?",
          // "研究が行き詰まったら？": "@先生がサポートしてくれます?",
          "研究室の場所はどこですか？": "情報理工棟I802"
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
  width: 5vh;
  height: 5vh;
  margin: 1.5vh 1rem;
  vertical-align: top;
  background-image: url($url);
  background-size: 100% 100%;
  transition: 0.2s;
}

.faq {
  text-align: center;
}

.faq-link {
  margin: 0 auto 3vh;
  transition: 0.6s;

  @media only screen and (max-width: 700px) {
    width: 95vw;
  }
  @media only screen and (min-width: 700px) {
    width: 70vw;
  }

  &#link-study {
    .link-contents {
      a {
        border-left: 0.1rem solid $study-bg-color;
        &:hover {
          box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.4);
          border-left: 0.24rem solid $study-color;
          color: #303030;
          font-weight: 700;
        }
      }
    }
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
    .link-contents {
      a {
        border-left: 0.1rem solid $lab-bg-color;
        &:hover {
          box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.4);
          border-left: 0.24rem solid $lab-color;
          color: #303030;
          font-weight: 700;
        }
      }
    }
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
    .link-contents {
      a {
        border-left: 0.1rem solid $course-bg-color;
        &:hover {
          box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.4);
          border-left: 0.24rem solid $course-color;
          color: #303030;
          font-weight: 700;
        }
      }
    }
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
    .link-contents {
      a {
        border-left: 0.1rem solid $assign-bg-color;
        &:hover {
          box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.4);
          border-left: 0.24rem solid $assign-color;
          color: #303030;
          font-weight: 700;
        }
      }
    }
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
    height: 8vh;
    line-height: 8vh;
    vertical-align: middle;

    &:focus {
      outline: none;
    }

    &::before {
      @include after-template("../assets/faq/right_arrow.svg");
    }

    &.activated-button {
      &::before {
        transform: rotateZ(90deg);
      }
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
      box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.15);
      transition: 0.25s;
    }
  }
}

@mixin left-border($color) {
  border-left: 0.3rem solid $color;
}

.ans {
  &#ans-study {
    .content {
      .qst {
        @include left-border($study-color);
      }
    }
  }
  &#ans-lab {
    .content {
      .qst {
        @include left-border($lab-color);
      }
    }
  }
  &#ans-course {
    .content {
      .qst {
        @include left-border($course-color);
      }
    }
  }
  &#ans-assign {
    .content {
      .qst {
        @include left-border($assign-color);
      }
    }
  }
  margin: 3vh 10vw;
  .content {
    position: relative;
    margin: 1vh auto 5vh;
    padding: 10vh 3% 0;
    width: 85vw;

    .qst {
      background-color: #ffffff;
      display: inline-block;
      box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
      padding-left: 3vw;
      position: absolute;
      left: 0vw;
      top: 6.8vh;
      font-size: 2.1rem;
      text-align: left;
    }
    .text {
      display: flex;
      align-items: center;
      color: rgb(30, 30, 30);
      border-radius: 2rem;
      border: 0.18rem solid rgba(30, 30, 30, 0.3);

      padding: 1.8rem 1rem 1rem;
      margin: 0 auto;
      white-space: pre-line;
      word-wrap: break-word;
      p {
        display: table-cell;
        font-size: 1.7rem;
        margin: 0 auto;
      }
    }
  }
}

.footer-space {
  margin-top: 5vh;
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
