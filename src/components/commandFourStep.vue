<template>
    <div>
        <div class="complete-header">
            <img src="../assets/store_logo.png" alt="store logo" class="complete-header-img">
        </div>
        <div class="complete-content">
            <p>Thank you for this purchase, a confirmation email has been sent to you. </p>
        </div>


    </div>
</template>

<script>

import { reactive } from 'vue';

export default {
    name: 'commandFourStep',
    components: {  },
    props:{
        user: {
            email: {
                type: String,
                required: true
            },
         
        },
    },
    setup (props) {
   
        const thisUser = reactive({
            email: props.user.email,
        });

        return { thisUser }
    },

}
</script>

<style lang="scss" scoped>

    .complete-header{
        background-color: rgb(18, 25, 33);
        height: 150px;
        width: 100%;
        position: absolute;
        top: 0;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

      .complete-header-img {
        height: 100px;
    }

    .complete-content {
        margin-top: 130px;
    }
</style>