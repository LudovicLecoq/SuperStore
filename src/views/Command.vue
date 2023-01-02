<template>
    <div class="command">
        <command-all-steps :step="command.step"/>
        <div class="command-form">
            
            <div class="command-form-container">
                <command-first-step 
                    v-bind:user='user' 
                    v-bind:next='nextStep'  
                    v-if="command.step === 0"
                />
                <command-second-step 
                    v-bind:user='user' 
                    v-bind:next='nextStep' 
                    v-bind:prev='prevStep'  
                    v-if="command.step === 1" 
                />
                <command-third-step 
                    v-bind:user='user'
                    v-bind:command='command' 
                    v-bind:next='nextStep' 
                    v-bind:prev='prevStep'  
                    v-if="command.step === 2" 
                />
                <command-four-step 
                    v-bind:user='user' 
                    v-if="command.step === 3" 
                />
            </div>
        </div>
    </div>
</template>

<script>
import commandFirstStep from '../components/commandFirstStep.vue';
import commandSecondStep from '../components/commandSecondStep.vue';
import commandThirdStep from '../components/commandThirdStep.vue';
import commandFourStep from '../components/commandFourStep.vue'
import commandAllSteps from '../components/commandAllSteps.vue';

import { reactive } from 'vue';
export default {
    components: { commandFirstStep, commandSecondStep, commandThirdStep, commandFourStep, commandAllSteps },

    name: 'Command',

    setup () {
        const command = reactive ({
            step: 0,
            delivery:"normal",
            deliveryTime:"",
            acceptTerms: false,
            acceptedPrivacy: false,
            paymentMethod: "card",        
            paymentAccepted: false,
        });
        
        const user = reactive({
            firstname:"",
            lastname:"",
            phone: "",
            email:"",
            address: "",
            postalCode: "",
            city: "",
            country: "",
            cart: [],
        });

        // const submit = () => {
        //     console.log("submit button");
        //     console.log('command=>',command);
        // }; 
        
        const nextStep = (value, step) => {
            if(step < 3){
                setUser(value, step);
            }  else if(step > 2) {
                setCommand(value, step);
            }
        };

        const prevStep = (step) => {
            command.step = step;
        };

        const setUser = (value, step) => {
            if(step === 1){
                user.firstname = value.firstName;
                user.lastname = value.lastName;
                user.email = value.email;
                value.phone ? user.phone = value.phone : ''; 
            } else if (step === 2) {
                user.address = value.address;
                user.postalCode = value.postalCode;
                user.city = value.city;
                user.country = value.country;
            }
            command.step = step;
        }

        const setCommand = (value, step) => {
            if(step === 3){
                user.firstname = value.firstName;
                user.lastname = value.lastName;
                user.email = value.email;
                value.phone ? user.phone = value.phone : ''; 
            } else if (step === 4) {
                user.address = value.address;
                user.postalCode = value.postalCode;
                user.city = value.city;
                user.country = value.country;
            }
            command.step = step;
        }
        return { command, user, nextStep, prevStep}
    }
}
</script>

<style>

    input[type=number] {
        -moz-appearance: textfield;
    }
        /* Chrome */
    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        margin:0;
    }
    
    /* Opéra*/
    input::-o-inner-spin-button,
    input::-o-outer-spin-button { 
        -o-appearance: none;
        margin:0
    }


    .command{
        margin: 50px auto 0;
    }

    .command-form-container {
        margin: 0 auto;
        padding: 75px 0 50px;
        border: 0.5px solid rgba(44,62,80,0.3);
        border-radius: 7px;
        width: 600px;
        background: #fff;
        position: relative;
    }

    .step-button {
        border: none;
        border-radius: 4px;
        background: rgb(253, 164, 62);
        color: #fff;
        cursor: pointer;
    }

    .step-button:disabled {
        background: rgb(172, 171, 171);
    }
</style>