<template>
    <div class="cart-command">
        <div class="items">

        <div 
            v-for="(product, index) in productsInCart" :key="index"
        class="item">
            
            <div class="photo"><img :src="product.image" alt=""> </div>
            <div class="item-container">
                <div class="item-description">
                    <span class="description"> {{product.title}} </span>
                
                    <div class="quantity">
                        
                        <div class="quantity-area">
                            <button :disabled="product.quantity <= 1" @click="product.quantity--" >-</button>
                            <span class="quantity-number"> {{product.quantity}} </span>
                            <button @click="product.quantity++">+</button>
                        </div>
                        <div class="remove" @click="removeFromCart(product.id)" >Remove item{{product.quantity > 1 ?"s" : ""}} </div>
                    </div>
                </div>
                <span class="amount">{{ (product.price * product.quantity).toFixed(2) }} $ </span>
            </div>
           
        </div>
            <div class="total"> Total: US$ 22.30</div>
        </div>
        <div class="link">
            <router-link :to="'/payment'"><button>Passer commande</button></router-link> 
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
export default {
    name: 'Cart',

    methods: {
        removeFromCart (productId) {
            this.$store.dispatch('removeFromCart', productId)
        }
    },

    computed: mapState ([
        'productsInCart'
    ]),

    
}
</script>

<style lang="scss">

.cart-command {
    padding: 60px 0; 
    width: 1000px;

    .items {
        min-width:  800px;
        max-width: 1800px;
        margin: auto;
    .item {
        display: flex;
        width: 80%;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid lightgrey;
        position: relative;

    .item-container {
        width: 90%;

    }
        .item-description {
            display: flex;
            flex-direction: row;
            height: 100%;
        }

        .quantity {
            margin: 0 auto;
            width: 30%;
            height: 90%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

        }
      .remove {
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
            margin: 8px auto;
            height: 14px;

        .quantity-number {
            margin: 0 5px;
        }

        button {
            width: 16px;
            height: 16px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
      }

      .photo {
        img {
          max-width: 35px;
        }
      }

      .description {
        box-sizing: border-box;
        width: 60%;
        margin-bottom: 15px;

      }

 
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;
          position: absolute;
          top: 50%;
          right: 20px;

        }
    }
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;
      }

  }

}

</style>
