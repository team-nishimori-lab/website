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
    <div id="footer"></div>
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

#footer {
  margin-top: 5rem;
  height: 100px;
  background: #444444;
}
</style>

<style lang="stylus">
html
    font-size: 13px

@media only screen and (min-width:651px)
  html
    font-size: 16px

@media only screen and (min-width:961px)
  html
    font-size: 19px


@import url('https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap&subset=japanese');
font-KM = 'Kosugi Maru'
hl-fs = 2.2rem
hl-line-px = 0.2rem
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

// transition系
.hl-enter {
  opacity: 0;
}
.hl-enter-active {
  transition: opacity 0.5s
}
.hl-enter-to {
  opacity: 1;
}

.content-enter {
  opacity: 0;
}
.content-enter-active {
  transition: opacity 1.5s
}
.content-enter-to {
  opacity: 1;
}

.subcontent-enter {
  opacity: 0;
}
.subcontent-enter-active {
  transition: opacity 2.5s
}
.subcontent-enter-to {
  opacity: 1;
}
</style>
