<template>
    <div class="command-first">
        <form class="command-form" @submit.prevent="submit">
            <command-first-step v-bind:command='command' v-bind:next='nextStep'  v-if="command.step === 0" @next-step="changeStep"/>
            <command-second-step v-bind:command='command'  v-if="command.step === 1" />
            <button type="submit" v-if="command.step === 5">Submit</button>
        </form>
    </div>
</template>

<script>
import commandFirstStep from '../components/commandFirstStep.vue';
import commandSecondStep from '../components/commandSecondStep.vue';

import {reactive} from 'vue';
export default {
    components: { commandFirstStep, commandSecondStep },

    name: 'Command',


    setup () {
        const command = reactive ({
            firstname:"",
            lastname:"",
            address: "",
            cart: {},
            step: 0,
            aggrementContract: false,
            payment: "paypal",        
            paymentAccepted: false,
        });
        


        const submit = () => {
            console.log("submit button");
            console.log(command)
        }; 
        
        const nextStep = () => {
            command.step++;
            console.log("nextstep");
        }

        const changeStep = (user) => {
            console.log("changestep");
            user.firstName ? command.firstname = user.firstName : '';
            command.lastname = user.lastName;
            command.address = user.address;
            command.step = user.step;  
            console.log(command)
        }
        return { command, submit, changeStep, nextStep }
    }
}
</script>

<style>
.command-first {
    margin-top: 130px;
}
</style>