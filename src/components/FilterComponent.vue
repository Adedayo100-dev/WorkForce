<template>
    <div class="new-filter">
        <div>
            <div class="d-flex position-relative">
                <ArrowLeftIcon class="left-arrow"  @click="closeModal('close', 'Modal cancelled')"/>
                <div class="d-center">
                    <h3 class="filter-title"> Filter</h3>
                </div>
            </div>
            <div class="filter-box">
                <div class="entries_input_container">
                    <input type="checkbox" name="" id="">
                    <small>Show </small>
                    <input type="number" class="entries_input" value="99" > <!-- Toggle disabled-->
                    <small> entries</small>
                </div><br><br>
                <div>
                    <span>&#8645; Sort by :</span>
                    <DropDown>
                    </DropDown>
                </div>
                <div>
                    <span>Order by :</span>
                    <ul>
                        <input type="radio" name="orderBy" id="newest" checked> <label for="">Newest</label>
                        <input type="radio" name="orderBy" id="oldest"> <label for="">Oldest</label>
                        <input type="radio" name="orderBy" id="dateRange"> <label for="dateRange">Date Range</label>
                        <input type="radio" name="orderBy" id=""> <label for=""></label>
                    </ul>
                    
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
                    
                </div>
                
            </div>
        </div>
        
        <div class="form-action">
            <div class="confirm-button-container">
                <FormSubmit>
                    <template  #button_name>Save</template>
                </FormSubmit>
            </div>
        </div>
    </div>
</template>

<script>
import DropDown from '../components/DropDown.vue'
import FormSubmit from '../components/FormSubmit.vue'
import ArrowLeftIcon from '../components/icons/IconArrowLeft.vue'

export default {
    components: {
        DropDown, FormSubmit, ArrowLeftIcon
    },
    methods: {
        closeModal: function(event) {
            this.$store.commit('closeModal')
            console.log(event, this.modalType);
        },
    }
}
</script>

<style scoped>
.new-filter{
    position: relative;
    height: 100%;
}
.left-arrow{
    position: absolute;
    left: -24px;
    top: calc((100% - 24px) / 2);
    margin-top: -10PX;
    border-radius: 50%;
    background-color: rgb(245 245 245);
    width: 24px;
    height: 24px;
    fill: darkgray;
}
.filter-title{
    margin-bottom: 0;
    line-height: .8;
}
.filter-box{
    /* display: grid; */
    /* grid-template-columns: repeat(4, 1fr); */
    padding: 24px 0px;
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
.confirm-button-container{
    justify-content: center !important;
}
.form-action{
    border-top: 1px solid rgb(235, 235, 235);
    padding: 12px 24px 0;
    position: absolute;
    width: 100%;
    bottom: -12px;
    left: -24px;
}
</style>