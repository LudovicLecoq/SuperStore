<template>
    <div>



    </div>
</template>

<script>
import {  ref, reactive } from 'vue';
export default {
    name: 'commandThirdStep',
    components: {  },
    props:{
        command: {
            delivery: {
                type: String,
                required: true
            },
            carrier: {
                type: String,
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
        const thisCommand = reactive({
            delivery: props.command.delivery,
            carrier: props.command.carrier
        });
        const disabledButton = ref(true);



        return { thisCommand, disabledButton }
    },

}
</script>

<style>

</style>