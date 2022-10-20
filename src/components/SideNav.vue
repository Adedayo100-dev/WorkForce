<template>
    <div class="side-nav">
        <ul>
            <li>
                <RouterLink to="/plans">
                    <div>
                        <PlanningIcon />
                        <span> Plans</span>
                    </div>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/jobs">
                    <div>
                        <JobVacancyIcon />
                        <span> Jobs</span>
                    </div>
                    <div class="caret-d-container">
                        <CaretUpIcon />
                    </div>
                </RouterLink>
                <ul id="" class="sidenav-dropdown show">
                    <li>
                        <router-link to="/jobs/worklog">WorkLog</router-link>
                    </li>
                    <li>
                        <router-link to="/jobs/alljobs">All</router-link>
                    </li>
                    <li>
                        <router-link to="/jobs/sinjobs">SIN</router-link>
                    </li>
                    <li>
                        <router-link to="/jobs/cashjobs">Cash</router-link>
                    </li>
                    <li>
                        <router-link to="/jobs/breakjobs">Breaks</router-link>
                    </li>
                    <li>
                        <router-link to="/jobs/favjobs">Fav</router-link>
                    </li>
                    <li>
                        <router-link to="/jobs/availability">Availability</router-link>
                    </li>
                    <li>
                        <router-link to="/jobs/co-op">Co-op</router-link>
                    </li>
                    
                </ul>
            </li>
            <li>
                <RouterLink to="/assignments">Assignments</RouterLink>
            </li>
            <!-- <li>
                <RouterLink to="/worklog">
                    <div>
                        <JobVacancyIcon />
                        <span>Work Log</span>
                    </div>
                </RouterLink>
            </li> -->
            <li>
                <RouterLink to="/notifications">
                    <div>
                        <BellIcon />
                        <span> Notifications</span>
                    </div>
                </RouterLink>
            </li>
        </ul>

    </div>
</template>

<script>
import PlanningIcon from '../components/icons/IconPlanning.vue'
import JobVacancyIcon from '../components/icons/IconJobVacancy.vue'
import BellIcon from '../components/icons/IconBell.vue'
import CaretUpIcon from '../components/icons/IconCaretUp.vue'
import CaretDownIcon from '../components/icons/IconCaretDown.vue'

export default {
    components: {
        PlanningIcon, JobVacancyIcon, BellIcon, CaretUpIcon, CaretDownIcon
    }
}
</script>

<style>
    .side-nav{
        /*background-color: #004D40;#f7f7f7, rgb(244,244,244)*/
        position: fixed;
        /* top: 0; */
        left: 0;
        height: 100%;
        padding: 32px 0 0 0;
        border-right:  1px solid var(--border-color-primary);
    }
    .side-nav ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .side-nav ul li{
        padding: 0px 0px 0px 0px;
        margin-bottom: 8px;
    }
    .side-nav ul li a{
        font-size: 14px;
        color: #262626;
        padding: 12px 53px 12px 28px;
        /* border-radius: 4px; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .side-nav ul li a:hover {
        background-color: rgba(244, 244, 246, 0.5);
    }
    .side-nav ul li a.router-link-active{
        background-color: rgb(244, 244, 246);
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
    .sidenav-dropdown.show{
        display: block;
    }
    .sidenav-dropdown li a{
        padding: 12px 53px 12px 56px !important;
    }
</style>