<template>
    <button class="filter_button">
        Filter <FilterIcon />
    </button>
</template>

<script>
import FilterIcon from '../components/icons/IconFilter.vue'

export default {
    name: 'FilterButton',
    components: {
        FilterIcon,
    }
}
</script>

<style>

</style>