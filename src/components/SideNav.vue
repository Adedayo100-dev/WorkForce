<template>
    <div class="side-nav">
        <ul>
            <li>
                <RouterLink to="/adedayo/tasks">
                    <div>
                        <TaskIcon class="side-nav-links-icons" />
                        <span v-show="navTogVal"> Tasks</span>
                    </div>
                </RouterLink>
            </li>
            <li class="show">
                <RouterLink to="/adedayo/finances">
                    <div>
                        <WorkIcon class="side-nav-links-icons" />
                        <span v-show="navTogVal"> Jobs</span>
                    </div>
                    <div class="caret-d-container" v-show="navTogVal">
                        <CaretUpIcon />
                    </div>
                </RouterLink>
                <ul id="" class="sidenav-dropdown"  ><!-- v-show="navTogVal" -->
                    <li>
                        <router-link to="/adedayo/finances/worklog">Jobs Log</router-link>
                    </li>
                    <li>
                        <router-link to="/adedayo/finances/employers">Employers</router-link>
                    </li>
                    <li>
                        <router-link to="/adedayo/finances/breakjobs">Breaks</router-link>
                    </li>
                    <li>
                        <router-link to="/adedayo/finances/favjobs">Favorite</router-link>
                    </li>
                    <li>
                        <router-link to="/adedayo/finances/my-schedule">Schedule</router-link>
                    </li>
                    <li>
                        <router-link to="/adedayo/finances/co-op">Co-op</router-link>
                    </li>
                    <li>
                        <router-link to="/adedayo/finances/transactions">Transactions</router-link>
                    </li>
                    <li>
                        <router-link to="/adedayo/finances/taxes">Taxes</router-link>
                    </li>
                    
                </ul>
            </li>
            <!-- <li>
                <RouterLink to="/assignments">Assignments</RouterLink>
            </li> -->
            <li>
                <RouterLink to="/adedayo/schedule">
                    <div>
                        <DateRangeIcon  class="side-nav-links-icons"/>
                        <span v-show="navTogVal"> Schedule</span>
                    </div>
                </RouterLink>
            </li>
            
        </ul>
        <!-- <div>
            <div class="float-bottom">
                <RouterLink to="/user-profile">
                    <div class="tiny_profile-pic">
                        <SettingsIcon />
                        <span v-show="navTogVal"> Settings</span>
                        <div class="on-side"></div>
                    </div>
                    <div class="tiny_profile-name">
                        <span>Settings</span>
                    </div>
                </RouterLink>
            </div>
        </div> -->
    </div>
</template>

<script>
import TaskIcon from '../components/icons/IconTask.vue'
import WorkIcon from '../components/icons/IconCoin.vue'
import DateRangeIcon from '../components/icons/IconDateRange.vue'
import CaretUpIcon from '../components/icons/IconCaretUp.vue'
import CaretDownIcon from '../components/icons/IconCaretDown.vue'
import SettingsIcon from '../components/icons/IconSettings.vue'

export default {
    components: {
        TaskIcon, WorkIcon, DateRangeIcon, CaretUpIcon, CaretDownIcon, SettingsIcon
    },
    data() {
        return {
            navTogVal: false,
        }
    }
}
</script>

<style scoped>
    .side-nav{
        background-color: white;/* #004D40, #f7f7f7, rgb(244,244,244)*/
        position: fixed;
        /* top: 0; */
        left: 0;
        height: -webkit-fill-available;
        padding: 0;
        border-right:  1px solid var(--line-color);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 50;
    }
    .side-nav ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .side-nav ul li{
        padding: 0px 0px 0px 0px;
        position: relative;
    }
    
    .side-nav ul li a{
        font-size: 12px;
        color: #262626;
        padding: 9px 12px;
        /* border-radius: 4px; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .side-nav ul li a:hover {
        background-color: rgb(247, 247, 247);
    }
    .side-nav ul li a.router-link-active{
        background-color: rgb(167 167 167 / 10%); /*rgba(3, 137, 255, 0.1) rgba(232 57 0 / 10%) */
    }
    .side-nav ul li a.router-link-active .side-nav-links-icons{
        fill: rgba(232, 57, 0, 1);
    }
    .side-nav-links-icons{
        height: 20px;
    }
    .side-nav ul li a div{
        display: inline-flex;
        gap: 12px;
    }
    .side-nav svg{
        fill: grey;
    }
    .sidenav-dropdown{
        display: none;
        /* New Code */
        /* position: absolute; */
        /* left: var(--side-nav-width); */
        /* border: 1px solid #d1d1d1; */
        border-left: none;
        background: white;
        /* top: 0; */
        /* border-top-right-radius: 4px;
        border-bottom-right-radius: 4px; */
        z-index: 50;
    }
    .side-nav ul li:hover .sidenav-dropdown{
        display: block;
    }
    /* li.show .sidenav-dropdown{
        display: block;
        
    } */
    .sidenav-dropdown li a{
        padding: 9px 24px !important;
        color: grey !important;
    }
    .float-bottom{
        padding: 12px 10px;
    }
    .float-bottom a{
        display: block;
    }
    /* .float-bottom a:hover>div{
        background-color: rgba(218,220,224,.5);
    } */
    .tiny_profile-pic{
        display: flex;
        justify-content: center;
        position: relative;
        /* padding: 6px 4px; */
        border-radius: 50%;
    }
    .on-side{
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
        border-radius: 50%;
        border: none;
        width: 28px;
        height: 28px;
        position: absolute;
        top: 0;
    }
    .tiny_profile-name{
        font-size: 10px;
        text-align: center;
        margin-top: 8px;
    }
    .tiny_profile-name span{
        display: block;
    }
</style>