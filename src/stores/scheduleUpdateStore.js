import { defineStore } from 'pinia';

export const useScheduleUpdateStore = defineStore('scheduleUpdate', {
    state: () => ({
        user: {
            name:'' //Username
        }
    }),
    actions: {
        submitUpdateData(){
            console.log("reaching store")
        }
    }

    // getters
})