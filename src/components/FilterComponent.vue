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
                <form @submit.prevent="useFilter" >   
                    <div>
                        <div class="filter-subsection_title">
                            <!-- &#8645;  -->
                            <SortIcon height="17px"/>
                            <span>Sort by :</span>
                        </div>

                        <div class="filter_input-group">
                            <select v-model="queryInput.category" name="category">
                                <option value="All">All</option>
                                <option value="Tags">Tags</option>
                                <option value="Company">Company</option>
                                <option value="Location">Location</option>
                            </select>
                            <div class="select-box">
                                <div class="vertical-divider"></div>
                                <input type="search" v-model="queryInput.keyword" name="keyword" placeholder="Search">
                            </div>
                            <!-- <option value="minova">Minova</option>
                                    <option value="amazon">Amazon</option>
                                    <option value="lcbo">LCBO</option>
                                    <option value="pro-bell">PRO-BELL</option>
                                    <option value="mondelez">Mondelez</option>
                                    <option value="ferrero">Ferrero</option>
                                    <option value="aspire">Aspire</option>
                                    <option value="upseat">Upseat</option> -->
                        </div>
                    </div>
                    <div>
                        <div class="filter-subsection_title">
                            <AZIcon height="17px"/>
                            <span>Order by :</span>
                        </div>
                        <DropDown v-model="queryInput.orderBy" name="orderBy">
                            <option value="newestToOldest">Newest - Oldest</option>
                            <option value="oldestToNewest">Oldest - Newest</option> 
                        </DropDown>
                        
                    </div>
                    <div>
                        <div class="filter-subsection_title">
                            <CheckListIcon height="17px"/>
                            <span>Type :</span>
                        </div>
                        
                        <div class="type-list-container">
                            <div>
                                <input type="checkbox" v-model="queryInput.type" name="type" value="Full-Time" id="fullTime"> <label for="fullTime">Full-Time</label>
                            </div>
                            <div>
                                <input type="checkbox" v-model="queryInput.type" name="type" value="Part-Time" id="partTime"> <label for="partTime">Part-Time</label>
                            </div>
                            <div>
                                <input type="checkbox" v-model="queryInput.type" name="type" value="SIN" id="sinJob"> <label for="sinJob">SIN</label>
                            </div>
                            <div>
                                <input type="checkbox" v-model="queryInput.type" name="type" value="Cash" id="cashJob"> <label for="cashJob">Cash</label>
                            </div>
                            <div>
                                <input type="checkbox" v-model="queryInput.type" name="type" value="Co-op" id="coopJob"> <label for="coopJob">Co-op</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="filter-subsection_title">
                            <DateRangeIcon height="17px"/>
                            <span>Date Range:</span>
                        </div>
                        <div class="dates-range_box">
                            <input type="date" v-model="queryInput.dateFrom" name="dateFrom" class="date-from">
                            <input type="date" v-model="queryInput.dateTo" name="dateTo" class="date-to">
                        </div>
                    </div>
                    <div>
                        <div class="filter-subsection_title">
                            <input type="checkbox" v-model="queryInput.useLength" name="useLength" class="use-length_checkbox" ref="uselength">
                            <span>Show:</span>
                            <div class="">
                                <input type="number" v-model="queryInput.length" name="length" class="entries_input" :disabled="useLengthStatus">&nbsp;&nbsp; <!-- Toggle disabled-->
                                <small> entries</small>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="entries_input_container">
                        <input type="checkbox" name="useLength" class="use-length_checkbox" ref="uselength">
                        <small>Show </small>
                        <input type="number" name="length" class="entries_input" value="99" :disabled="useLengthStatus">
                        <small> entries</small>
                    </div> -->
                
                    <div class="confirm-button-container">
                        <FormSubmit>
                            <template  #button_name>Save</template>
                        </FormSubmit>
                    </div>
                </form>
                <div class="work-log-flank-right">
                    
                </div>
                
            </div>
        </div>
        
        <div class="form-action">
            <div class="confirm-button-container">
                <FormSubmit>
                    <template  #button_name>Sve</template>
                </FormSubmit>
            </div>
        </div>
    </div>
</template>

<script>
import DropDown from '../components/DropDown.vue'
import FormSubmit from '../components/FormSubmit.vue'
import ArrowLeftIcon from '../components/icons/IconArrowLeft.vue'
import AZIcon from '../components/icons/IconAZ.vue'
import SortIcon from '../components/icons/IconSort.vue'
import CheckListIcon from '../components/icons/IconCheckList.vue'
import { mapState } from 'pinia'
import { useRouteStore } from '@/stores/routeStore'
import { useModalStore } from '@/stores/modalStore'


export default {
    components: {
        DropDown, FormSubmit, ArrowLeftIcon, SortIcon, AZIcon, CheckListIcon
    },
    data() {
        return {
            queryInput: {
                category: "All",
                keyword: "",
                type: [],
                dateFrom: "",
                dateTo: "",
                length: 99,
                useLength: false,
                orderBy: "newestToOldest"
            }
        }
    },
    computed: {
        ...mapState( useRouteStore, {
            currentPath: store => store.route.currentPath, // 'finance/worklog', 'finance/employers'
        })
    },
    methods: {
        closeModal: function(event) {
            useModalStore().closeModal()
            console.log(event, this.modalType);
        },
        useFilter: function(){
            this.$router.push(
                { 
                    path: '/finance/employers', 
                    query: this.queryInput,
                }
            )
            // console.log(this.$route);

        }
        // http://localhost:5173/finance/employers?category=all&keyword=&orderBy=newestToOldest&dateFrom=&dateTo=&length=99
    },
    created() {
    },
}
</script>

<style scoped>
.new-filter{
    position: relative;
    height: 100%;
    max-width: 271px;
}
.left-arrow{
    /* position: absolute; */
    margin-left: -8.45px;
    /* top: calc((100% - 24px) / 2); */
    /* margin-top: -10PX; */
    border-radius: 50%;
    /* background-color: rgb(245 245 245); */
    width: 24px;
    height: 24px;
    fill: darkgray;
}
.left-arrow:hover{
    background-color: rgb(245 245 245);
    fill: #202124;

}
.filter-title{
    margin: 0 0 0 8px;
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
    /* width: fit-content; */
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
.type-list-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4px;
}
.type-list-container label{
    word-break: keep-all;
}
.dates-range_box{
    display: flex;
    justify-content: space-between;
    gap: 4px;
}
.date-from, .date-to{
    border: 1px solid rgb(235, 235, 235);
    background-color: rgb(238 238 238 / 50%);
    padding: 8px 10px;
    border-radius: 4px;
}
.entries_input_container{
    /* display: inline-flex; */
    /* align-items: center;
    gap: 4px; */
    margin: 2em 0 1em;
}
.entries_input{
    width: 40px;
    border-radius: 2px;
    border: 1px solid rgb(235, 235, 235);
    outline: none;
    background-color: rgb(238 238 238 / 50%);
    text-align: right;
}
.filter-subsection_title{
    display: flex;
    gap: 10px;
    margin: 2em 0 1em;
}
.use-length_checkbox{
    margin: 0;
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