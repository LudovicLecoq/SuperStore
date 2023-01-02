<template>
    <div class="products">
        <div v-for="(product, index) in this.items" :key="index" class="product" :class="{inCart: isInCart(product)}">
            
            <div class="product-header">
                <div class="product-image" :style="{backgroundImage: 'url(' + product.image +')'}" v-on:click="toggleModale(product)"></div>
            </div>
            <div class="product-description">
                <div class="product-description-title" v-on:click="toggleModale(product)">
                    <h4>{{ product.title }}</h4>
                </div>
                <ProductLikes v-bind:item='product.rating' />
                <div class="product-description-price">
                    <p class="price">{{product.price.toFixed(2)}} €</p>
                    <button @click="addToCart(product)"  class="product-article-button">Add to cart</button>
                </div>
            </div>
        </div> 

    </div>
</template>

<script>
    import { ref } from 'vue';
    import { mapState, useStore } from 'vuex';
    import ProductLikes from './ProductLikes.vue';
    
    export default {
        name: 'Home',
        components: { ProductLikes },
        props:[
            'items',
            'setIsOpen',
            'setIsClosed',
            'toggleModale',
            'addToCart'
        ],
        
        computed: mapState ([
            'productsInCart',
        ]),

        setup(props){

            const store = useStore();
            const itemProd = ref(props.items);
            const productsInCart = store.getters.loadProductsInCart;

            const isInCart = (product) => {
                return productsInCart.find(item => item.id === product.id)
            }
            
            return {itemProd, isInCart}
        } 
    }
</script>

<style lang="scss">

    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 20px;
        width: 900px;
    }

    .product {
        flex: 0 0 30%;
        box-sizing: border-box;
        border-radius: 4px;
        max-width: 280px;
        max-height: 430px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
        background: #fff;
        margin: 8px;
        min-width: 250px;

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
        }

        &.inCart {
          border: 1px solid rgb(253, 164, 62);
        }
        
        h4 {
          margin: 12px auto;
          font-size: 15px;
          max-width: 90%;
          font-weight: normal;
        }

        p.price {
          font-size: 20px;
          font-weight: bold;
          padding-left: 25px;
        }

        button {
            height: 40px;
            color: #fff;
            background-color: rgb(253, 164, 62);
            border: 1px solid rgb(253, 164, 62);
            border-radius: 4px;
            font-weight: 400;
            text-align: center;
            padding: 0px 16px;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
            }

            &.remove {
                background-color: transparent;
                border: none;
                color: black;
                text-decoration: underline;
            }
        }
    }

    .product-header{
        width: 100%;
        background: #fff;
        padding: 1px 0;
        border-radius: 4px 4px 0 0;
    }

    .product-description-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        padding: 25px 20px 10px;
    }

    .product-image {
        margin: 20px auto;
        width: 160px;
        height: 140px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
    }

    .product-description{
        width: 100%;
        height: calc(100% - 185px);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .product-description-title {
        height: calc(100% - 125px);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
</style>
