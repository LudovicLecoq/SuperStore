<template>
    <div class="home" >
        <products-cart-modale v-bind:isOpen='isOpen' v-bind:itemAdd='itemAdd' />
        <div class="products-container" :class="{active: isOpen===true }">
            <filter-menu />
            <Products v-bind:isOpen='isOpen' v-bind:items='data' v-bind:setIsOpen='cartModaleIsOpen' v-bind:setIsClosed='cartModaleIsClosed' />
        </div>
    </div>
</template>

<script>

    import { useStore } from 'vuex';
    import { computed, ref } from 'vue';
    import Products from '../components/Products.vue';
    import FilterMenu from '../components/FilterMenu.vue';
    import ProductsCartModale from '../components/ProductsCartModale.vue';

    export default {
        components: { Products, FilterMenu, ProductsCartModale },

      
        setup() {
            const store = useStore()
            const data = computed(() => store.getters.loadData);
            const isOpen = ref(false);
            const itemAdd = ref(null)

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
        
            return { data, isOpen, cartModaleIsOpen, cartModaleIsClosed, itemAdd  }
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
