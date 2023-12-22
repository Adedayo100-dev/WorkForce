<template>

  <div class="tasks">
    <h3>{{$route.meta.title}}</h3>
    <div id="tabs">
      <SubNavTab>
        <li>
          <router-link to="/adedayo/tasks/alltasks">All</router-link>
        </li>
        <li>
          <router-link to="/adedayo/tasks/shopping-list">Shopping</router-link>
        </li>
        <li>
          <router-link to="/adedayo/tasks/wish-list">Wish List</router-link>
        </li>
        <li>
          <router-link to="/adedayo/tasks/bought-items">Bought Items</router-link>
        </li>
        <li>
          <router-link to="/adedayo/tasks/vault">Vault</router-link>
        </li>
      </SubNavTab>
      <div id="tab-contents">
        <router-view>

        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SubNavTab from '../../../components/SubNavTab.vue';
export default {
  components: {
    SubNavTab
  }
}
</script>

<style>

</style>