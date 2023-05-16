<template>
    <div class="profile-view">
        <div>
            <h3>{{$route.meta.title}}</h3>
        </div>
        <div class="profile-main">
            <div class="profile-pic_container">
                <img src="../assets/profile_img.jpg" alt="profile img" class="profile-image"> <!-- Image or logo -->
                <AddPhotoIcon />
            </div>
            <div class="one-liner">
                <span>Adedayo Taiwo</span>
            </div>
            <div class="one-liner">
                <span>adedayoemmanuelt@gmail.com</span>
            </div>
            <div class="one-liner">
                <span>Gender:</span> <span>Male(not show)</span>
            </div>
            <div class="one-liner">
                <span>Birthday:</span> <span>13th Nov, 2002(not show)</span>
            </div>
            <div class="one-liner">
                <span>ok: {{ profile.displayName }}</span>
            </div>
        </div>
        <div class="donate-view">
            <span class="donate-title">Donate to the cause:</span>
        </div>
        <div>
            <router-link to="/settings">Settings</router-link>
        </div>
    </div>
    
</template>

<script>
import AddPhotoIcon from '../components/icons/IconAddPhoto.vue'
import axios from 'axios'


export default {
    name: 'Profile',
    components: {
        AddPhotoIcon
    },
    data() {
        return {
            profile: {},
        }
    },
    async created() {

        // const accessToken = 'ya29.a0AWY7CkmGEjAedAC8u6Zos0jWBlfUh_hRsE_Wd9qj0SNIpOWqzmd0CEsVOrOBDSjA7-Saocd1B-6PZPWiTvceybbvpF6C2Fk1TIsDb350JW8f7Sin63CSQ8Q4b1pCedlxaUbU9qf9E0_nbi5XJiLuWEMZq9vKaCgYKARYSARASFQG1tDrp7so1DbvmcAxTwrQUAn1yEg0163';
        // let axiosConfig = {
        //     headers: {
        //         'Authorization': `Bearer ${accessToken}`,
        //         'Content-Type': 'application/json;charset=UTF-8',
        //         "Access-Control-Allow-Origin": "*",
        //     }
        // };

        axios.get('http://localhost:3000/profile')
            .then((res) => {
                    this.profile = res.data;
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err)
                });

        // axios.get('http://localhost:3000/profile')
        //     .then((res) => {
        //         this.profile = res.data;
        //         console.log(res.data);
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     });

        // Simple GET request using fetch
        // fetch("http://localhost:3000/profile")
        // .then(response => {
        //     console.log(response)
        //     return response;     
        // })
        // .then(data => {
        //     this.profile = data;
        // })
        // .catch(error => {
        //     console.log(error);
        // });

        // try {
        //     const response = await fetch("http://localhost:3000/profile");
        //     var a = response;
        //     console.log(a);
        // } catch (error) {
        //     throw error;
        // }
    },
    mounted() {
        gapi.load('auth2', () => {
            gapi.auth2.init({
                client_id: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID,
                scope: 'openid profile email',
                discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/oauth2/v2/rest'],
                responseType: 'token id_token',
            }).then(() => {
                const currentUser = gapi.auth2.getAuthInstance().currentUser.get();
                const accessToken = currentUser.getAuthResponse().access_token;
                console.log(accessToken);

            this.token = accessToken;
            });
        });
    },
}
</script>

<style>
.profile-main{
    font-size: 12px;
}
.profile-pic_container{
    margin-bottom: 14px;
}
.profile-image{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.donate-title{
    font-size: 12px;
}
</style>