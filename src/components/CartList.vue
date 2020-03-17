<template>
  <div>
    <ul>
      <li v-for="item in this.$root.$data.cart" :key="item.id" > {{ item.name }} </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    cart: Array,
  }
};
</script>


<style lang="css" scoped>
</style>
