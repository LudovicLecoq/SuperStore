<template>
    <div class="app-container">
        <div class="header-container">
        
            <div class="header">   
                <div class="logo">
                    <img src="./assets/store_logo.png" alt="logo super store" class="logo-img">
                </div>
    <!--           
                    <router-link to="/">Home</router-link>  -->
                <SearchBar />
                <router-link to="/cart">
                    <div class="cart">
                        <img class="cart-img" src="./assets/cart.png" alt="cart"> {{ this.productsInCart.length }}
                    </div>
                </router-link>  
                        
            </div>
            <Categories />
        
        </div>
        <section class="content">
            <router-view />
        </section>
        
        <Footer /> 
    </div>

</template>

<script>
    import { mapState } from 'vuex';
    import Categories from './components/Categories.vue';
    import SearchBar from './components/SearchBar.vue';
    import Footer from './components/Footer.vue';

    export default {
        components: { Categories, SearchBar, Footer },
        beforeCreate() {
            this.$store.dispatch('loadSelectedProducts');
            this.$store.dispatch('loadAllCategories')
        }, 
        // onMounted() {
        //     this.$store.dispatch('loadSelectedProducts');
        //     this.$store.dispatch('loadAllCategories')
        // },
        computed: mapState ([
            'productsInCart'
        ]),
        
    }
  
</script>


<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap');

body {
    margin: 0;
    background: #f8f8f8;
}

#app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden;
    // max-width: 1280px;
    margin: 0 auto 0;
    display: flex;
    flex-direction: column;
    }

    .app-container {
        left: 0;
        overflow: hidden;
    }

.header-container {
    z-index: 10;
}

.header {
    z-index: 10;
    padding: 6px 0 8px 0;
    height: 70px;
    width: 100%;
    text-align: center;
    background-color: rgb(18, 25, 33);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 135px;
        margin-left: 10px;
    }

    a {
        color: white;
        text-decoration: none;

        &.router-link-exact-active {
        color: rgb(221, 118, 1);
        }
    }
}

.content {
        max-width: 1280px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        min-height: 80vh;  
}

.cart {
    width: 65px;
    position: relative;
    padding: 0;
    margin-right: 15px;
    margin-top: 27px;
    height: 50px;
    color: #f1f1f1;    
}

.cart-img {
    position: absolute;
    max-width: 65px;
    top: -10px;
    left: -12px;
}
</style>
