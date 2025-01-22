<template>
  <h2>General Information</h2>
  <div class="programs">
    <h3>Our Programs</h3>
    <div class="schedule">
        <span>Tuesday: 15:00 - 17:00</span>
        <span>Wednesday: 15:00 - 17:00</span>
        <span>Thursday: 15:00 - 17:00</span>
        <span>Sunday: 17:00 - 19:00</span>
    </div>
  </div>
  <hr>
  <div class="programs">
    <h3>Prices</h3>
    <table>
        <thead>
            <tr>
                <th>Times / week</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1800 dkk</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2000 dkk</td>
            </tr>
            <tr>
                <td>3/full</td>
                <td>2500 dkk</td>
            </tr>
        </tbody>
    </table>
    <p><b>Specific training: 5000 dkk / package</b></p>
    <p>5 trainings(1 hour each) in each package.</p>
  </div>
</template>

<script setup>

</script>

<style scoped>
.programs {
    background: rgb(234, 232, 232);
    border-radius: 12px;
    text-align: center;
    padding: 12px;
}
.schedule {
    display: flex;
    flex-direction: column;
}
h3 {
    margin: 0 12px;
}
h2 {
    text-align: center;
}
</style>