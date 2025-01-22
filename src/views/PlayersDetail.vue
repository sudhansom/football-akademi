<template>
  <div class="person">
    <div class="personal-info card">
    <div >
        <h2>Rhythm Som Poudel</h2>
        <p><b>Started on: 15-11-2024</b></p>
    </div>
    <div class="image">
        <img src="../assets/hrithm.png" alt="">
    </div>
  </div>
  <div class="height-weight card">
        <p style="font-weight:bold;margin:0;"><span>Age: {{ 7.4}} yrs</span> | <span title="Updated on jan-2025">Height: {{ 130}}cm</span> | <span title="Updated on jan-2025">Weight: {{32}}kg</span></p>
  </div>
  <div class="payment card">
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
  <div class="about card">
    <h3>Skills:</h3>
    <ol>
        <li>good running (fast )</li>
        <li>very interested and motivated</li>
        <li>he is not good at dribbling</li>
        <li>not good shoot</li>
        <li>slow with ball</li>
        <li>week left leg</li>
    </ol>
  </div>
    <div class="s-training card">
    <h3>Specific Training</h3>
    <p>Not taken yet.</p>
    </div>
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
    margin: 24px;
}
ol {
    padding:0;
    margin: 0;
}
li {
    margin-left: 24px;
}
.card {
    background: rgb(236, 235, 235);
    padding: 12px;
    margin: 12px 0;
    border-radius: 12px;
}
</style>