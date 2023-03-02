<template>

  <div class="plans">
    <h3>{{$route.meta.title}}</h3>
    <div id="tabs">
      <ul id="nav-tab" class="tab-nav">
        <li>
          <router-link to="/plans/allplans">All</router-link>
        </li>
        <li>
          <router-link to="/plans/shopping-list">Shopping List</router-link>
        </li>
        <li>
          <router-link to="/plans/taxfiling">T4</router-link>
        </li>
        <li>
          <router-link to="/plans/wish-list">Wish List</router-link>
        </li>
        <li>
          <router-link to="/plans/bought-items">Bought Items</router-link>
        </li>
      </ul>
      <div id="tab-contents">
        <router-view>

        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>