<template>
  <div id="app">
    <div id="header">
      <b-navbar toggleable="xl" type="dark" variant="dark" fixed="top">
        <!-- ロゴなど -->
        <b-navbar-brand to="/">西森研究室</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <!-- 各項目へのリンク -->
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item-dropdown text="Lab" right>
              <b-dropdown-item to="/Lab">Contents</b-dropdown-item>
              <b-dropdown-item to="/Lab">Member</b-dropdown-item>
              <b-dropdown-item to="/Lab">History</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/Class">Class</b-nav-item>
            <b-nav-item-dropdown text="Q&A" right>
              <b-dropdown-item to="/Q&A">Answer</b-dropdown-item>
              <b-dropdown-item to="/Q&A">Send</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/Link">Link</b-nav-item>
          </b-navbar-nav>

          <!-- 右側の要素 -->
          <b-navbar-nav class="ml-auto">
            <b-nav-text>ここに書くこと無い?</b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style scoped lang="stylus">

#app {
  text-align: center;
  margin-top: 100px;
}

#header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap&subset=japanese');
font-KM = 'Kosugi Maru'
hl-fs = 30px
hl-line-px = 3px
hl-line-color = #008554

* {
  font-family: "Gothic", sans-serif;
  font-size: 1.1rem;
}

.load-str
  font-family: font-KM, sans-serif;
  color: #AAAAAA;
  font-size: 30px

.headline {
  font-family: font-KM, sans-serif;
  font-size: hl-fs;
  position: relative;
  line-height: 1.4;
  padding: 0.25em 1em;
  margin: 10px 0px 50px
  display: inline-block;
}

.headline:before, .headline:after {
  content:'';
  width: 20px;
  height: 30px;
  position: absolute;
  display: inline-block;
}

.headline:before {
  border-left: solid hl-line-px hl-line-color;
  border-top: solid hl-line-px hl-line-color;
  top:0;
  left: 0;
}

.headline:after {
  border-right: solid hl-line-px hl-line-color;
  border-bottom: solid hl-line-px hl-line-color;
  bottom:0;
  right: 0;
}

  h1
    margin: 40px 0px 10px;
    padding: 0;
</style>
