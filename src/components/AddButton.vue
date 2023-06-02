<template>
    <button class="add-shift_button orange-confirm-button font-weight-700">
        <EditSquareIcon weight="20px" height="20px"/>
        <slot></slot>
    </button>
</template>

<script>
import EditSquareIcon from '../components/icons/IconEditSquare.vue'

export default {
    components: {
        EditSquareIcon
    }
}
</script>

<style>
.orange-confirm-button{
    background-color: rgba(232 57 0 / 10%); /* #1B5E20 */
    color: var(--orange-color);
    font-family: Lato;
}
.orange-confirm-button:hover{
    background-color: var(--light-grey-color);
    color: grey;
}
.orange-confirm-button span{
    color: var(--orange-color);
}
.orange-confirm-button:hover span{
    color: grey;
}
</style>