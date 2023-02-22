<template>
  <v-app id="page">
    <h1 class="text-center">Rotisserie Chicken</h1>
    <div class="text-center">
      <p>
        Our famous rotisserie chicken – for your whole flock. Marinated with a
        perfect blend of garlic, herbs, and spices – it’s all-natural, never
        frozen, and never disappoints. The chicken is tender, but choosing which
        sides to pair it with? That’s the tough part.
      </p>
    </div>
    <div class="tabs">
      <div class="tabs-nav">
        <a
          href="https://www.bostonmarket.com/menu/rotisserie-chicken/"
          class="tab-title active"
        >
          <span>Rotisserie Chicken</span>
        </a>
        <a
          href="https://www.bostonmarket.com/menu/ribs-and-meatloaf/"
          class="tab-title"
        >
          <span>Ribs &amp; Meatloaf</span>
        </a>
        <a 
          href="https://www.bostonmarket.com/menu/turkey/" 
          class="tab-title">
          <span>Roasted Turkey</span>
        </a>
        <a
          href="https://www.bostonmarket.com/menu/family-meal-options/"
          class="tab-title"
        >
          <span>Family Meals</span>
        </a>
        <a 
          href="https://www.bostonmarket.com/menu/sides/" 
          class="tab-title">
          <span>Sides</span>
        </a>
        <a
          href="https://www.bostonmarket.com/menu/soups-and-salads/"
          class="tab-title"
        >
          <span>Soups &amp; Salads</span>
        </a>
        <a 
          href="https://www.bostonmarket.com/menu/desserts/" 
          class="tab-title">
          <span>Desserts</span>
        </a>
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  layout: "homelayout",
};
</script>
<style scoped>
div {
  display: block;
}

body {
  font-size: 12px;
  -webkit-text-size-adjust: none;
  font-family: Montserrat, sans-serif;
}

* {
  margin: 0;
  padding: 0;
}

#page {
  margin-top: 88px;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRwjoAqJO9Um70QyuASmWpNudcJUrd5ZWtg&usqp=CAU");
}
</style>
