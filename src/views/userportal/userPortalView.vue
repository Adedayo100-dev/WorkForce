<template>
    <div class="visible-layout">
        <TopNavBar />
        <div class="layout-chasis">
            <SideNav />
            <main>
                <!-- <p>
                {{ modalState }}
                </p> -->
                <RouterView />
            </main>
        </div>
    </div>
</template>

<script>
import SideNav from '../../components/SideNav.vue';
import TopNavBar from '../../components/TopNavBar.vue';
export default {
    components: {
        SideNav,
        TopNavBar,
    },
}
</script>

<style>

</style>