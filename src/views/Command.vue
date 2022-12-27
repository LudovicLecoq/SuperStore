<template>
    <div class="command">
        <form class="command-form" @submit.prevent="submit">
            <command-all-steps :step="command.step"/>
            <div class="command-form-container">
                <command-first-step v-bind:user='user' v-bind:next='nextStep'  v-if="command.step === 0"/>
                <command-second-step v-bind:user='user' v-bind:next='nextStep' v-bind:prev='prevStep'  v-if="command.step === 1" />
                <p v-if="command.step === 2">Resume command</p>
            </div>
            <button type="submit" v-if="command.step === 5">Submit</button>
        </form>
    </div>
</template>

<script>
import commandFirstStep from '../components/commandFirstStep.vue';
import commandSecondStep from '../components/commandSecondStep.vue';
import commandAllSteps from '../components/commandAllSteps.vue';

import { reactive } from 'vue';
export default {
    components: { commandFirstStep, commandSecondStep, commandAllSteps },

    name: 'Command',


    setup () {
        const command = reactive ({
            step: 0,
            carrier:"",
            delivery:"",
            aggrementContract: false,
            payment: "paypal",        
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

        const submit = () => {
            console.log("submit button");
            console.log('command=>',command);
        }; 
        
        const nextStep = (value, step) => {
            console.log("nextstep");
            console.log('command=>', value);
            if(step < 3){
                setUser(value, step);
            }  
        };

        const prevStep = (step) => {
            console.log("prevstep");
            command.step = step;
        };

        const setUser = (value, step) => {
            console.log("setUser", step);
            if(step === 1){
                console.log("step1");
                user.firstname = value.firstName;
                user.lastname = value.lastName;
                user.email = value.email;
                value.phone ? user.phone = value.phone : ''; 
            } else if (step === 2) {
                console.log("step2");
                user.address = value.address;
                user.postalCode = value.postalCode;
                user.city = value.city;
                user.country = value.country;
            }
            command.step = step;
            console.log(user)
        }
        return { command, user, submit, nextStep, prevStep}
    }
}
</script>

<style>
    .command{
        margin-top: 60px;
    }

    .command-form-container {
        margin: 0 auto;
        padding: 75px 0 50px;
        border: 0.5px solid rgba(44,62,80,0.3);
        border-radius: 7px;
        width: 475px;
    }
</style>