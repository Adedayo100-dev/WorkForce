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
    border: 1px solid var(--line-color);
    color: grey;
}
.orange-confirm-button{
    background-color: var(--light-grey-color); /* transparent, #1B5E20, rgba(232 57 0 / 10%) */
    /* color: var(--orange-color); */
    box-shadow: rgba(128, 128, 128, 0.2) 0px 4px 8px 0px;
    font-family: Lato;
}
.orange-confirm-button:hover{
    background-color: var(--light-grey-color);
    box-shadow: none;
    /* color: var(--primary-color); */
}
.orange-confirm-button span{
    color: grey;
}
.orange-confirm-button:hover span{
    /* color: var(--primary-color); */
}
</style>