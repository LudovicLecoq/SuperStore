<template>
    <input class="command-form-item" :type="text" v-model="newValue" @input="$emit('update:modelValue', newValue)">
</template>

<script>
import { ref } from 'vue';
export default {
    name:"commandInput",
    props:['modelValue', 'text'],
    emits:['update:modelValue'],
    setup(props) {
        const newValue = ref(props.modelValue);
        return{newValue}
    }
}
</script>

<style>
.command-form-item {
    margin: 5px auto 30px;
    border: 1.5px solid rgba(44,62,80,1);
    border-radius: 4px;
    width: 300px;
    height: 20px;
}

</style>