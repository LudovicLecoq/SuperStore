<template>
    <div class="first-step">

        <command-input v-model="thisUser.firstName" text='text'/>

        <command-input v-model="thisUser.lastName" text='text'/>

        <command-input v-model="thisUser.phone" text='text'/>

        <command-input v-model="thisUser.email" text='email'/>

        <button type="button" :disabled="disabledButton" @click="next(thisUser, 1)">Next</button>

    </div>
</template>

<script>
import commandInput from './atoms/commandInput.vue'
import {  ref, toRefs, reactive, watch} from 'vue';
export default {
    name: 'commandFirstStep',
    components: { commandInput },
    props:{
        user: {
            firstname: {
                type: String,
                required: true
            },
            lastname: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            },
            step: {
                type: Number,
            }    
        },
        next: {
            type: Function,
            required: true
        }
    },
    setup (props) {
        const thisUser = reactive({
            firstName: props.user.firstname,
            lastName: props.user.lastname,
            phone: props.user.phone,
            email: props.user.email,
        });
        const userRefs = toRefs(thisUser);
        const disabledButton = ref(true);

        watch([userRefs.firstName, userRefs.lastName, userRefs.email], function(newValues, oldValues){
            if(thisUser.firstName.length > 2 && thisUser.lastName.length > 2 && thisUser.email.length > 2){
                disabledButton.value = false;
                console.log('user=>',thisUser)
            } else if (thisUser.firstName.length < 3 || thisUser.lastName.length < 3 || thisUser.email.length < 3){
                disabledButton.value = true;
                
            }
            console.log("watch", newValues, oldValues);
        });

        return { thisUser, disabledButton }
    },

}
</script>

<style>
.first-step {
    display: flex;
    flex-direction: column;
}
</style>