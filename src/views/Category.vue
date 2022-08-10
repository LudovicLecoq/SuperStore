<template>
    <div class="category-container">
        <Products v-bind:items='selectedProducts' />
    </div>
</template>

<script>

    import { mapState } from 'vuex';
    import Products from '../components/Products.vue';
    export default {

        name: 'category',
        components: { Products },
        computed: mapState ([
            'selectedProducts'
        ]),
    }
</script>

<style>
    .category-container {
        margin-top: 110px;
    }

</style>