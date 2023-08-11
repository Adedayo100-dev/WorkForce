<template>
    <div class="top-nav">
        <div class="title-box">
            <WorkForceIcon />
            <span class="title">Ice - Finance</span>
        </div>
        <div class="logo">
        </div>
        <!-- div was here -->
    </div>
</template>

<script>
import WorkForceIcon from '../components/icons/IconWorkForce.vue'


export default {
    components: {
        WorkForceIcon
    },
    data() {
        return {

        }
    }
}
</script>

<style>
.top-nav{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* flex-direction: row;
    justify-content: space-between; */
    position: sticky;
    top: 0;
    background-color: rgb(245, 246, 247);
    border-bottom: 1px solid  #d1d1d1; /*rgb(235, 235, 235)*/
    padding: 5px 24px 5px 18px;
    color: grey;
    font-size: 12px;
    z-index: 10;
}
.top-nav div.title-box{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
}
.top-nav span.title{
    color:  #5F6368;
    /* margin-right: 10px; */
}
.top-nav .logo{
    display: flex;
    justify-content: center;
}
.top-nav .logo img{
    height: 19px;
}
.top-nav nav{
    position: sticky;
    top: 0;
    z-index: 100;
}
.top-nav nav ul{
    padding: 0;
    margin: 0 5px;
    display: flex;
}
.top-nav nav li{
    list-style-type: none;
    margin: 0 10px;
}
.top-nav nav a{
    /* font-size: 14px; */
    color: grey;
    display: flex;
    position: relative;
}
.top-nav nav a.router-link-active::after {
    content: "";
    background-color: #018786;
    position: absolute;
    bottom: -5px;
    height: 2px;
    left: -5px;
    right: -5px;
}

</style>