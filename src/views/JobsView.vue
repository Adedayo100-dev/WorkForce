<script>
  import SubNavTab from '../components/SubNavTab.vue'
  export default {
    components: {
      SubNavTab
    }
  }
</script>

<template>
    <div class="jobs">
      <h3>{{$route.meta.title}}</h3>
        <div id="tabs">
            <SubNavTab />
            <div id="tab-contents">
              <router-view>

              </router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>


</style>
