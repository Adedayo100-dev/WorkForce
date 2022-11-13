<template>
    <div class="top-nav">
        <div class="title-box">
            <span class="title">WorkForce</span>
        </div>
        <div class="logo">
            <WorkForceIcon />
        </div>
        <div class="customize-container">
            <div class="i8n-lang-container" :class="{show : openLang}">
                <div class="i8n-lang-picker" @click="pickLang">
                    <div class="globe-container">
                        <GlobeIcon />
                    </div>
                    <span>English</span>
                    <div class="caret-container">
                        <CaretUpIcon />
                    </div>
                </div>
                <div class="i8n-lang-drop-down">
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
                            <router-link to="/profile">Profile</router-link>
                        </li>
                        <li>
                            <router-link to="/settings">Settings</router-link>
                        </li>
                        <li>
                            <router-link to="/help">Help & Feedback</router-link>
                        </li>
                        <li>
                            <span class="danger-link" @click="openModal">Sign out</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import WorkForceIcon from '../components/icons/IconWorkForce.vue'
import GlobeIcon from '../components/icons/IconGlobe.vue'
import CaretUpIcon from '../components/icons/IconCaretUp.vue'
import CaretDownIcon from '../components/icons/IconCaretDown.vue'

export default {
    components: {
        WorkForceIcon, GlobeIcon, CaretUpIcon, CaretDownIcon
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* flex-direction: row;
    justify-content: space-between; */
    position: sticky;
    top: 0;
    background-color: #f4f4f6;
    border-bottom: 1px solid  rgb(235, 235, 235);
    padding: 5px 30px 5px 28px;
    color: grey;
    font-size: 12px;
    z-index: 10;
}
.top-nav div.title-box{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.top-nav span.title{
    color:  #5F6368;
    /* margin-right: 10px; */
}
.top-nav .logo{
    display: flex;
    justify-content: center;
}
.top-nav .logo img{
    height: 19px;
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
    justify-content: end;
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
.i8n-lang-container.show .i8n-lang-picker svg{
    transform: rotate(0deg);
}
/* .i8n-lang- span{
    font-size: 14px;
} */
.globe-container{
    display: flex;
    align-items: center;
    height: 100%;
}
.caret-container{
    display: flex;
    align-items: center;
    height: 100%;
}
.auth-container{
    position: relative;
    display: flex;
}
.auth-picker{
    cursor: pointer;
}
.auth-drop-down, .i8n-lang-drop-down{
    display: block;
    position: absolute;
    background-color: white;
    border: 1px solid rgb(235, 235, 235);
    border-radius: 3px;
    top: auto;
    bottom: calc(100% + 5px);
    right: 0;
    z-index: 10;
    transition: bottom .15s ease-in-out;
    /* transform: translateY(calc(-100% - 5px - 8px)); */
}
.auth-drop-down.show, .i8n-lang-container.show .i8n-lang-drop-down{
    bottom: auto;
    top: calc(100% + 5px + 8px);
}
.auth-drop-down ul, .i8n-lang-drop-down ul{
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 12px;
}
.auth-drop-down a, .i8n-lang-drop-down a, .auth-drop-down span{
    display: flex;
    white-space: nowrap;
    /* padding: 8.5px 17px; */
    padding: 7px 26px 7px 16px;
    color: grey;
}
.auth-drop-down a:hover, .i8n-lang-drop-downa:hover, .auth-drop-down span:hover{
    background-color: #f4f4f6;
    color: black;
}
.danger-link{
    color: red !important;
}
</style>