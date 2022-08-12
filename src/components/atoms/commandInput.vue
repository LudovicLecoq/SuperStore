<template>
    <input class="command-form-item" :type="text" v-model="newValue" @input="$emit('update:modelValue', newValue)">
</template>

<script>
import { ref } from 'vue';
export default {
    name:"commandInput",
    props:['modelValue'],
    emits:['update:modelValue'],
    setup(props) {
        const newValue = ref(props.modelValue);
        return{newValue}
    }
}
</script>

<style>

</style>