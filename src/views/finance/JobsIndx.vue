<template>
  <div class="jobs-indx">
    <div class="d-center">
        <p>Quick Links</p>
    </div>
    <div class="visual-link-box">
      <div class="visual-link">
        <div class="visual-link_text">
          <router-link to="/finance/worklog">Jobs Log</router-link>
        </div>
        <div class="visual-link_icons-group">
          <router-link to="/finance/worklog/tabular"><TableIcon/></router-link>
          <router-link to="/finance/worklog/graphical"><GraphIcon/></router-link>
        </div>
      </div>
      <div class="visual-link">
        <div class="visual-link_text">
          <router-link to="/finance/transactions">Transactions</router-link>
        </div>
        <div class="visual-link_icons-group">
          <router-link to="/finance/worklog/tabular"><TableIcon/></router-link>
          <router-link to="/finance/worklog/graphical"><GraphIcon/></router-link>
        </div>
      </div>
      <div class="visual-link">
        <div class="visual-link_text">
          <router-link to="/finance/worklog/">Work Log</router-link>
        </div>
        <div class="visual-link_icons-group">
          <router-link to="/finance/worklog/tabular"><TableIcon/></router-link>
          <router-link to="/finance/worklog/graphical"><GraphIcon/></router-link>
        </div>
      </div>
      <div class="visual-link">
        <div class="visual-link_text">
          <router-link to="/finance/worklog/">Work Log</router-link>
        </div>
        <div class="visual-link_icons-group">
          <router-link to="/finance/worklog/tabular"><TableIcon/></router-link>
          <router-link to="/finance/worklog/graphical"><GraphIcon/></router-link>
        </div>
      </div>
      <div class="visual-link">
        <div class="visual-link_text">
          <router-link to="/finance/worklog/">Work Log</router-link>
        </div>
        <div class="visual-link_icons-group">
          <router-link to="/finance/worklog/tabular"><TableIcon/></router-link>
          <router-link to="/finance/worklog/graphical"><GraphIcon/></router-link>
        </div>
      </div>
      <div class="visual-link">
        <div class="visual-link_text">
          <router-link to="/finance/worklog/">Work Log</router-link>
        </div>
        <div class="visual-link_icons-group">
          <router-link to="/finance/worklog/tabular"><TableIcon/></router-link>
          <router-link to="/finance/worklog/graphical"><GraphIcon/></router-link>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import TableIcon from '../../components/icons/IconTable.vue'
import GraphIcon from '../../components/icons/IconGraph.vue'

export default {
  components: {
    TableIcon, GraphIcon
  }
}
</script>

<style scoped>
.visual-link-box{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin: 24px 0;
}
.visual-link{
  padding: 10px;
  border-radius: .28571429rem;
  /* box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5; */
}
.visual-link:nth-of-type(1){
  background-color: rgb(200, 233, 255); /* BLue */
}
.visual-link:nth-of-type(2){
  background-color: rgb(255, 200, 200); /* Red */
}
.visual-link:nth-of-type(3){
  background-color: rgb(255, 200, 255); /* Blue & Red: Purple */
}
.visual-link:nth-of-type(4){
  background-color: rgb(200, 255, 200); /* Green */
}
.visual-link:nth-of-type(5){
  background-color: rgb(200, 255, 255); /* Green & Blue: Teal */
}
.visual-link:nth-of-type(6){
  background-color: rgb(255, 255, 200); /* Red & Green:  Yellow */
}
.visual-link a{
  color: var(--primary-black);
}
.visual-link_text{
  margin-bottom: 5px;
}
.visual-link_icons-group{
  display: flex;
  gap: 6px;
  padding-top: 6px;
}
</style>