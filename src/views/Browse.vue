<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Knives')" href="#" class="pure-menu-link">Knives</a></li>
      <li class="pure-menu-item"><a @click="select('Food')" href="#" class="pure-menu-link">Food</a></li>
      <li class="pure-menu-item"><a @click="select('Supplies')" href="#" class="pure-menu-link">Supplies</a></li>
      <!-- <li class="pure-menu-item"><a @click="select('Brazil')" href="#" class="pure-menu-link">Brazil</a></li> -->
    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Browse',
  components: {
    ProductList
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.country === this.country);
    }
  },
  methods: {
    select(country) {
      this.country = country;
    }
  }
}
</script>
