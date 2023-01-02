<template>
    <div class="command-steps-container">
        <div class="command-steps" :class="{active: step === 0}" >
            <img v-if="step !== 0" src="../assets/profil.png" alt="indentification" class="command-steps-img profil">
            <img v-if="step === 0" src="../assets/profil_color.png" alt="indentification" class="command-steps-img profil">
            <span class="command-steps-text">Identification</span>   
        </div>
        <div class="command-steps" :class="{active: step === 1}">
            <img v-if="step !== 1" src="../assets/address.png" alt="address"  class="command-steps-img address">
            <img v-if="step === 1" src="../assets/address_color.png" alt="address"  class="command-steps-img address">
            <span class="command-steps-text">Address</span>  
        </div>
        <div class="command-steps" :class="{active: step === 2}">
            <img v-if="step !== 2" src="../assets/delivery.png" alt="delivery" class="command-steps-img delivery">
            <img v-if="step === 2" src="../assets/delivery_color.png" alt="delivery" class="command-steps-img delivery">
            <span class="command-steps-text">Delivery</span> 
        </div>
        <div class="command-steps" :class="{active: step === 3}">
            <img v-if="step !== 3" src="../assets/complete.png" alt="complete order" class="command-steps-img complete">
            <img v-if="step === 3" src="../assets/complete_color.png" alt="complete order" class="command-steps-img complete">
            <span class="command-steps-text">Complete</span> 
        </div>
    </div>
</template>

<script>
    export default {
        name: "commandAllSteps",
        props:['step'],
        
        setup() {
            

        },
    }
</script>

<style scoped>

.command-steps-container {
    width: 75%;
    height: 125px;
    margin: 0px auto 15px;
    display: flex;
    justify-content: space-between;
}

.command-steps {
    color: rgb(35, 47, 63);
    width: 75px;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.command-steps.active {
    color: rgb(255,138,0);
}
.command-steps-img {
    height: 45px;
}

.profil {
    padding-top: 5px;
    height: 40px;
}

.address {
    height: 42px;
    padding-top: 3px;
}

.delivery {
    height: 55px;
}

.complete {
    padding-top: 10px;
    height: 35px;
}

</style>