<template>
    <div>

        <command-input v-model="thisCommand.firstName" text='text'/>

        <command-input v-model="thisCommand.lastName" text='text'/>

        <command-input v-model="thisCommand.phone" text='text'/>

        <command-input v-model="thisCommand.email" text='email'/>

        <button type="button" :disabled="disabledButton" @click="next(thisUser, 3)">Next</button>

    </div>
</template>

<script>
import commandInput from './atoms/commandInput.vue'
import {  ref, toRefs, reactive, watch} from 'vue';
export default {
    name: 'commandFirstStep',
    components: { commandInput },
    props:{
        command: {
            aggrementContract: {
                type: Boolean,
                required: true
            },
            payment: {
                type: String,
                required: true
            },
            paymentAccepted: {
                type: Boolean,
                required: true
            },  
        },
        next: {
            type: Function,
            required: true
        }
    },
    setup (props) {
        const thisCommand = reactive({
            aggrementContract: props.user.aggrementContract,
            payment: props.user.payment,
            paymentAccepted: props.user.paymentAccepted,
        });
        const commandRefs = toRefs(thisCommand);
        const disabledButton = ref(true);

        watch([commandRefs.aggrementContract, commandRefs.payment, commandRefs.paymentAccepted], function(newValues, oldValues){
            if(thisCommand.aggrementContract.length > 2 && thisCommand.payment.length > 2 && thisCommand.paymentAccepted.length > 2){
                disabledButton.value = false;
                console.log('user=>',thisCommand)
            } else if (thisCommand.aggrementContract.length < 3 || thisCommand.payment.length < 3 || thisCommand.paymentAccepted.length < 3){
                disabledButton.value = true;
            }
            console.log("watch", newValues, oldValues);
        });

        return { thisCommand, disabledButton }
    },

}
</script>

<style>

</style>