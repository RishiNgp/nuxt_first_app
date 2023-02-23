<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">nuxt_first_app</h1>
      <div class="links">
        <button
          class="button--green"
          @click="Toast('sucess content', 'success', 'check')"
        >
          Success
        </button>
        <button
          class="button--grey"
          @click="Toast('Error content', 'error', 'error_outline')"
        >
          Error
        </button>
        <a 
          href="https://nuxtjs.org/" 
          target="_blank" 
          class="button--green"
        >Documentation</a
        >
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a
        >
      </div>
    </div>
  </section>
</template>

<script>

export default {
  layout: "homelayout",
  methods: {
    Toast(content, status, Icon) {
      this.$Toast(content, status, Icon);
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
