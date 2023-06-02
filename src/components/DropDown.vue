<template>
    <div class="drop-down">
        <ul>
            <li>All</li>
            <li>SIN</li>
            <li>Cash</li>
            <li>Full-Time</li>
            <li>Part-Time</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul{
    background-color: rgb(238 238 238 / 50%);
    padding: 2px 0;
    border-radius: 4px;
}
li{
    font-size: 12px;
    padding: 4px 8px;
}
li:hover{
    background-color: rgba(128, 128, 128, 0.125);
}
</style>