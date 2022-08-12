<template>
    <div class="secondstep">
   
        <command-input v-model="thisUser.address" text='text'/>

        <command-input v-model="thisUser.postalCode" text='text'/>

        <command-input v-model="thisUser.city" text='text'/>

        <command-input v-model="thisUser.country" text='text'/>

        <button type="button" :disabled="disabledButton" @click="next(thisUser, 2)">Next</button>
    </div>
</template>

<script>
import commandInput from './atoms/commandInput.vue'
import {  ref, toRefs, reactive, watch} from 'vue';
export default {
    name: 'commandSecondStep',
    components: { commandInput },
    props:{
        user: {
            address: {
                type: String,
                required: true
            },
            postalCode: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            },
        },
        next: {
            type: Function,
            required: true
        }
    },
    setup (props) {
        const thisUser = reactive({
            address: props.user.address,
            postalCode: props.user.postalCode,
            city: props.user.city,
            country: props.user.country,
        });
        const userRefs = toRefs(thisUser);
        const disabledButton = ref(true);

        watch([userRefs.address, userRefs.postalCode, userRefs.city, userRefs.country], function(newValues, oldValues){
            if(thisUser.address.length > 5 && thisUser.postalCode.length > 4 && thisUser.city.length > 2 && thisUser.country.length > 2){
                disabledButton.value = false;
            } else if (thisUser.address.length < 6 || thisUser.postalCode.length < 5 || thisUser.city.length < 3 ||thisUser.country.length < 3){
                disabledButton.value = true;
            }
            console.log("watch", newValues, oldValues);
        });

        return { thisUser, disabledButton }
    },

}
</script>

<style>

</style>