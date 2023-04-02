<template>
    <h1>Login</h1>
    <div>
        <a href="http://localhost:3000/auth/google">Google</a>
        <!-- <button @click="activateLogin()">Google</button> -->
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'log-in',
    methods: {
        // activateLogin(){
        //     console.log("Request was put through");

        //     axios.get('http://localhost:3000/auth/google')
        //         .then((res) => {
        //             console.log("Activating Google Authentication was successful!");
        //             console.log(res.data);
        //         })
        //         .catch((err) => {
        //             console.log("Axios unsuccessful!");
        //             console.log(err);
        //         });
        // }
    },
    
}
</script>

<style>

</style>