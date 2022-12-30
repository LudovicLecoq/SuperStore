<template>
       <div class="header-container">
        
            <div class="header">   
                <router-link to="/" class="logo">
                    <img src="../assets/store_logo.png" alt="logo super store" class="logo-img">
                </router-link>

                <SearchBar />
                
                <router-link to="/cart">
                    <div class="cart">
                        <img class="cart-img" src="../assets/cart.png" alt="cart"> {{ totalItems }}
                    </div>
                </router-link>  
                        
            </div>
            <Categories />
        
        </div>
</template>

<script>
    import SearchBar from './SearchBar.vue';
    import Categories from './Categories.vue';
    import { mapState, useStore } from 'vuex';
    import { computed } from 'vue';


    export default {
        
        components: { SearchBar, Categories },
        computed: mapState ([
            'productsInCart'
        ]),
        setup() {
            
            const store = useStore();

            const totalItems = computed(() => {
                return store.state.numberItemsInCart
            })
            return { totalItems }
        },
    }
</script>

<style lang='scss'>
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