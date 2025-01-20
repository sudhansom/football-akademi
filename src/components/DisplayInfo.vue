<template>
<div class="information">
  <h3>Coming program : 21-January-25, Tuesday </h3>
</div>
</template>

<script setup>

</script>

<style scoped>
.information {
    position: relative;
    background: rgb(183, 177, 177);
    color: white;
    text-align: center;
    padding: 6px;
}

.information h3 {
  display: inline-block;
  margin: 0;
  white-space: nowrap; /* Prevents text from wrapping to the next line */
  animation: move-right 12s linear infinite; /* 10 seconds, linear speed, infinite loop */
}

@keyframes move-right {
  0% {
    transform: translateX(-100%); /* Start at the original position */
  }
  100% {
    transform: translateX(100%); /* Move completely to the right */
  }
}
</style>