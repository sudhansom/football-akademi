<template>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><router-link to="/info/detail">Sudhan</router-link></td>
                <td>Lalim</td>
                <td>40</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>

</script>

<style scoped>
    table {
        width: 100%;
    }
    tr, td, table, th {
        border: 1px solid gray;
        border-collapse: collapse;
    }
    td {
        padding: 3px 6px;
    }
</style>