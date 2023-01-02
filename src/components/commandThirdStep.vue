
<template>
    <form class="delivery-command" @submit="next(thisCommand, 3)">

        <div class="command-title delivery-title">
            <span class="command-title-text">Delivery</span>
        </div>

        <div class="delivery-option">
            <div class="delivery-option-item">
                <input class="choice" type="radio" id="express" value="express" v-model="thisCommand.delivery"/>
                <label for="express">Express</label>
            </div>
            <div class="delivery-option-item">
                <input class="choice" type="radio" id="normal" value="normal" v-model="thisCommand.delivery"/>
                <label for="normal">Normal</label>
            </div>
        </div>
        <div class="delivery-time">
            <p class="delivery-time-item">Estimated delivery: {{getExpressDeleveryDate(thisCommand.delivery)}}</p>
        </div>

        <div class="command-title">
            <span class="command-title-text">Order</span>
        </div>
        <div v-for="(product, index) in productsInCart" :key="index" class="command-item">
              
            <img :src="product.image" alt="" class="command-photo">
           
            <div class="command-item-container">
                <span class="command-item-description">{{product.title}}</span>
                <span class="command-item-quantity"> {{product.quantity}} </span>
            </div>
        </div>

        <div class="command-price">
            <span>Total: {{ totalPriceInCart }} €</span>
        </div>

        <div class="command-title">
            <span class="command-title-text">Payment</span>
        </div>
        <div class="payment-method">
            <div class="payment-method-item">
                <input type="radio" id="card" value="card" v-model="thisCommand.paymentMethod"/>
                <label for="card"><img src="../assets/mastercard.png" alt="mastercard" class="mastercard"></label>
            </div>
            <div class="payment-method-item">
                <input type="radio" id="paypal" value="paypal" v-model="thisCommand.paymentMethod"/>
                <label for="paypal"><img src="../assets/paypal.png" alt="mastercard" class="paypal"></label>
            </div>
            <div class="payment-method-item">
                <input type="radio" id="paylib" value="paylib" v-model="thisCommand.paymentMethod"/>
                <label for="paylib"><img src="../assets/paylib.png" alt="mastercard" class="paylib"></label>
            </div>
        </div>

        <div class="conditions">
                <div class="conditions-item">
                    <input type="checkbox" id="terms" v-model="thisCommand.acceptedTerms"/>
                    <label class="conditions-item-label" for="terms">Agree terms of use</label>
                </div>
                <div class="conditions-item">
                    <input type="checkbox" id="privacy" v-model="thisCommand.acceptedPrivacy"/>
                    <label class="conditions-item-label" for="privacy">Agree private notices</label>
                </div>
        </div>
    
        <div class="step-form-buttons">
            <button type="button" class="step-button" @click="prev(0)">Prev</button>
            <button type="submit" class="step-button" :disabled="!thisCommand.acceptedTerms || !thisCommand.acceptedPrivacy" @click="resetCart()">Payment</button>
        </div>
    </form>
</template>


<script>
import { reactive } from 'vue';
import { mapState, useStore } from 'vuex';

export default {
    name: 'commandThirdStep',
    computed: mapState ([
        'productsInCart',
        'totalPriceInCart'
    ]),
    components: {  },
    props:{
        command: {
            delivery: {
                type: String,
                required: true
            },
            deliveryTime: {
                type: String,
                required: false
            },
            paymentMethod: {
                type: String,
                required: true
            },
            acceptedPrivacy: {
                type: Boolean,
                required: true
            },
            acceptTerms: {
                type: Boolean,
                required: true
            }
        },
        user: {
            cart: {
                type: Array,
                required:true
            }
        },
        next: {
            type: Function,
            required: true
        }
    },
    setup (props) {

        const store = useStore();

        const thisCommand = reactive({
            delivery: props.command.delivery,
            deliveryTime: props.command.deliveryTime,
            paymentMethod: props.command.paymentMethod,
            acceptedPrivacy: props.command.acceptedPrivacy,
            acceptTerms: props.command.acceptTerms
        });

        const resetCart = () => {
            store.dispatch('resetCart');
        }


        const getExpressDeleveryDate = (time) => {

            const currentDate = new Date();

            if(time === "express") {
                currentDate.setDate(currentDate.getDate() + 2);
            } else {
                    currentDate.setDate(currentDate.getDate() + 5);
            }
         
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1;
            const year = currentDate.getFullYear();
            thisCommand.deliveryTime = `${day}/${month}/${year}`;

            return `${day}/${month}/${year}`;
        }

        return { thisCommand, getExpressDeleveryDate, resetCart }
    },

}
</script>

<style lang='scss' scoped>

    .command-title {
        border-bottom: 2px solid rgb(253, 164, 62);
        position: relative;
        margin-bottom: 40px;
    }

    .command-title-text{
            color: rgb(253, 164, 62);
            position: absolute;
            left: 10px;
            top: -10px;
            background: #fff;
            padding: 0 10px;
        }

    .delivery-title {
        margin-bottom: 50px;
    }

    .delivery-command {
        padding: 0 30px;
    }

    .delivery-option, .payment-method {
        display: flex;
        justify-content: space-around;
        align-items: center;

        & label {
            margin-left: 10px;
        }

        & input[type="radio"].choice {
            display: none;
        }

        & input[type="radio"].choice + label {
            border: 2px solid rgb(253, 164, 62);
            border-radius: 4px;
            background: #fff;
            color: rgb(253, 164, 62);
            padding: 8px 16px;
            cursor: pointer;
        }

        & input[type="radio"].choice:checked + label {
            border: 2px solid rgb(253, 164, 62);
            background: rgb(253, 164, 62);
            color: #fff;
            padding: 8px 16px;
        }
    }
    
    .command-price {
        width: 100%;
        text-align: end;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 75px;
    }

    .conditions-item {
        display: flex;
        justify-content: flex-start;
    }

    .conditions-item-label {
        margin-left: 5px;
    }

    .conditions {
        margin-top: 35px;
    }

    .delivery-time {
        margin: 50px 0;
    }

    .command-item {
        display: flex;
        margin-bottom: 25px;
    }

    .command-photo {
        max-width: 35px;
        margin-right: 20px;
    }

    .command-item-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: start;
        width: 800px;
    }

    .command-item-description {
        width: 450px;
    }

    .payment-method-item {
        display: flex;
        align-items: center;
    }

    .mastercard {
        width: 50px;
    }

    .paypal {
        width: 100px;
    }

     .paylib {
        width: 70px;
    }

</style>