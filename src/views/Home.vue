<template>
    <div class="home">
        <filter-menu v-bind:filter='filterData' />
        <Products v-bind:items='data' />
    </div>
</template>

<script>

    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import Products from '../components/Products.vue';
    import FilterMenu from '../components/FilterMenu.vue';

    export default {
        components: { Products, FilterMenu },
        setup() {
            const store = useStore()
            const data = computed(() => store.getters.loadData);
        
            return { data }
        }
    }
</script>

<style lang="scss">

    .home {
        display: flex;
    }

</style>
