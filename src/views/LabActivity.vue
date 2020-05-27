<template>
  <div class="lab-activity">
    <div class="header-space"></div>

    <!--  -->
    <transition appear name="hl">
      <div id="day">
        <div class="title">研究室の活動</div>
        <div class="note-wrapper">
          <div class="note">
            <p class="subtitle">コアタイム @ 10:00〜15:00</p>
            <p>
              西森研ではフレックスタイム制を採用してしています.<br />
              コアタイムは10:00〜15:00なので,
              その時間帯には研究室にいなければいけませんが,
              他の時間は好きにして構いません.
            </p>
            <p class="subtitle upper-space">ゼミ @ 週1回, 2コマほど</p>
            <p>
              西森研では週に1回,
              研究室の学生全体で進捗報告を行う「ゼミ」を行っています.<br />
              任意のプレゼンテーションツールを用いて,
              各自簡単に進捗の発表を行います.
            </p>
            <p class="subtitle upper-space">論文輪講 @ 1,2ターム</p>
            <p>
              B4は1,2タームに論文輪講を行います. <br />
              各自担当が割り当てられ, それらに対する発表を,
              研究室内で行ってもらいます.
            </p>
            <p class="subtitle upper-space">定例ミーティング @ 月曜9:00〜</p>
            <p>
              毎週月曜9時から定例ミーティングを行っています.<br />
              ここでは先生からの連絡を主として, 全体でミーティングを行います.
            </p>
          </div>
        </div>
      </div>
    </transition>

    <!--  -->

    <transition appear name="hl">
      <div id="year-table">
        <div class="title">年間の予定表</div>
        <div class="msg">
          年度によって前後するので参考程度ですが,
          1年間の予定などは大まかに以下のようになっています.
        </div>
        <table>
          <tr>
            <th class="manth-column"></th>
            <th class="B4-column">B4</th>
            <th class="all-column">全体</th>
          </tr>
          <tr id="Apr">
            <td class="month-column">4月</td>
            <td class="B4-column">配属</td>
            <td class="all-column">5月大会にむけての準備</td>
          </tr>
          <tr id="May">
            <td class="month-column">5月</td>
            <td class="B4-column">配属課題</td>
            <td class="all-column">各種大会に参加</td>
          </tr>
          <tr id="Jun">
            <td class="month-column">6月</td>
            <td class="B4-column">論文輪講</td>
            <td class="all-column">-</td>
          </tr>
          <tr id="Jul">
            <td class="month-column">7月</td>
            <td class="B4-column">研究テーマ決め</td>
            <td class="all-column">-</td>
          </tr>
          <tr id="Aug">
            <td class="month-column">8月</td>
            <td class="B4-column">実験補助</td>
            <td class="all-column">屋外実験</td>
          </tr>
          <tr id="Sep">
            <td class="month-column">9月</td>
            <td class="B4-column">実験補助</td>
            <td class="all-column">屋外実験</td>
          </tr>
          <tr id="Oct">
            <td class="month-column">10月</td>
            <td class="B4-column">卒業研究</td>
            <td class="all-column">-</td>
          </tr>
          <tr id="Nov">
            <td class="month-column">11月</td>
            <td class="B4-column">卒業研究</td>
            <td class="all-column">-</td>
          </tr>
          <tr id="Dec">
            <td class="month-column">12月</td>
            <td class="B4-column">卒業研究</td>
            <td class="all-column">-</td>
          </tr>
          <tr id="Jan">
            <td class="month-column">1月</td>
            <td class="B4-column">卒業研究発表の準備</td>
            <td class="all-column">-</td>
          </tr>
          <tr id="Feb">
            <td class="month-column">2月</td>
            <td class="B4-column">卒業研究発表の発表</td>
            <td class="all-column">納会</td>
          </tr>
          <tr id="Mar">
            <td class="month-column">3月</td>
            <td class="B4-column">卒業論文制作</td>
            <td class="all-column">-</td>
          </tr>
        </table>
      </div>
    </transition>

    <div class="footer-space"></div>
  </div>
