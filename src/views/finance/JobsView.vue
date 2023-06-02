<script>
  import SubNavTab from '../../components/SubNavTab.vue'
  export default {
    components: {
      SubNavTab
    },
    // props: ['totalPay'],
    data() {
      return {
        totalPay: 17851.79,
      }
    },
  }
</script>

<template>
    <div class="jobs">
      <h3><span>{{$route.meta.title}}</span> <span class="title_total-pay">${{$formatNum(totalPay)}} <span class="small-currency">CAD</span></span></h3>
        <div id="tabs">
            <!-- <SubNavTab>
              <li>
                <router-link to="/finance/worklog">Shifts Log</router-link>
              </li>
              <li>
                <router-link to="/finance/employers">Employers</router-link>
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
              <li>
                <router-link to="/finance/transactions">Transactions</router-link>
              </li>
            </SubNavTab> -->
            <div id="sub-router_contents">
              <router-view>

              </router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title_total-pay{
  float: right;
  color: var(--primary-black);
}
.small-currency{
  font-size: 14px;
  font-weight: 300;
  color: #757575;
}
</style>
