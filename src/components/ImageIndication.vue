<template>
  <div class="indication">
    <div @click="$emit('update:modelValue', i)" v-for="i in [...Array(len + 1).keys()]" :key="i" class="circle" :class="{'active':i===modelValue}"></div>
  </div>
</template>

<script setup>
defineProps({
    len: Number,
    modelValue: Number,
})
</script>

<style scoped>
.indication {
    padding: 3px;
    display: flex;
    justify-content: center;
    gap: 6px;
}
.circle {
    width: 10px;
    height: 10px;
    border: 1px solid rgb(114, 112, 112);
    border-radius: 50%;   
}
.active {
    background-color: rgb(131, 128, 128);
}
</style>