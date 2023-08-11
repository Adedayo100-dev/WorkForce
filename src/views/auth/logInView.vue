<template>
    <h1>Login</h1>
    <div>
        <form action="" method="post">
            <input type="text">
            <input type="password" name="" id="">
            <input type="submit" value="Sumit">
        </form>
    </div>
    <div>
        <a :href="getGoogleUrl(from)" class="g-signin2">Google</a>
    </div>
    <div class="css-1vzjjgh">
        By clicking the sign up button above you agree to the <router-link to="/terms" title="Terms of use">Terms of use</router-link> and <router-link to="/privacy" title="Privacy Policy">Privacy Policy</router-link>
    </div>
</template>

<script>
import { getGoogleUrl } from '../../utils/getGoogleUrl';

export default {
    name: 'log-in',
    data() {
        return {
            from: '/',
        }
    },
    methods: {
        getGoogleUrl,
    }
    
}
</script>

<style>
.css-1vzjjgh, [data-css-1vzjjgh] {
    color: rgb(194, 194, 194);
    font-size: 10px;
    margin-top: 32px;
    margin-bottom: 20px;
    text-align: center;
    padding-right: 40px;
    padding-left: 40px;
}
.css-1vzjjgh > a, [data-css-1vzjjgh] > a {
    color: rgb(112, 112, 112);
    font-weight: 600;
}
.css-1vzjjgh > a:hover{
    color: #0690FA;
    text-decoration: none;
    background-color: transparent;
}
</style>