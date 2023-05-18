<template>
    <div class="work-log-filter-box">
        <div class="entries_input_container">
            <input type="checkbox" name="" id="">
            <small>Show </small>
            <input type="number" class="entries_input" value="99" > <!-- Toggle disabled-->
            <small> entries</small>
        </div>

        <form action="/finance/worklog/search" class="filter_input-group">
            <input type="search" placeholder="Search">
            <div class="select-box">
                <div class="vertical-divider"></div>
                <select name="browser">
                    <option value="all">All</option>
                    <option value="minova">Minova</option>
                    <option value="amazon">Amazon</option>
                    <option value="lcbo">LCBO</option>
                    <option value="pro-bell">PRO-BELL</option>
                    <option value="mondelez">Mondelez</option>
                    <option value="ferrero">Ferrero</option>
                    <option value="aspire">Aspire</option>
                    <option value="upseat">Upseat</option>
                </select>
            </div>
            
        </form>
        <div class="work-log-flank-right">
            <router-link to="#totalShifts">&#8645;</router-link>
            <UnseeIcon />
        </div>
    </div>
</template>

<script>
import UnseeIcon from '../components/icons/IconUnview.vue'
export default {
    components: {
        UnseeIcon
    }
}
</script>

<style scoped>
.work-log-filter-box{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 12px 0px;
    justify-content: space-between;
}
.filter_input-group{
    border: 1px solid rgb(235, 235, 235);
    border-radius: 0.25rem;
    width: fit-content;
    overflow: hidden;
}
.filter_input-group input, .filter_input-group select{
    border: none;
    outline: none;
    font-size: 12px;
}
.filter_input-group input{
    padding: 8px 10px;
    /* border-right: none; */
}
.filter_input-group select{
    padding: 7px 10px;
}
.entries_input_container{
    display: inline-flex;
    align-items: center;
    gap: 4px;
}
.entries_input{
    background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .75rem center;
    background-size: 8px 10px;
    width: 40px;
    border-radius: 2px;
    border: 1px solid rgb(235, 235, 235);
    outline: none;
}
.filter_input-group:focus-within, .entries_input:focus-within{
    border-color: rgb(255, 160, 128);
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(255, 42, 0, 0.25);
}
.select-box{
    position: relative;
    display: inline-block;
}
.vertical-divider{
    border-left: 1px solid #ebebeb;
    position: absolute;
    top: 8px;
    bottom: 8px;
    z-index: 3;
}

.work-log-flank-right{
    display: flex;
    justify-content: end;
    padding: 0px 10px;
    cursor: pointer;
    /* border: 1px dashed rgb(235, 235, 235); */
}
.work-log-flank-right:hover{
    background-color: rgba(32,33,36,0.049);
    border-radius: 4px;
}
</style>