<template>
  <div class="link">
    <div class="divider"></div>

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
        <a href="https://researchmap.jp/knishimori" class="site-url">
          https://researchmap.jp/knishimori
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
  </div>
</template>

<script>
export default {
  name: "Link"
};
</script>

<style scoped lang="scss">
.divider {
  height: 15vh;
}

.link {
  text-align: center;
}

$school-group-color: #ff0000;
$school-group-a-color: rgba(255, 0, 0, 0.3);

$lab-group-color: #0000ff;
$lab-group-a-color: rgba(0, 0, 255, 0.3);

.link-group {
  margin: 0 12vw;
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
</style>
