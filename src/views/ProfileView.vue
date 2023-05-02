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
                <span></span>
            </div>
        </div>
        <div class="donate-view">
            <span class="donate-title">Donate to the cause:</span>
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
        axios.get('http://localhost:3000/profile')
            .then((res) => {
                this.profile = res.data;
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err)
            });

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
    }
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