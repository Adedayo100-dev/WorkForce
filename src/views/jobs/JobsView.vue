<script>
  import SubNavTab from '../../components/SubNavTab.vue'
  export default {
    components: {
      SubNavTab
    },
    // props: ['totalPay'],
    data() {
      return {
        totalPay: 17832.71,
      }
    },
  }
</script>

<template>
    <div class="jobs">
      <h3><span>{{$route.meta.title}}</span> <span class="title_total-pay">CAD {{$formatNum(totalPay)}}</span></h3>
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
.title_total-pay{
  float: right;
  color: var(--primary-black);
}
</style>
