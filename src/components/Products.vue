<template>
    <div class="products">

            <div 
            v-for="(product, index) in this.items" :key="index"
            class="product" :class="{inCart: isInCart(product)}" 
            >
                <div class="product-image" :style="{backgroundImage: 'url(' + product.image +')'}"></div>
                <h4>{{ product.title }}</h4>
                 <ProductLikes v-bind:item='product.rating' />
                <p class="price">{{product.price.toFixed(2)}} $</p>
                <button v-if="!isInCart(product)" @click="addToCart(product)" >Add to cart</button>
                <button v-else class="remove" @click="removeFromCart(product.id)" >Remove from cart</button>

               
            </div> 

        </div>
</template>

<script>

    import { mapState } from 'vuex';
    import ProductLikes from './ProductLikes.vue'
    export default {
        name: 'Home',
        components: { ProductLikes },
        props:[
            'items'
        ],
        
        computed: mapState ([
            'productsInCart',
        ]),

        methods: {
            addToCart (product) {
                product.quantity = 1;
                this.$store.dispatch('addToCart', product);
            },
            
            isInCart (product) {
                return this.productsInCart.find(item => item.id === product.id)
            }, 

            removeFromCart (productId) {
                this.$store.dispatch('removeFromCart', productId)
            }
        }
    }
</script>

<style lang="scss">



    .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;


      .product {
        flex: 0 0 30%;
        box-sizing: border-box;  
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 16px;
        margin: 8px;
        height: auto;
        min-width: 250px;

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
        }

        &.inCart {
          border: 1px solid #007bff;
        }
        
        .product-image {
          margin: 20px auto;
          width: 160px;
          height: 140px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        h4 {
          margin: 22px auto;
          font-size: 15px;
          max-width: 90%;
          font-weight: normal;
        }

        p.price {
          font-size: 20px;
          font-weight: bold;
        }

        button {
          color: #fff;
          background-color: #007bff;
          border: 1px solid #007bff;
          border-radius: 100px;
          font-weight: 400;
          text-align: center;
          padding: 8px 16px;
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
    }

  


</style>
