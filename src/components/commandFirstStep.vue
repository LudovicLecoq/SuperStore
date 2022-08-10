<template>
    <div>
        <input v-model="user.firstName" class="command-form-item" type="text">
        <p>{{user.firstName}}</p> 
        <input v-model="user.lastName" class="command-form-item" type="text">
        <p>{{user.lastName}}</p> 
        <input v-model="user.address" class="command-form-item" type="text">
        <p>{{user.address}}</p> 

        <button type="button" :disabled="disabledButton" @click="nextStep">Next</button>

    </div>
</template>

<script>

import {  ref, toRefs, reactive, watch} from 'vue';
export default {
    name: 'commandSecondStep',
    props:{
        command: {
            firstname: {
                type: String,
                required: true
            },
            lastname: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            step: {
                type: Number,
            }
        }
    },
    setup (props, {emit}) {
        const user = reactive({
            firstName: props.command.firstname,
            lastName: props.command.lastname,
            address: props.command.address,
            step: props.command.step
        });
        const userRefs = toRefs(user);
        const disabledButton = ref(true);

        watch([userRefs.firstName, userRefs.lastName, userRefs.address], function(newValues, oldValues){
            if(user.firstName.length > 2 && user.lastName.length > 2 && user.address.length > 2){
                disabledButton.value = false;
            } else if (user.firstName.length < 3 || user.lastName.length < 3 || user.address.length < 3){
                disabledButton.value = true;
            }
            console.log("watch", user.step, newValues, oldValues);
        });

        const nextStep = () => {
            user.step = 1;
            console.log(user.step);
            emit("next-step", user)
        }

        return { user, disabledButton, nextStep }
    },

}
</script>

<style>

</style>