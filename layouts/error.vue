<template>
  <div>
    <header>
      <Navi/>
    </header>
    <main>
      <Logo/>
    </main>
    <span 
      v-if="error.statusCode === 404" 
      id="error">Page not found</span>
    <h1 
      v-else 
      id="error">An error occurred</h1>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      required: true,
    },
  },
  layout: "error", // you can set a custom layout for the error page
};
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
#error{
			color: #D8000C;
			background-color: #FFBABA;
			background-image:url('https://i.imgur.com/GnyDvKN.png');
}
</style>
