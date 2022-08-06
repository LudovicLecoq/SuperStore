<template>
    <div class="categories-container">
        <router-link to="/">Home</router-link>
        <div class="categories"
        v-for="(category, index) in this.allCategories" :key="index">
            <router-link :to="'/category/'+category" @click="loadSelectedProducts(category)">{{ category }}</router-link> 
        </div>
    </div>
</template>

<script>

    import { mapState } from 'vuex';

    export default {
        name: 'categories',

         methods: {
            loadSelectedProducts (category) {
                this.$store.dispatch('loadSelectedProducts', category);
                console.log("action =>",category)
            },
        },
        created() {
            this.$store.dispatch('loadAllCategories');
        }, 
        computed: mapState ([
            'allCategories'
        ]),
    }
  
</script>

<style lang="scss">
    .categories-container {
        z-index: 10;
        padding: 6px 0 3px ;
        margin-top: 70px;
        position: fixed;
        height: 15px;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        background-color: rgb(39, 51, 78);
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;

        a {
            color: #ffffff;
            text-decoration: none;
        }
    }

</style>