<template>
    <button class="filter_button">
        <FilterIcon /> Filter
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
.filter_button{
    /* border: 1px solid rgb(235, 235, 235); */
    /* color: #262626;
    background-color: transparent; */
    background-color: var(--light-primary-color);
    color: grey;
    display: inline-flex;
    gap: 8px;
}
.filter_button:hover{
    /* box-shadow: 0 1px 1px rgba(0,0,0,0.1); */
    transition: all 0.0s;
    -webkit-transition: all 0.0s;
    /* background-color: #f8f9fa; */
    /* background-image: -webkit-linear-gradient(top,#f8f9fa,#f8f9fa); */
    /* background-image: -webkit-gradient(linear,left top,left bottom,from(#f8f9fa),to(#f8f9fa)); */
    /* border: 1px solid #dadce0; */
    color: var(--primary-color);
}
</style>