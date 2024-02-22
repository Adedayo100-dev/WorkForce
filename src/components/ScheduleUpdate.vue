<template>
  <form action="">
        <input type="text" v-model="testing"> <br>
        <span>Action: &nbsp;</span>
        <select name="" id="" v-model="updateValues.status">
            <option value="Completed">Complete</option>
            <option value="Cancelled">Cancel</option>
            <option value="Early">Early</option>
            <option value="Redo">Redo</option>
        </select>
    </form>
</template>

<script>
import { useScheduleUpdateStore } from '../stores/scheduleUpdateStore';

export default {
    name: 'ScheduleUpdate',
    data() {
        return {
            updateValues: {
                status: 'Completed'
            },
            testing: 'hey'
        }
    },
    methods: {
        action() {
            console.log('reaching child');

            axios.put(`http://localhost:3000/api/schedule/${id}`, {data: 'here'})
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err.message);
            });
        }
    },
    created() {
        // this.$emit(updateValues);
    },
}
</script>

<style>

</style>