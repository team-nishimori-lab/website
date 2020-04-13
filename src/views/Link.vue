<template>
  <div class="link">
    <div class="header-space"></div>
    <div class="headline">
      リンク
    </div>

    <!-- 学校関係のリンク -->
    <div class="link-group" id="school">
      <div class="group-name">学校関係</div>

      <!--  -->
      <div class="content">
        <p class="site-name">新潟大学</p>
        <a href="https://www.niigata-u.ac.jp/" class="site-url">
          https://www.niigata-u.ac.jp/
        </a>
      </div>

      <!--  -->
      <div class="content">
        <p class="site-name">新潟大学 工学部</p>
        <a href="https://www.eng.niigata-u.ac.jp/" class="site-url">
          https://www.eng.niigata-u.ac.jp/
        </a>
      </div>

      <!--  -->
      <div class="content">
        <p class="site-name">
          新潟大学 工学部 <br />
          情報工学科
        </p>
        <a href="https://www.ie.niigata-u.ac.jp/" class="site-url">
          https://www.ie.niigata-u.ac.jp/
        </a>
      </div>
    </div>

    <!-- 研究室 -->
    <div class="link-group" id="lab">
      <div class="group-name">研究室</div>

      <!--  -->
      <div class="content">
        <p class="site-name">先生のリサーチマップ</p>
        <a href="https://researchmap.jp/knishimori/" class="site-url">
          https://researchmap.jp/knishimori/
        </a>
      </div>

      <!--  -->
      <div class="content">
        <p class="site-name">ホームページ</p>
        <a href="https://nu-nishimori-lab.netlify.com/" class="site-url">
          https://nu-nishimori-lab.netlify.com/
        </a>
      </div>

      <!--  -->
    </div>

    <div class="headline">
      アクセス
    </div>
    <div class="lab-access">
      <div class="pos">
        <div class="pos-msg" id="pos1">
          <p>
            〒950-2102 新潟県新潟市西区五十嵐２の町<br />
            新潟大学 情報理工棟 8F 802
          </p>
        </div>
        <div class="pos-img" id="pos2">
          <img src="../assets/link/zyouhou_rikou_tou.jpg" />
        </div>
        <div class="pos-img" id="pos3">
          <img src="../assets/link/access-top-lab_ver01.png" />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d393.71580302631054!2d138.9392890721534!3d37.86669120241534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1586528272931!5m2!1sja!2sjp"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          id="pos4"
        ></iframe>
      </div>
    </div>

    <div class="footer-space"></div>
  </div>
</template>

<script>
export default {
  name: "Link"
};
</script>

<style scoped lang="scss">
.link {
  text-align: center;
}

$school-group-color: #ff0000;
$school-group-a-color: rgba(255, 0, 0, 0.3);

$lab-group-color: #0000ff;
$lab-group-a-color: rgba(0, 0, 255, 0.3);

.link-group {
  margin: 5vh 12vw;
  padding: 3rem 0 3rem 3%;
  position: relative;
  &#school {
    .group-name {
      border-left: 0.2rem solid $school-group-color;
    }

    .content {
      p {
        border-bottom: 0.1rem solid $school-group-color;
      }
      a {
        text-decoration: none;
        &:hover {
          text-shadow: 0.2rem 0.2rem 0.1rem $school-group-a-color;
        }
      }
    }
  }
  &#lab {
    .group-name {
      border-left: 0.2rem solid $lab-group-color;
    }

    .content {
      p {
        border-bottom: 0.1rem solid $lab-group-color;
      }
      a {
        text-decoration: none;
        &:hover {
          text-shadow: 0.2rem 0.2rem 0.1rem $lab-group-a-color;
        }
      }
    }
  }

  .group-name {
    position: absolute;
    top: -1.5rem;
    left: 0;
    line-height: 2.5rem;
    font-size: 2rem;
    padding: 0 0.5rem;
    margin: 0;
  }

  .content {
    display: inline-block;
    margin: 0 0 1.5rem;
    width: 100%;

    .site-name {
      font-size: 1.5rem;
      margin: 0 0 0;
      display: inline-block;
      width: 35%;
    }

    .site-url {
      font-size: 1.1rem;
      vertical-align: bottom;
      border-bottom: 0.1rem solid #c0c0c0;
      color: rgba(0, 0, 0, 1);
      display: inline-block;
      width: 65%;
      text-shadow: 0.1rem 0.1rem 0.05rem rgba(0, 0, 0, 0.3);
      transition: 0.3s;
    }
  }
}

.lab-access {
  padding: 2%;
  .pos {
    background-color: rgba(30, 30, 30, 0.9);
    padding: 2%;
    width: 100%;

    display: grid;
    grid-template-columns: 70% 1fr;
    grid-template-rows: 150px 1fr;

    .pos-msg {
      margin: 0 2vw 0 0;
      color: #ffffff;
      font-size: 1.4rem;
      padding: 1rem;
      display: flex;
      align-items: center;
      background-color: rgba(70, 70, 70, 1);
      p {
        display: table-cell;
        margin: 0 auto;
      }
    }
    .pos-img {
      img {
        width: 100%;
      }
    }

    #pos1 {
      grid-row: 1;
      grid-column: 1;
    }
    #pos2 {
      grid-row: 1;
      grid-column: 2;
      img {
        height: 100%;
      }
    }
    #pos3 {
      margin: 2vh 0 0;
      grid-row: 2;
      grid-column: 1/3;
    }
    #pos4 {
      margin: 2vh 0 0;
      width: 100%;
      height: 50vh;
      grid-row: 3;
      grid-column: 1/3;
    }
  }

  // .pos {
  //   background-color: rgba(30, 30, 30, 0.9);
  //   padding: 3%;
  //   width: 100vw;
  //   display: grid;
  //   grid-template-columns: 40% 1fr;
  //   .pos-msg {
  //     grid-column: 1;
  //     color: #ffffff;
  //     font-size: 1.6rem;
  //     background-color: rgba(70, 70, 70, 1);
  //   }
  //   .pos-img {
  //     grid-column: 2;
  //     img {
  //       width: 100%;
  //     }
  //   }
  // }
}

.footer-space {
  margin-top: 5vh;
}
</style>
