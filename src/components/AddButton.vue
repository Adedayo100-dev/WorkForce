<template>
    <button class="add-shift_button orange-confirm-button font-weight-700">
        <AddIcon weight="20px" height="20px"/>
        <slot></slot>
    </button>
</template>

<script>

import AddIcon from '../components/icons/IconAdd.vue'

export default {
    components: {
        AddIcon
    }
}
</script>

<style>
.add-shift_button{
    border: 1px solid var(--light-grey-color);
    color: grey;
}
.orange-confirm-button{
    background-color: transparent; /* #1B5E20, rgba(232 57 0 / 10%) */
    /* color: var(--orange-color); */
    font-family: Lato;
}
.orange-confirm-button:hover{
    background-color: var(--light-grey-color);
    /* color: var(--primary-color); */
}
.orange-confirm-button span{
    color: grey;
}
.orange-confirm-button:hover span{
    /* color: var(--primary-color); */
}
</style>