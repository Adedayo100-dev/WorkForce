<template>
    <div class="tab-pane" id="tab-all">
        <div class="add-shift_button-box justify-end">
                <FilterButton/>
                <AddButton @click="openModal('NewEmployer')">
                    <span>  Add Employer</span>
                </AddButton>
            </div>
        <h4>Employers</h4>
        <table>
            <thead>
                <tr>
                    <td>Employer Agency</td>
                    <td>Contacted</td>
                    <td>Registered</td>
                    <td>Employed</td>
                    <td>Pay($)</td>
                    <td>Time</td>
                </tr>
            </thead>
            <tbody>
                <!-- Each Courses Data -->
                <tr v-for="employer in employers"  :key="employer.id">
                    <td>{{employer.name}}</td>
                    <td><input type="checkbox" name="" id="" :checked="[employer.contacted? 'true' : 'false']"></td>
                    <td><input type="checkbox" name="" id="" checked="false"></td>
                    <td><input type="checkbox" name="" id="" :checked="[employer.employed? 'true' : 'false']"></td>
                    <td>
                        <span v-for="item in employer.pay" :key="item.id">{{ item }} | </span>
                        <!-- 18.60 | 20.10 -->
                    </td>
                    <td>
                        <div class="shift-time" v-for="item in employer.time" :key="item.id">
                            <span>{{ item.startTime }} - {{ item.stopTime }}</span>
                        </div>

                        <!-- <span class="underlined">10:00am-6:30pm</span> <br> 
                        <span>2:00pm - 10:30pm</span> -->
                    </td>
                </tr>
                <!-- <tr>
                    <td>UPS Burlington</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td>18.60 | 20.10</td>
                    <td><span class="underlined">10:00am-6:30pm</span> <br> 2:00pm - 10:30pm</td>
                </tr>
                <tr>
                    <td>ABL Employment</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td>17.5</td>
                    <td></td>
                </tr>
                <tr class="">
                    <td>AppleOne</td>
                    <td><input type="checkbox" name="" id="" checked> Email</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td>17.75</td>
                    <td><span class="underlined">7:15am - 4:15pm</span> <br> 4:15pm - 1:15am</td>
                </tr>
                <tr class="cancelled">
                    <td>AnyHere</td>
                    <td><input type="checkbox" name="" id="" checked> App</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td>17.44</td>
                    <td>3:20pm - 11:50pm</td>
                </tr>
                <tr>
                    <td>Express Employment</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id=""></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="">
                    <td>BrickLayer</td>
                    <td><input type="checkbox" name="" id="" checked> Email</td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="success">
                    <td>is2</td>
                    <td><input type="checkbox" name="" id="" checked> Email</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td>19</td>
                    <td><span class="underlined">3:30pm - 12:30am</span> <br> 5:00pm - 5:00am</td>
                </tr>
                <tr>
                    <td>Bell Network Technician</td>
                    <td><input type="checkbox" name="" id="" checked> Email & Phone</td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td>17.68</td>
                    <td><span class="underlined">7:00pm - 7:00am</span> <br> 7:00am - 7:00pm</td>
                </tr>
                <tr>
                    <td>Remote Tech Jobs</td>
                    <td><input type="checkbox" name="" id="" checked> Email & Phone</td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td>17.68</td>
                    <td><span class="underlined">7:00pm - 7:00am</span> <br> 7:00am - 7:00pm</td>
                </tr>
                <tr>
                    <td>Kelly</td>
                    <td><input type="checkbox" name="" id="" checked> Email & Phone</td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td>17.68</td>
                    <td><span class="underlined">7:00pm - 7:00am</span> <br> 7:00am - 7:00pm</td>
                </tr>
                
                <tr class="success">
                    <td>24hr Employment <MessageDangerIcon/></td>
                    <td><input type="checkbox" name="" id="" checked> Appointment</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td>183.25 | 170 | 163.5</td>
                    <td><span class="underlined">7:00pm-7:00am</span> <br> 6:00pm - 6:00am</td>
                </tr>
                <tr class="greyed">
                    <td>Vertical SR(Upseat)</td>
                    <td><input type="checkbox" name="" id="" checked> Mail</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td>15 | 18</td>
                    <td>8:00am - 5:00pm</td>
                </tr>
                <tr class="greyed">
                    <td>GigHound</td>
                    <td><input type="checkbox" name="" id="" checked> App</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td>17</td>
                    <td>varies</td>
                </tr>
                <tr class="">
                    <td>Coop</td>
                    <td><input type="checkbox" name="" id=""></td>
                    <td><input type="checkbox" name="" id=""></td>
                    <td><input type="checkbox" name="" id=""></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="">
                    <td>PSW</td>
                    <td><input type="checkbox" name="" id=""></td>
                    <td><input type="checkbox" name="" id=""></td>
                    <td><input type="checkbox" name="" id=""></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="">
                    <td>Amazon.force.com</td>
                    <td><input type="checkbox" name="" id="" > Web</td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td>18.02</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Purolator</td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td>20</td>
                    <td></td>
                </tr>
                <tr class="">
                    <td>Prodigy Personnel Ltd</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="greyed">
                    <td>Service MasterClean</td>
                    <td><input type="checkbox" name="" id="" checked> Transfered</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><span>17.5</span></td>
                    <td><span class="underlined">11:00pm-7:30am</span> <br> 7:00am - 3:30pm</td>
                </tr>
                <tr class="success">
                    <td>Linxus Group</td>
                    <td><input type="checkbox" name="" id="" checked> Indeed</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><span class="underlined">16.50</span> <br> 16</td>
                    <td><span class="underlined">11:00pm-7:30am</span> <br> 7:00am - 3:30pm</td>
                </tr>
                <tr class="greyed">
                    <td>White Crescent Agency</td>
                    <td><input type="checkbox" name="" id="" checked> Whatsapp</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td>102</td>
                    <td>4pm - 12:30am</td>
                </tr>
                <tr class="greyed">
                    <td>The Blitz Team</td>
                    <td><input type="checkbox" name="" id="" checked> Whatsapp</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td>15</td>
                    <td>3pm - 11pm</td>
                </tr>
                <tr class="greyed">
                    <td>StaffPlus</td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td><input type="checkbox" name="" id="" checked></td>
                    <td>16.95</td>
                    <td>4pm - 12pm</td>
                </tr>
                <tr class="">
                    <td>School Jobs</td>
                    <td><input type="checkbox" name="" id="" checked>Website</td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Randstad</td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td><input type="checkbox" name="" id="" ></td>
                    <td></td>
                    <td></td>
                </tr>
                
                <tr class="">
                    <td></td>
                    <td><input type="checkbox" name="" id=""></td>
                    <td><input type="checkbox" name="" id=""></td>
                    <td><input type="checkbox" name="" id=""></td>
                    <td></td>
                    <td></td>
                </tr> -->
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import MessageDangerIcon from '../../components/icons/IconMessageDanger.vue'
import FilterButton from '../../components/FilterButton.vue'
import AddButton from '../../components/AddButton.vue'

export default {
    name: 'Employers',
    components: {
        MessageDangerIcon, FilterButton, AddButton
    },
    data() {
        return {
            employers: [],
        }
    },
    created() {
        axios.get('http://localhost:3000/api/employers')
        .then((res) => {
            this.employers = res.data;
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err.message)
        });
    
    },
    methods: {
        openModal(modalType) {
            this.$store.commit('openModal', modalType);
            // console.log(modalType, 'Modal-Opened');
        }
    },
}
</script>

<style scoped>
    .shift-time span{
        border-bottom: 1px dashed black;
    }
    .shift-time:last-of-type span{
        border-bottom: none;
    }
</style>