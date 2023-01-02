<template>
    <div>
        <div class="complete-header">
            <img src="../assets/store_logo.png" alt="store logo" class="complete-header-img">
        </div>
        <div class="complete-content">
            <p>Thanks for this purchase, confirmation e-mail send at </p>
        </div>


    </div>
</template>

<script>

export default {
    name: 'commandFourStep',
    components: {  },
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
    setup () {
   
     

        return {  }
    },

}
</script>

<style lang="scss" scoped>

    .complete-header{
        background: blue;
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
        margin-top: 100px;
    }
</style>