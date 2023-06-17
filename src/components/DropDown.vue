<template>
    <div class="drop-down">
        <!-- <ul>
            <li>All</li>
            <li>Tags</li>  
            <li>Location</li>
            <li>Full-Time</li>
            <li>Part-Time</li>
        </ul> -->
        <select name="category">
            <option value="All">All</option>
            <option value="Tags">Tags</option> <!-- SIN, Cash -->
            <option value="Location">Location</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
        </select>

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
select[name=category]{
    width: calc(100% - 4px);
    background-color: rgb(238 238 238 / 50%);
    border: none;
    padding: 4px 0px 4px 4px;
    border-radius: 4px;
    outline: none;
    font-size: 12px;
 }
</style>