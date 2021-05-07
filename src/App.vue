<template>
  <div id="app">
      <el-container>
      <el-header><Header/></el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer><Footer/></el-footer>
    </el-container>
  </div>
</template>

<script>

import Header from './components/header'
// import Login from './components/Login'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    // Login,
    Footer
    
  }
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  
}
.el-header {
  background-color: #232252d3;
}
</style>
