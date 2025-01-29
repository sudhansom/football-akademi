<template>
  <div class="height-weight card">
        <p style="font-weight:bold;margin:0;"><span>Age: {{ 7.4 }} yrs</span> | <span title="Updated on jan-2025">Height: {{ user.height}}cm</span> | <span title="Updated on jan-2025">Weight: {{user.weight}}kg</span></p>
  </div>
</template>

<script setup>
defineProps({
    user: Object
})
</script>

<style>

</style>