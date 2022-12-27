<template>
    <div class="command-steps-container">
        <div class="command-steps" :class="{active: step === 0}" >
            25
        </div>
        <div class="command-steps" :class="{active: step === 1}">
            50
        </div>
        <div class="command-steps" :class="{active: step === 2}">
            75
        </div>
        <div class="command-steps" :class="{active: step === 3}">
            100
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

<style>

.command-steps-container {
    width: 75%;
    height: 125px;
    margin: 0px auto 15px;
    display: flex;
    justify-content: space-between;
}

.command-steps {
    border: 3px solid rgb(35, 47, 63);
    color: rgb(35, 47, 63);
    width: 75px;
    height: 75px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
}

.command-steps.active {
    border: 3px solid rgb(255,138,0);
    color: rgb(255,138,0);
    text-shadow:rgba(0,0,0,0.1) 2px 2px;
}

</style>