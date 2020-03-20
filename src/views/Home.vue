<template>
  <div class="home">
    <header class="header">
      <div>
        <img fluid alt="Vue logo" src="../assets/lab_logo_top.png" />
      </div>
      <!-- <b-img
      fluid
      alt="Vue logo"
      src="https://www.niigata-u.ac.jp/wp-content/uploads/2019/04/emain_color.jpg"
      />-->
    </header>
    <main class="main">
      <div>時間に応じて一言</div>
    </main>
    <aside class="aside">aside</aside>
    <nav class="nav">nav</nav>
    <footer class="footer">
      footer
      <div>
        <b-button
          variant="outline-secondary"
          href="https://github.com/haru1843"
          target="_blank"
          >Github</b-button
        >
        <b-button
          variant="outline-success"
          href="https://qiita.com/haru1843"
          target="_blank"
          >Qiita</b-button
        >
        <b-button
          variant="outline-info"
          href="https://twitter.com/haru1843inf"
          target="_blank"
          >Twitter</b-button
        >
        <b-button
          variant="outline-danger"
          href="https://atcoder.jp/users/haru1843"
          target="_blank"
          >AtCoder</b-button
        >
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
.home {
  display: grid;
  /* 1列目から順番に180px、1fr、160pxの幅 */
  grid-template-columns: 180px 1fr 160px;
  /* 1行目から順番に60px 1fr 90pxの高さ */
  grid-template-rows: 360px 1fr 90px;
}

.header {
  /* 列の1本目から4本目のグリッドラインまで */
  grid-column-start: 1;
  grid-column-end: 4;
  /* 行の1本目から2本目のグリッドラインまで */
  grid-row-start: 1;
  grid-row-end: auto;
  padding-top: 10px;
}

.main {
  /* 列の2本目から3本目のグリッドラインまで */
  grid-column-start: 2;
  grid-column-end: auto;
  /* 行の2本目から3本目のグリッドラインまで */
  grid-row-start: 2;
  grid-row-end: auto;
}

.aside {
  /* 列の1本目から2本目のグリッドラインまで */
  grid-column-start: 1;
  grid-column-end: auto;
  /* 行の2本目から3本目のグリッドラインまで */
  grid-row-start: 2;
  grid-row-end: auto;
}

.nav {
  /* 列の3本目から4本目のグリッドラインまで */
  grid-column-start: 3;
  grid-column-end: auto;
  /* 行の2本目から3本目のグリッドラインまで */
  grid-row-start: 2;
  grid-row-end: auto;
}

.footer {
  /* 列の1本目から4本目のグリッドラインまで */
  grid-column-start: 1;
  grid-column-end: 4;
  /* 行の3本目から4本目のグリッドラインまで */
  grid-row-start: 3;
  grid-row-end: auto;
}
</style>
