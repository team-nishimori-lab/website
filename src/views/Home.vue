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
      <transition name="part" appear>
        <aside class="left-side area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p>何のスペース?</p>
        </aside>
      </transition>

      <transition name="part" appear>
        <nav class="right-side">
          <div class="box-title">たいとる</div>
          <p>右側のところ</p>
        </nav>
      </transition>
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

.header {
  text-align: center;
}

.main {
  /* 列の2本目から3本目のグリッドラインまで */
  grid-column-start: 2;
  grid-column-end: auto;
  /* 行の2本目から3本目のグリッドラインまで */
  grid-row-start: 1;
  grid-row-end: auto;
}

.left-side {
  /* 列の1本目から2本目のグリッドラインまで */
  grid-column-start: 1;
  grid-column-end: auto;
  /* 行の2本目から3本目のグリッドラインまで */
  grid-row-start: 1;
  grid-row-end: auto;
  padding: 0.5em 1em;
  margin: 0 1vw;
  color: #5d627b;
  background: white;
  border-top: solid 7px #3d526b;
  /* border-top: solid 7px #5d627b; */
  box-shadow: 3px 8px 6px rgba(0, 0, 0, 0.44);
}
.left-side p {
  margin: 0;
  padding: 0;
}

.area {
  background: linear-gradient(
    55deg,
    rgba(35, 150, 243, 0.48),
    rgba(55, 190, 100, 0.2)
  );
  height: 70vh;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  animation: animate 18s linear infinite;
  bottom: 12vh;
}

.circles li:nth-child(1) {
  left: 10%;
  width: 8rem;
  height: 8rem;
  animation-delay: 0s;
  animation-duration: 20s;
}

.circles li:nth-child(2) {
  left: 3%;
  width: 1.5rem;
  height: 1.5rem;
  animation-delay: 2s;
  animation-duration: 7s;
}

.circles li:nth-child(3) {
  left: 16%;
  width: 1.3rem;
  height: 1.3rem;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 13%;
  width: 2.4rem;
  height: 2.4rem;
  animation-delay: 0s;
  animation-duration: 15s;
}

.circles li:nth-child(5) {
  left: 10%;
  width: 1.5rem;
  height: 1.5rem;
  animation-delay: 8s;
}

.circles li:nth-child(6) {
  left: 4%;
  width: 3.3rem;
  height: 3.3rem;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 7%;
  width: 3.6rem;
  height: 3.6rem;
  animation-delay: 7s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 30%;
  }

  100% {
    transform: translateY(-60vh) rotate(720deg);
    opacity: 0;
    border-radius: 70%;
  }
}

.right-side {
  /* 列の3本目から4本目のグリッドラインまで */
  grid-column-start: 3;
  grid-column-end: auto;
  /* 行の2本目から3本目のグリッドラインまで */
  grid-row-start: 1;
  grid-row-end: auto;
  margin: 0 1vw;
  background: #fcfcfc;
  box-shadow: 3px 8px 6px rgba(0, 0, 0, 0.44);
}
.right-side .box-title {
  font-size: 1.2em;
  background: #5fc2f5;
  padding: 4px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.05em;
}
.right-side p {
  padding: 15px 20px;
  margin: 0;
}
</style>
