<template>
    <div class="side-nav">
        <ul>
            <li>
                <RouterLink to="/plans">
                    <div>
                        <TaskIcon />
                        <span v-show="navTogVal"> Plans</span>
                    </div>
                </RouterLink>
            </li>
            <li class="show">
                <RouterLink to="/finance">
                    <div>
                        <WorkIcon />
                        <span v-show="navTogVal"> Jobs</span>
                    </div>
                    <div class="caret-d-container" v-show="navTogVal">
                        <CaretUpIcon />
                    </div>
                </RouterLink>
                <ul id="" class="sidenav-dropdown"  v-show="navTogVal">
                    <li>
                        <router-link to="/finance/worklog">Work Log</router-link>
                    </li>
                    <li>
                        <router-link to="/finance/alljobs">All</router-link>
                    </li>
                    <li>
                        <router-link to="/finance/sinjobs">SIN</router-link>
                    </li>
                    <li>
                        <router-link to="/finance/cashjobs">Cash</router-link>
                    </li>
                    <li>
                        <router-link to="/finance/breakjobs">Breaks</router-link>
                    </li>
                    <li>
                        <router-link to="/finance/favjobs">Fav</router-link>
                    </li>
                    <li>
                        <router-link to="/finance/availability">Availability</router-link>
                    </li>
                    <li>
                        <router-link to="/finance/co-op">Co-op</router-link>
                    </li>
                    
                </ul>
            </li>
            <!-- <li>
                <RouterLink to="/assignments">Assignments</RouterLink>
            </li> -->
            <li>
                <RouterLink to="/notifications">
                    <div>
                        <BellIcon />
                        <span v-show="navTogVal"> Notifications</span>
                    </div>
                </RouterLink>
            </li>
            
        </ul>
        <div>
            <div class="float-bottom">
                <RouterLink to="/user-profile">
                    <div>
                        <!-- <SettingsIcon />
                        <span v-show="navTogVal"> Settings</span> -->
                        <img src="../assets/profile_default.png" alt="" class="profile-img">
                        <div class="on-side"></div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import TaskIcon from '../components/icons/IconTask.vue'
import WorkIcon from '../components/icons/IconWork.vue'
import BellIcon from '../components/icons/IconBell.vue'
import CaretUpIcon from '../components/icons/IconCaretUp.vue'
import CaretDownIcon from '../components/icons/IconCaretDown.vue'
import SettingsIcon from '../components/icons/IconSettings.vue'

export default {
    components: {
        TaskIcon, WorkIcon, BellIcon, CaretUpIcon, CaretDownIcon, SettingsIcon
    },
    data() {
        return {
            navTogVal: false,
        }
    }
}
</script>

<style>
    .side-nav{
        /*background-color: #004D40;#f7f7f7, rgb(244,244,244)*/
        position: fixed;
        /* top: 0; */
        left: 0;
        height: -webkit-fill-available;
        padding: 0;
        border-right:  1px solid #d1d1d1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .side-nav ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .side-nav ul li{
        padding: 0px 0px 0px 0px;
    }
    .side-nav ul li a{
        font-size: 14px;
        color: #262626;
        padding: 12px 12px;
        /* border-radius: 4px; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .side-nav ul li a:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    .side-nav ul li a.router-link-active{
        background-color: rgba(232, 57, 0, 1);
    }
    .side-nav ul li a.router-link-active .side-nav-links-icons{
        fill: white;
    }
    .side-nav-links-icons{
        height: 20px;
    }
    .side-nav ul li a div{
        display: inline-flex;
        gap: 12px;
    }
    .sidenav-dropdown{
        display: none;
    }
    li.show .sidenav-dropdown{
        display: block;
    }
    .sidenav-dropdown li a{
        padding: 12px 53px 12px 56px !important;
        color: grey !important;
    }
    .float-bottom{
        padding: 12px 10px;
    }
    .float-bottom a{
        display: block;
    }
    .float-bottom a:hover>div{
        background-color: rgba(218,220,224,.5);
    }
    .float-bottom>a>div{
        display: flex;
        justify-content: center;
        position: relative;
        /* padding: 6px 4px; */
        border-radius: 50%;
    }
    .profile-img{
        width: 28px;
        height: 28px;
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
</style>