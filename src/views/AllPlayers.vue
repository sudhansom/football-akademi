<template>
    <table>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Address</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in 10" :key="i">
                <td>{{i}}</td>
                <td><router-link to="/info/detail">Sudhan</router-link></td>
                <td>Husum</td>
                <td>7</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>

</script>

<style scoped>
   
</style>