</template>

<script>
export default {
  name: "Lab_Activity",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
$month-color-01: #ff6232;
$month-color-02: #4582bb;
$month-color-03: #f09898;
$month-color-04: #a0e064;
$month-color-05: #61c7a8;
$month-color-06: #7b4d81;
$month-color-07: #57b7f6;
$month-color-08: #ffae00;
$month-color-09: #015708;
$month-color-10: #b48249;
$month-color-11: #8d5001;
$month-color-12: #4554aa;

.header-space {
  height: 7vh;
  background-color: rgba(240, 240, 240, 1);
}

#day {
  position: relative;
  padding: 6rem 5vw 2rem;
  margin: 0 auto;
  background-color: rgba(240, 240, 240, 1);

  .title {
    display: inline;
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: #f0f0f0;
    font-size: 2.3rem;
    padding: 0.3rem 1rem;
    border-radius: 1.5rem;
  }

  .note-wrapper {
    background-color: rgba(255, 255, 255, 1);
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    border-radius: 2rem;
    padding: 2rem 1.5rem;

    .note {
      $note-line-height: 2rem;
      padding: 0 0 0.1rem;

      background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 97%,
        #ddd 97%,
        #ddd 100%
      );
      background-size: 100% $note-line-height;
      line-height: $note-line-height;

      p {
        margin: 0;
        margin-bottom: 0;
        padding: 0;

        &.subtitle {
          font-size: 1.8rem;
          font-weight: 700;
          background-image: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 92%,
            #00d0b0 92%,
            #00d0b0 100%
          );
          color: #404040;
        }

        &.upper-space {
          margin-top: $note-line-height;
        }
      }
    }
  }
}

#year-table {
  position: relative;
  text-align: center;
  padding: 6rem 0 5vh;
  margin: 0 auto;
  background-color: rgb(50, 50, 50);

  .title {
    display: inline;
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: rgba(255, 255, 255, 0.8);
    font-size: 2.3rem;
    padding: 0.3rem 1rem;
    border-radius: 1.5rem;
  }

  .msg {
    text-align: left;
    color: #f0f0f0;
    font-size: 1.6rem;
    padding: 0 10vw;
    margin: 1rem 0 1rem;
  }

  table {
    padding: 0 2vw;
    display: inline-block;
    border-collapse: separate;
    border-spacing: 0 1rem;

    tr {
      th {
        color: #ffffff;
        font-size: 2.2rem;
        line-height: 2.2rem;
      }
      td {
        padding: 0.3rem 1.5rem;
        height: 10vh;

        &.month-column {
          font-size: 1.7rem;
          font-weight: 700;
          border-right: 0.2rem solid rgb(10, 10, 10);
        }

        &.B4-column {
          background-color: #f0f0f0;
        }

        &.all-column {
          background-color: #f6f6f6;
        }
      }
    }

    .month-column {
      width: 15vw;
      color: #ffffff;
    }

    .B4-column {
      width: 35vw;
    }

    .all-column {
      width: 35vw;
    }

    #Apr {
      .month-column {
        background-color: $month-color-04;
      }
    }

    #May {
      .month-column {
        background-color: $month-color-05;
      }
    }

    #Jun {
      .month-column {
        background-color: $month-color-06;
      }
    }

    #Jul {
      .month-column {
        background-color: $month-color-07;
      }
    }

    #Aug {
      .month-column {
        background-color: $month-color-08;
      }
    }

    #Sep {
      .month-column {
        background-color: $month-color-09;
      }
    }

    #Oct {
      .month-column {
        background-color: $month-color-10;
      }
    }

    #Nov {
      .month-column {
        background-color: $month-color-11;
      }
    }

    #Dec {
      .month-column {
        background-color: $month-color-12;
      }
    }

    #Jan {
      .month-column {
        background-color: $month-color-01;
      }
    }

    #Feb {
      .month-column {
        background-color: $month-color-02;
      }
    }

    #Mar {
      .month-column {
        background-color: $month-color-03;
      }
    }
  }
}
</style>
