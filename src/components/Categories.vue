<template>
    <div class="categories-container">
        <router-link to="/">About SuperStore</router-link>
        <router-link to="/">SuperStore Premium</router-link>
        <router-link to="/">Delivery</router-link>
        <router-link to="/">Sell on SuperStore</router-link>
        <router-link to="/">SuperStore Business</router-link>
        <router-link to="/">Terms of use</router-link>
    </div>
</template>

<script>

    // import { mapState } from 'vuex';

    export default {
        name: 'categories',
    }
  
</script>

<style lang="scss">
    .categories-container {
        z-index: 10;
        padding: 6px 0 3px ;
        height: 15px;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        background-color: rgb(48, 64, 85);
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