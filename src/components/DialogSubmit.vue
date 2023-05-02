<template>
    <div class="dialog-submit">
        <button @click="closeModal('close', 'Modal cancelled')" class="border-rad-4">No</button>
        <button class="green-confirm-button border-rad-4">
            <router-link to="/signedout">Yes</router-link>
        </button>
    </div>
    
</template>

<script>
    export default {
        name: 'DialogSubmit',
        methods: {
            closeModal: function(event) {
                this.$store.commit('closeModal')
                console.log(event, this.modalType);
            },
        },
    }
</script>

<style scoped>
.dialog-submit{
    margin-top: 24px;
}
</style>