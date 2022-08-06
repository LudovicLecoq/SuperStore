<template>

    <div class="header-container">
     
        <div id="nav">   
            <div class="logo">
                <img src="./assets/store_logo.png" alt="" class="logo-img">
            </div>
          
                <router-link to="/">Home</router-link> 
                <router-link to="/cart">
                    <div class="cart">
                        <img class="cart-img" src="./assets/cart.png" alt="cart"> {{ this.productsInCart.length }}
                    </div>
                </router-link>       
        </div>
        <Categories />
    </div>
    <router-view/>
</template>

<script>
    import { mapState } from 'vuex';
    import Categories from './components/Categories.vue'

    export default {
        components: { Categories },
        created() {
            this.$store.dispatch('loadProducts')
        }, 
        computed: mapState ([
            'productsInCart'
        ]),
    }
  
</script>


<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap');
#app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 1280px;
    margin: 80px auto;
    }

.header-container {
    z-index: 10;
}

#nav {
    z-index: 10;
    padding: 6px 0 3px 0;
    position: fixed;
    height: 70px;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: rgb(31, 45, 77);
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

.cart {
    width: 65px;
    position: relative;
    padding: 0;
    margin-right: 15px;
    
}

.cart-img {
    position: absolute;
    max-width: 65px;
    top: 40px;
    left: -12px;
}
</style>
