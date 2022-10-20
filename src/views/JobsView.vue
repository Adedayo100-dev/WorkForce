<script setup>

</script>

<template>

    <div class="jobs">
      <h3>{{$route.meta.title}}</h3>
        <div id="tabs">
            <ul id="nav-tab" class="tab-nav">
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
            <div id="tab-contents">
              <router-view>

              </router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>


</style>
