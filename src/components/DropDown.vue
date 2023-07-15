<template>
    <select>
        <slot></slot>
    </select>
</template>

<script>
export default {

}
</script>

<style scoped>
/* ul{
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
} */
select{
    width: calc(100% - 12px);
    background-color: rgb(238 238 238 / 50%);
    border: 1px solid rgb(235, 235, 235);
    padding: 8px 0px 8px 10px;
    border-radius: 4px;
    outline: none;
    font-size: 12px;
}
</style>