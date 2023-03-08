<template>
  <v-app>
    <sideBarLeft/>
    <Navi />
    <!-- <div id="header"></div> -->
    <div id="main">
      <nuxt />
    </div>
    <div id="footer">Footer by comp.</div>
  </v-app>
</template>
<script>
import Navi from "../components/Navi.vue";
export default {};
</script>
<style scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
#header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 60px;
  width: 100%;
  font-size: 24px;
  line-height: 60px;
  color: white;
  text-align: center;
  background-color: #35495e;
}
#footer {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 55px;
  width: 100%;
  font-size: 18px;
  line-height: 55px;
  color: white;
  text-align: center;
  background-color: green;
}
#main {
  padding-top: 60px;
  padding-bottom: 55px;
}
</style>
