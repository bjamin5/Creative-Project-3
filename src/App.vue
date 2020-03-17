<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/logo.png">

      </router-link>

    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/hatcheticon.jpg">
          <p>Browse</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item">
          <img src="/images/backpack.jpg">
          <!-- <p>0 items</p> -->
          <p>{{numberOfItems}} items</p>
        </div>
      </router-link>
    </div>
    <h3>“Extinction is the rule. Survival is the exception.” -Carl Sagan</h3>
    <h1></h1>
    <h1>THE ULTIMATE SURVIVAL STORE</h1>

  </div>
  <router-view />
  <footer>
    <div class="footerLink">
      <a href="https://github.com/BYU-CS-260-Winter-2020/lab-3b-grocery-store-bjamin5.git"> Github </a>
      </div>
  </footer>
</div>

</template>

<script>
export default {
  computed: {
    numberOfItems() {
      return this.$root.$data.cart.length;
    }
  }
}

</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
  background-color: #c7b070;
}
h1 {
  text-align: center;
}

footer {
	background: #6C8025;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    font-family: arial;
}
.footerLinks {
   text-align: center;
 }

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #6C8025;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
  border:10px solid #6C8025;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}
.menu-item img{
  border:2px solid #6C8025;
}

.browse {
  margin-right: 50px;
}
</style>
