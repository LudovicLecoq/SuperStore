<template>
        <form class="first-step" @submit="next(thisUser, 1)">
            <label class="label" for="firstname">First name</label>
            <command-input v-model="thisUser.firstName" text='text' />
            <label class="label" for="lastname">Last name</label>
            <command-input v-model="thisUser.lastName" text='text'/>
            <label class="label" for="phone-number">Phone number</label>
            <command-input v-model="thisUser.phone" text='number'/>
            <label class="label" for="email">E-mail</label>
            <command-input v-model="thisUser.email" text='email'/>
            <div class="step-button-container">
                <button type="submit" class="step-button" :disabled="disabledButton">Next</button>
            </div>

        </form>
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
        const disabledButton = ref(
            thisUser.firstName.length > 2 && 
            thisUser.lastName.length > 2 &&
            thisUser.email.length > 2 ? false : true
        );

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
        width: 360px;
        margin: 0 auto;
    }
    .label{
        text-align: start;
        font-size: 15px;
        font-weight: 500;
        padding-left: 35px;
    }

    .step-button-container {
        display: flex;
        justify-content: flex-end;
    }

    .step-button{
        margin-top: 40px;
        height: 35px;
        width: 40%;
    }
    
    .step-button:last-child{
        margin-left: 20%;
    }
</style>