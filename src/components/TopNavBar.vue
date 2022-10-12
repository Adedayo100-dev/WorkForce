<template>
    <div class="top-nav">
        <span class="title">WorkForce</span>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/plans">Plans</RouterLink>
                </li>
                <li>
                    <RouterLink to="/jobs">Jobs</RouterLink>
                </li>
                <li>
                    <RouterLink to="/assignments">Assignments</RouterLink>
                </li>
                <li>
                    <RouterLink to="/worklog">Work Log</RouterLink>
                </li>
                <li>
                    <RouterLink to="/notifications">Notifications</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">More</RouterLink>
                </li>
            </ul>
        </nav>
        <div class="customize-container">
            <div class="i8n-lang-container">
                <div class="i8n-lang-picker" @click="pickLang">
                    <div class="globe-container">
                        <GlobeIcon />
                    </div>
                    <span>English</span>
                    <div class="caret-d-container">
                        <CaretUpIcon />
                    </div>
                </div>
                <div class="i8n-lang-drop-down" :class="{show : openLang}">
                    <ul>
                        <li>
                            <a href="">English</a>
                        </li>
                        <li>
                            <a href="">日本語</a>
                        </li>
                        <li>
                            <a href="">Deutsch</a>
                        </li>
                        <li>
                            <a href="">Français</a>
                        </li>
                        <li>
                            <a href="">Português</a>
                        </li>
                        <li>
                            <a href="">Español</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="auth-container">
                <span class="auth-picker" @click="pickAuth">Sign In</span>
                <div class="auth-drop-down"  :class="{show : openAuth}">
                    <ul>
                        <li>
                            <a href="">Profile</a>
                        </li>
                        <li>
                            <a href="">Settings</a>
                        </li>
                        <li>
                            <a href="">Help & Feedback</a>
                        </li>
                        <li>
                            <a href="" class="danger-link">Sign out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import GlobeIcon from '../components/icons/IconGlobe.vue'
import CaretUpIcon from '../components/icons/IconCaretUp.vue'
import CaretDownIcon from '../components/icons/IconCaretDown.vue'

export default {
    components: {
        GlobeIcon, CaretUpIcon, CaretDownIcon
    },
    data() {
        return {
            openLang: false,
            openAuth: false,
        }
    },
    methods: {
        pickLang: function() {
            this.openLang = !this.openLang;
            this.openAuth = false;
        },
        pickAuth: function() {
            this.openAuth = !this.openAuth;
            this.openLang = false;
        }
    }
}
</script>

<style>
.top-nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: #f4f4f6;
    border-bottom: 1px solid  rgb(235, 235, 235);
    padding: 5px 38.67px 5px 28px;
    color: grey;
    font-size: 14px;
    z-index: 10;
}
.top-nav span.title{
    color:  #5F6368;
    margin-right: 10px;
}
.top-nav nav{
    position: sticky;
    top: 0;
    z-index: 100;
}
.top-nav nav ul{
    padding: 0;
    margin: 0 5px;
    display: flex;
}
.top-nav nav li{
    list-style-type: none;
    margin: 0 10px;
}
.top-nav nav a{
    /* font-size: 14px; */
    color: grey;
    display: flex;
    position: relative;
}
.top-nav nav a.router-link-active::after {
    content: "";
    background-color: #018786;
    position: absolute;
    bottom: -5px;
    height: 2px;
    left: -5px;
    right: -5px;
}
.customize-container{
    display: flex;
    column-gap: 20px;
    /* color: grey; */
}
.i8n-lang-container{
    position: relative;
    display: flex;
}
.i8n-lang-picker{
    display: inline-flex;
    column-gap: 8px;
    align-items: center;
    cursor: pointer;
}
.i8n-lang- span{
    /* font-size: 14px; */
}
.globe-container{
    display: flex;
    align-items: center;
    height: 100%;
}
.caret-d-container{
    display: flex;
    align-items: center;
    height: 100%;
}
.auth-container{
    position: relative;
}
.auth-picker{
    cursor: pointer;
}
.auth-drop-down, .i8n-lang-drop-down{
    display: none;
    position: absolute;
    background-color: white;
    border: 1px solid rgb(235, 235, 235);
    border-radius: 3px;
    top: calc(100% + 5px + 8px);
    right: 0;
    z-index: 10;
}
.auth-drop-down.show, .i8n-lang-drop-down.show{
    display: block;
}
.auth-drop-down ul, .i8n-lang-drop-down ul{
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 13px;
}
.auth-drop-down a, .i8n-lang-drop-down a{
    display: flex;
    white-space: nowrap;
    padding: 8.5px 17px;
    color: grey;
}
.auth-drop-down a:hover, .i8n-lang-drop-downa:hover{
    background-color: rgb(235, 235, 235);
}
.danger-link{
    color: red !important;
}
</style>