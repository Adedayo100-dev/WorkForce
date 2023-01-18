<script>
  import SubNavTab from '../../components/SubNavTab.vue'
  export default {
    components: {
      SubNavTab
    },
    // props: ['totalPay'],
    data() {
      return {
        totalPay: 13241.37,
      }
    },
  }
</script>

<template>
    <div class="jobs">
      <h3><span>{{$route.meta.title}}</span> <span class="title_total-pay">CAD {{totalPay}}</span></h3>
        <div id="tabs">
            <SubNavTab />
            <input type="text" list="browsers">
            <datalist id="browsers">
              <option value="Firefox"></option>
              <option value="IE"></option>
              <option value="Chrome"></option>
              <option value="Opera"></option>
              <option value="Safari"></option>
            </datalist>
            <select name="browser">
            <option value="all">All</option>
            <option value="sin">SIN</option>
            <option value="cash">Cash</option>
            <option value="breaks">Breaks</option>
            <option value="fav">Fav</option>
            <option value="availability">Availability</option>
            <option value="coop">Coop</option>
            </select>
            <div id="tab-contents">
              <router-view>

              </router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title_total-pay{
  float: right;
  color:black;
}
</style>
