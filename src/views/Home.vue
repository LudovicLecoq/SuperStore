<template>
    <div class="home" >
        <product-article-modale 
            v-bind:openModal='openModal' 
            v-bind:product='thisProduct' 
            v-bind:toggleModale='toggleModale' 
        />
        <products-cart-modale 
            v-bind:isOpen='isOpen' 
            v-bind:itemAdd='itemAdd' 
        />
        <div class="products-container" :class="{active: isOpen===true }">
            <filter-menu />
            <Products  
                v-bind:items='data' 
                v-bind:setIsOpen='cartModaleIsOpen' 
                v-bind:setIsClosed='cartModaleIsClosed' 
                v-bind:toggleModale='toggleModale' 
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

            const toggleModale = (product) => {
                openModal.value = !openModal.value;
                thisProduct.value = product;
            }

            const cartModaleIsOpen = (product) => {
                isOpen.value = true;
                itemAdd.value = product;
                console.log(itemAdd.value.title)
            }

              const cartModaleIsClosed = () => {
                isOpen.value = false;
                setTimeout(() => {
                    itemAdd.value = null;
                }, 1000);
            }

            const productsInCart = store.getters.loadProductsInCart;

            const addToCart = (product) => {
                if(productsInCart.includes(product)){
                    product.quantity = product.quantity + 1;
                } else {
                    product.quantity = 1;
                    store.dispatch('addToCart', product);
                }
            }
        
            return { data, toggleModale, openModal, thisProduct, isOpen, cartModaleIsOpen, cartModaleIsClosed, itemAdd, addToCart  }
        }
    }
</script>

<style lang="scss">

    .home {
        display: flex;
        flex-direction: column;
        position: relative;
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
