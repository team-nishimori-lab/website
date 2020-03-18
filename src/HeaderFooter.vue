<template>
  <div id="header">
    <div id="nav">
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
            </b-nav-item-dropdown>
            <b-nav-item to="/Class">Class</b-nav-item>
            <b-nav-item-dropdown text="Q&A" right>
              <b-dropdown-item to="/Q&A">Answer</b-dropdown-item>
              <b-dropdown-item to="/Q&A">Send</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <!-- 右側の要素 -->
          <b-navbar-nav class="ml-auto">
            <b-nav-text>このスペース, 何か書くこと無い?</b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
    <router-view />
    <router-view />
    <router-view />
    <router-view />
    <router-view />
  </div>
</template>

<style lang="stylus">
#header {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
