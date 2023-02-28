<template>
  <div id="navi_bar">
    <NuxtLink 
      class="NuxtLink" 
      to="/home">Home</NuxtLink>
    <button 
      class="NuxtLink" 
      @click="logout">Logout</button>
    <NuxtLink 
      class="NuxtLink" 
      to="/menu">Menu</NuxtLink>
    <NuxtLink 
      class="NuxtLink" 
      to="/upload">AddItem</NuxtLink>
  </div>
</template>
<style scoped>
#navi_bar {
  list-style: none;
  text-align: center;
}
.NuxtLink {
  text-decoration: none;
  display: inline-block;
  width: 150px;
  margin: 10px;
  background: white;
  color: green;
  border: 1px green solid;
  font-size: 20px;
  line-height: 30px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
  border-radius: 4px;
}
.NuxtLink:hover {
  background: green;
  color: white;
  border: 1px green solid;
}
.NuxtLink:active {
  background: green;
  color: white;
  border: 1px green solid;
  text-decoration: underline;
}
</style>
<script>
export default {
  computed:{
    isLoggedIn:function(){
      return this.$store.getters.isAuthenticated
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      this.$router.push("/");
    },
  },
};
</script>
