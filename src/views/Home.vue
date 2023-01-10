<template>
    <div class="home" :class="{active: isOpen === true }">
        <product-article-modale 
            v-bind:openModal='openModal' 
            v-bind:product='thisProduct' 
            v-bind:toggleModale='toggleModale'
            v-bind:addToCart='addToCart' 
        />
        <products-cart-modale 
            v-bind:isOpen='isOpen' 
            v-bind:itemAdd='itemAdd' 
        />
        <div class="products-container" :class="{active: isOpen === true }">
            <filter-menu />
            <Products  
                v-bind:items='data' 
                v-bind:setIsOpen='cartModaleIsOpen' 
                v-bind:setIsClosed='cartModaleIsClosed' 
                v-bind:toggleModale='toggleModale'
                v-bind:addToCart='addToCart' 
            />
        </div>
    </div>
</template>

<script>

    import { useStore } from 'vuex';
    import { computed, ref } from 'vue';
    import Products from '../components/Products.vue';
    import FilterMenu from '../components/FilterMenu.vue';
    import ProductsCartModale from '../components/ProductsCartModale.vue';
    import ProductArticleModale from "../components/ProductsModaleArticle.vue";

    export default {
        components: { Products, FilterMenu, ProductsCartModale, ProductArticleModale },

      
        setup() {
            const store = useStore()
            const data = computed(() => store.getters.loadData);
            const isOpen = ref(false);
            const itemAdd = ref(null);
            const openModal = ref(false);
            const thisProduct= ref(false);
            const productsInCart = store.getters.loadProductsInCart;
 

            const toggleModale = (product) => {
                openModal.value = !openModal.value;
                thisProduct.value = product;
            }

            const cartModaleIsOpen = (product) => {
                isOpen.value = true;
                itemAdd.value = product;
            }

            const cartModaleIsClosed = () => {
                isOpen.value = false;
                setTimeout(() => {
                    itemAdd.value = null;
                }, 1000);
            }

            const addToCart = (product) => {
                if(productsInCart.includes(product)){
                    // product.quantity = product.quantity + 1;
                    store.dispatch('addToCart', product);
                } else {
                    // product.quantity = 1;
                    store.dispatch('addToCart', product);
                    cartModaleIsOpen(product);
                    setTimeout(() => {
                        cartModaleIsClosed();
                    }, 10000);
                }
            }
        
            return { data, toggleModale, openModal, thisProduct, isOpen, cartModaleIsOpen, cartModaleIsClosed, itemAdd, addToCart }
        }
    }
</script>

<style lang="scss">

    .home {
        display: flex;
        flex-direction: column;
        position: relative;
        transition: all 0.7s ease-in-out;
    }

    .home.active {
        transition: all 0.7s ease-in-out;
        margin-bottom: 200px;
    }

    .products-container {
        display: flex;
        transition: all 0.7s ease-in-out;
    }

    .products-container.active {
        transform: translateY(200px);
        transition: all 0.7s ease-in-out;
    }

</style>
