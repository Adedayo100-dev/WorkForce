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
                <RouterLink to="/jobs/alljobs">
                    <div>
                        <JobVacancyIcon />
                        <span> Jobs</span>
                    </div>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/assignments">Assignments</RouterLink>
            </li>
            <li>
                <RouterLink to="/worklog">
                    <div>
                        <JobVacancyIcon />
                        <span>Work Log</span>
                    </div>
                </RouterLink>
            </li>
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

export default {
    components: {
        PlanningIcon, JobVacancyIcon, BellIcon
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
        padding: 0px 16px 0px 16px;
        margin-bottom: 8px;
    }
    .side-nav ul li a{
        font-size: 14px;
        color: #262626;
        padding: 12px 36px 12px 12px;
        border-radius: 4px;
        display: block;
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
</style>