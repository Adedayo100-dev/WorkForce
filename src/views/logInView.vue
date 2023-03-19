<template>
    <h1>Login</h1>
    <div>
        <button @click="activateLogin()">Google</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'log-in',
    methods: {
        activateLogin(){
            axios.get('http://localhost:3000/auth/google')
                .then((res) => {
                    // this.transactions = res.data;
                    console.log(res.data);
                    console.log("Activating Google Authentication was successful!");
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    },
    
}
</script>

<style>

</style>