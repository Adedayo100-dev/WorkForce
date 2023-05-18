<template>
  <ul id="nav-tab" class="tab-nav">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  
}
</script>

<style >
/* Tabs */

#tabs .tab-nav .active a { 
    color: slateblue; 
    border-bottom: 1px solid slateblue;
}
#tabs .tab-nav .active a:hover {
    border-color: transparent;
    background: slateblue;
    color: white;
}
#tabs ul.tab-nav{
    list-style-type: none;
    padding: 0;
    margin: 0.125em 0;
}
#tabs ul.tab-nav li{
    display: inline-flex;

}
#tabs ul.tab-nav li a {
    text-decoration: none;
    color: #5f6368;
    padding: 10px;
    transition: all .3s ease-in-out;
    font-size: 14px;
    /* position: relative; */
}
#tabs ul.tab-nav li:first-of-type a{
  /* padding-left: 0; */
}

#tabs ul.tab-nav li a.router-link-active::after{
    content: "";
    background-color: rgba(232, 57, 0, .2);/* #0a793b */
    position: absolute;
    bottom: -2px;
    height: 2px;
    left: 0px;
    right: 0px;
}
#tabs ul.tab-nav li a:hover {
    color: gray;
}
</style>