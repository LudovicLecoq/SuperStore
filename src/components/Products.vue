<template>
    <div class="products">

            <div 
            v-for="(product, index) in this.items" :key="index"
            class="product" :class="{inCart: isInCart(product)}" 
            >
                <div class="product-header">
                    <div class="product-image" :style="{backgroundImage: 'url(' + product.image +')'}"></div>
                </div>
                <div class="product-description">
                    <div class="product-description-title">
                        <h4>{{ product.title }}</h4>
                    </div>
                    <div class="product-description-price">
                        <ProductLikes v-bind:item='product.rating' />
                        <p class="price">{{product.price.toFixed(2)}} $</p>
                        <button @click="addToCart(product)" >Add to cart</button>
                        <!-- <button v-else class="remove" @click="removeFromCart(product.id)" >Remove from cart</button> -->
                    </div>
                </div>
               
            </div> 

        </div>
</template>

<script>

    import { mapState } from 'vuex';
    import ProductLikes from './ProductLikes.vue';
    import { ref } from 'vue';

    
    export default {
        name: 'Home',
        components: { ProductLikes },
        props:[
            'items',
            'isOpen',
            'setIsOpen',
            'setIsClosed'
        ],
        
        computed: mapState ([
            'productsInCart',
        ]),
        

        methods: {
            addToCart (product) {
                product.quantity = 1;
                this.$store.dispatch('addToCart', product);
                this.setIsOpen(product);
                setTimeout(() => {
                  this.setIsClosed();
                }, 5000);
            },
            
            isInCart (product) {
                return this.productsInCart.find(item => item.id === product.id)
            }, 

            removeFromCart (productId) {
                this.$store.dispatch('removeFromCart', productId)
            }
        },
        setup(props){
          const itemProd = ref(props.items);
          return {itemProd}
        }
        
    }
</script>

<style lang="scss">

    .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-top: 20px;

      .product-header{
        width: 100%;
        background: #fff;
        padding: 4px 0;
      }


      .product {
        flex: 0 0 30%;
        box-sizing: border-box;
        max-width: 280px;  
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        background: #fafafa;
        margin: 8px;
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
        }

        h4 {
          margin: 12px auto;
          font-size: 15px;
          max-width: 90%;
          font-weight: normal;
        }

        .product-description-price {
            height: 125px;
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
