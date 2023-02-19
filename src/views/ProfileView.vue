<template>
    <div class="profile-view">
        <div>
            <h3>{{$route.meta.title}}</h3>
        </div>
        <div class="profile-main">
            <div class="profile-pic_container">
                <img src="../assets/profile_img.jpg" alt="profile img" class="profile-img"> <!-- Image or logo -->
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
    </div>
    
</template>

<script>
import AddPhotoIcon from '../components/icons/IconAddPhoto.vue'

export default {
    name: 'Profile',
    components: {
        AddPhotoIcon
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
.profile-img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

</style>