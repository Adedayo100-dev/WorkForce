<template>
    <button class="add-shift_button green-confirm-button">
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

</style>