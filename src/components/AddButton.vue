<template>
    <button class="add-shift_button orange-confirm-button">
        <EditSquareIcon />
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
    background-color: var(--orange-color); /* #1B5E20 */
    color: white;
}
.orange-confirm-button:hover{
    background-color: var(--light-grey-color);
    color: grey;
}
.orange-confirm-button span{
    color: white;
}
.orange-confirm-button:hover span{
    color: grey;
}
</style>