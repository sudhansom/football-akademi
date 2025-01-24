<template>
    <div class="flex justify-between border-1 border-gray-200 rounded-lg mb-2 p-1">
        <input class="border-1 border-gray-200 rounded-lg py-1 px-2" type="text" placeholder="Search by Name">
        <select class="border-1 border-gray-200 rounded-lg py-1 px-2 w-24" >
            <option value="">Type</option>
            <option value="">players</option>
            <option value="">helpers</option>
        </select>
        <input class="border-1 border-gray-200 rounded-lg py-1 px-2 w-24" type="number" placeholder="Age">
    </div>
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