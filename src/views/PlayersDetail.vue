<template>
  <div class="person">
    <div class="personal-info">
    <div>
        <h2>Sudhan Poudel ({{ 7 }})</h2>
        <p>Started on: 15-11-2024</p>
    </div>
    <div class="image">
        <img src="../assets/hrithm.png" alt="">
    </div>
  </div>
  <table>
    <h3>Payments:</h3>
    <thead>
        <tr>
            <th>Jan</th>
            <th>Feb</th>
            <th>Mar</th>
            <th>Apr</th>
            <th>Jun</th>
            <th>Jul</th>
            <th>Aug</th>
            <th>Sep</th>
            <th>Oct</th>
            <th>Nov</th>
            <th>Dec</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>paid</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </tbody>
  </table>
  </div>
</template>

<script setup>

</script>

<style scoped>
.personal-info {
    display: flex;
    justify-content: space-between;
}
.image {
    padding: 2px;
    border: 1px solid gray;
    border-radius: 6px;
    height: 100px;
    width: 100px;
}
img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    border-radius: 6px;
}
h3 {
    margin: 0;
}
.person {
    border: 1px solid gray;
    padding: 12px;
    border-radius: 12px;
}
</style>