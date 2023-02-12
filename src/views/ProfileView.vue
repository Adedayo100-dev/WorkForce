<template>
    <div class="profile-view">
        <div>
            <h3>{{$route.meta.title}}</h3>
        </div>
        <div class="profile-main">
            <div class="profile-pic_container">
                <img src="../assets/profile_img.jpg" alt="profile img" class="profile-img"> <!-- Image or logo -->
            </div>
            <div class="one-liner">
                <span>Full Name:</span> <span>Adedayo Taiwo</span>
            </div>
            <div class="one-liner">
                <span>Gender:</span> <span>Male</span>
            </div>
            <div class="one-liner">
                <span>Birthday:</span> <span>13th Nov, 2002</span>
            </div>
            <div class="one-liner">
                <span>:</span> <span></span>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {

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