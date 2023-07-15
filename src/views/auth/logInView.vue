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

</style>