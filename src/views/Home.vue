<template>
    <div class="home">
       <Products v-bind:items='products' />
    </div>
</template>

<script>

  import { mapState } from 'vuex';
import Products from '../components/Products.vue';
  export default {
  components: { Products },
    computed: mapState ([
            'products'
        ]),
  }
</script>

<style lang="scss">

  


</style>
