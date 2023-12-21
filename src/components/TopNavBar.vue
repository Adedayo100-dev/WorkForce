<template>
    <div class="top-nav">
        <div class="title-box">
            <WorkForceIcon />
            <span class="title">Ice - Finance</span>
        </div>
        <div class="logo">
        </div>
        <div class="auth-container">
            <!-- <span>Adedayo</span> -->
            <router-link to="/user-profile" class="user-name">
                <span>
                    Adedayo
                </span>
                <div class="caret-box">
                    <svg xmlns="http://www.w3.org/2000/svg" height="7.5" viewBox="0 -960 960 960" width="7.5" fill="#808080">
                        <path d="M480-240 0-720h960L480-240Z"></path>
                    </svg>
                </div>
            </router-link>
        </div>
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
    background-color: var(--light-grey-color-2);
    border-bottom: 1px solid  var(--line-color); /*rgb(235, 235, 235)*/
    padding: 8px 24px 8px 18px;
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
    font-weight: bold;
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
.auth-container{
    display: flex;
    justify-content: end;
    align-items: center;
}
.user-name{
    line-height: 1;
    color: inherit;
    display: flex;
    align-items: center;
}
.caret-box{
    display: flex;
    align-items: center;
}
</style>