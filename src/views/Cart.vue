<template>
    <div class="cart-command">
        <div class="items">

            <div v-for="(product, index) in productsInCart" :key="index" class="item">
                <div class="photo">
                    <img :src="product.image" alt="">
                </div>
                <div class="item-container">
                    <div class="item-description">

                        <span class="description">{{product.title}}</span>
                        <div class="quantity">
                            <div class="quantity-area">
                                <button :disabled="product.quantity <= 1" @click="removeOneItem(product)" >-</button>
                                <span class="quantity-number"> {{product.quantity}} </span>
                                <button @click="addItem(product)">+</button>
                            </div>
                            <div class="remove" @click="removeItem(product.id)" >Remove item{{product.quantity > 1 ?"s" : ""}} </div>
                        </div>

                    </div>
                    <span class="amount">{{ (product.price * product.quantity).toFixed(2) }} € </span>
                </div>
            </div>

            <div class="total">Total: {{total.toFixed(2)}} €</div>
        </div>
        <div class="link">
            <router-link :to="'/payment'"><button class="link-button">Proceed to checkout</button></router-link> 
        </div>
    </div>
</template>

<script>
    import { mapState, useStore } from 'vuex';
    import { computed } from 'vue';
export default {
    name: 'Cart',

    computed: mapState ([
        'productsInCart',
    ]),

    setup() {

        const store = useStore();

        const total = computed(() => {
            return store.state.totalPriceInCart
        })

        const addItem = (product) => {
            store.dispatch('addToCart', product);
        }

        const removeOneItem = (product) => {
            store.dispatch('removeOneFromCart', product);
        };

        const removeItem = (productId) => {
            store.dispatch('removeFromCart', productId);
        };

        return { addItem, removeOneItem, removeItem, total }
    },

    
}
</script>

<style lang="scss">

.cart-command {
    padding: 60px 0; 
    width: 1000px;
    margin: 0 auto;

    .items {
        min-width:  800px;
        max-width: 1800px;
        margin: auto;
    .item {
        display: flex;
        width: 100%;
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
            align-items: center;
            justify-content: center;
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
      }

 
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;
          position: absolute;
          top: 40%;
          right: 20px;

        }
    }
      .total {
          font-size: 24px;
          font-weight: bold;
          margin-top: 16px;
      }

  }

}

.link-button {
    margin-top: 16px;
    background: rgb(253, 164, 62);
    border: none;
    border-radius: 4px;
    color: #fff;
    padding: 6px 16px;
}
</style>
