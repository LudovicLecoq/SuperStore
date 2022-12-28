<template>

    <div class="products-cart-modale" :class="{active: isOpen === true }">
        <div class="products-cart-modale-item">
            <img :src="itemAdd?.image" :alt="itemAdd?.description" class="products-cart-modale-item-img">
            <div class="products-cart-modale-item-text">
                <div class="products-cart-modale-item-text-add">
                    <img src="../assets/add_icon.png" alt=""><p>Added to cart</p>
                </div>
                <p class="products-cart-modale-item-text-description">{{itemAdd?.title}}</p> 
            </div>
            
        </div>
        <div class="products-cart-modale-total">
            <p> Cart Subtotal: {{totalCart}}€ </p>
            <router-link class="products-cart-modale-total-link"  :to="'/cart'">
                Go to Cart
            </router-link> 
            <router-link class="products-cart-modale-total-link" :to="'/payment'">
                Proceed to checkout ( {{itemsNb && itemsNb }} item{{itemsNb > 1 ? "s" : ""}} )
            </router-link> 
        </div>
    </div>

</template>

<script>
    import { watch, ref } from 'vue';
    import { useStore } from 'vuex';

    export default {
        name: 'ProductsCartModale',
        props:[
            'isOpen',
            'itemAdd'
        ],

        setup(props) {
            const totalCart = ref();
            const itemsNb = ref ();
            const store = useStore();

            const totalResult = () => {
                const allTotalArticles = [0];
                const totalItems = []
                store.state.productsInCart.forEach(product => {    
                    const objectTotal = product.price * product.quantity;
                    allTotalArticles.push(objectTotal);
                    totalItems.push(product.quantity);
                    console.log("total calcul", product)
                });
                totalCart.value = Math.round(allTotalArticles.reduce((addValue, currentValue) => addValue + currentValue) * 100) / 100;
                itemsNb.value = totalItems.reduce((addValue, currentValue) => addValue + currentValue);
            }

            watch(() => props.itemAdd, () => {
                if(props.itemAdd){
                    totalResult()
                }
            })
  
            return {totalCart, itemsNb}
        },
    }
</script>


<style lang="scss">
    .products-cart-modale {
        position: absolute;
        top: 25px;
        width: 100%;
        height: 180px;
        opacity: 0;
        visibility: hidden;        
        display: flex;
        justify-content: space-between;
        background: #fff;
        /* align-items: center; */
    }

    .products-cart-modale.active {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: all 2s ease-in-out;
        animation: showIn 10.5s ease-in-out forwards;
    }

    @keyframes showIn {
        0% {
            opacity: 0;
            visibility: visible;
        }
        15% {
            opacity: 1;
        }
        85% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    .products-cart-modale-total {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-right: 75px;
        height: 150px;
        font-size: 20px;
        font-weight: bold;
    }

    .products-cart-modale-item{
        margin-left: 100px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 180px;
        width: 60%;
    }

    .products-cart-modale-item-img {
        max-height: 110px;
        max-width: 110px;
        margin-right: 50px;
    }

    .products-cart-modale-item-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 75px;
    }

    .products-cart-modale-item-text-add {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 18px;
        img {
            height: 32px;
            width: 32px;
            margin-bottom: 3px;
            margin-right: 2px;
        }
    }

    .products-cart-modale-total-link {
        text-decoration: none;
        font-weight: normal;
        font-size: 12px;
        color: #fff;
        height: 35px;
        width: 200px;
        background: rgb(253, 164, 62);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>