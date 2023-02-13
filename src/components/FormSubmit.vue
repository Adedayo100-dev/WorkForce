<template>
    <div class="button-group border-rad-4">
        <div class="buttons-binder-static">
            <div class="buttons-binder-dynamic" :class="{'transform-up' : switchButtonState }">
                <button @click="closeModal('close', 'Modal cancelled')" class="dynamic-button">Cancel</button>
                <input type="reset" value="Reset"  class="dynamic-button">
            </div>
        </div>
        <div class="button-group-icon" @click="switchButton()"><UnfoldMoreIcon/></div>
    </div>
    <button class="green-confirm-button border-rad-4">
        Add
    </button>
</template>

<script>
import UnfoldMoreIcon from '../components/icons/IconUnfoldMore.vue'

    export default {
        name: 'FormSubmit',
        components: {
            UnfoldMoreIcon,
        },
        data() {
            return {
                switchButtonState: false,
            }
        },
        methods: {
            closeModal: function(event) {
                this.$store.commit('closeModal')
                console.log(event, this.modalType);
            },
            switchButton: function(){
                this.switchButtonState = !this.switchButtonState;
            }
        },
    }
</script>
<style>
.button-group{
    display: flex;
    flex-direction: row;
    background-color: rgb(240,240,240);
}
.buttons-binder-static{
    overflow-y: hidden;
    height: 35px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.buttons-binder-dynamic{
    display: flex;
    flex-direction: column;
    transition-duration: 0.35s;
}
.transform-up{
    transform: translateY(-35px);
}
.dynamic-button{
    padding-right: 12px !important;
    padding-left: 12px !important;
}
.button-group-icon{
    /* background-color: grey; */
    border-left: 1px solid rgba(128,128,128,0.5);
    padding: 4px 4.6px 4px 4.6px;
    display: flex;
    align-items: center;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
</style>