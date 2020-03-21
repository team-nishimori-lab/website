<template>
  <div class="home">
    <transition name="hl" appear>
      <header class="header">
        <div class="headline">
          ホーム
        </div>
        <!-- <div class="logo">
        <img fluid alt="Vue logo" src="../assets/lab_logo_top.png" />
      </div> -->
        <!-- <b-img
      fluid
      alt="Vue logo"
      src="https://www.niigata-u.ac.jp/wp-content/uploads/2019/04/emain_color.jpg"
      />-->
      </header>
    </transition>
    <div class="content">
      <main class="main">
        <div>メインのところ</div>
      </main>
      <aside class="aside">
        左側のところ
      </aside>
      <nav class="nav">
        <p>右側のところ</p>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.logo img {
  width: 60%;
}

.content {
  display: grid;
  /* 1列目から順番に180px、1fr、160pxの幅 */
  grid-template-columns: 25% 1fr 25%;
  /* 1行目から順番に60px 1fr 90pxの高さ */
  grid-template-rows: 600px;
}

.main {
  /* 列の2本目から3本目のグリッドラインまで */
  grid-column-start: 2;
  grid-column-end: auto;
  /* 行の2本目から3本目のグリッドラインまで */
  grid-row-start: 1;
  grid-row-end: auto;
}

.aside {
  /* 列の1本目から2本目のグリッドラインまで */
  grid-column-start: 1;
  grid-column-end: auto;
  /* 行の2本目から3本目のグリッドラインまで */
  grid-row-start: 1;
  grid-row-end: auto;
  border: 4px solid #888888;
  text-align: center;
}

.nav {
  /* 列の3本目から4本目のグリッドラインまで */
  grid-column-start: 3;
  grid-column-end: auto;
  /* 行の2本目から3本目のグリッドラインまで */
  grid-row-start: 1;
  grid-row-end: auto;
  border: 4px solid #888888;
  text-align: center;
}
</style>
