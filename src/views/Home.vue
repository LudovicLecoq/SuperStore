<template>
    <div class="home">
       <Products v-bind:items='data' />
    </div>
</template>

<script>

    import { useStore } from 'vuex';
    import {computed} from 'vue';
    import Products from '../components/Products.vue';
    export default {
        components: { Products },
        setup() {
            const store = useStore()
            const data = computed(() => store.getters.loadData);
        
            return { data }
        }
    }
</script>

<style lang="scss">

  


</style>
