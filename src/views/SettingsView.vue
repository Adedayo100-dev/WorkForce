<template>
    <div class="settings-view">
        <h3>{{$route.meta.title}}</h3>
        <div class="settings-main">
            <div>
                <input type="checkbox" name="" id=""> <span>Dark Mode</span>
            </div>
            
            <div class="one-liner">
                <router-link to="/user-profile">Profile</router-link>
            </div>
            <div  class="one-liner">
                <router-link to="/help">Help & Feedback</router-link>
            </div>
            <div class="one-liner customize-container">
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
            </div>
            <div  class="one-liner">
                <button class=" log-out_button danger-link" @click="openModal">Log out</button>
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
        }
    },
    methods: {
        pickLang: function() {
            this.openLang = !this.openLang;
        }
    }
}
</script>

<style>
.settings-main{
    font-size: 12px;
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
    display: none;
    position: absolute;
    background-color: white;
    border: 1px solid rgb(235, 235, 235);
    border-radius: 3px;
    top: calc(100% + 5px + 8px);
    left: 0;
    z-index: 10;
    transition: bottom .15s ease-in-out;
    /* transform: translateY(calc(-100% - 5px - 8px)); */
}
.auth-drop-down.show, .i8n-lang-container.show .i8n-lang-drop-down{
    display: block;
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
.log-out_button{
    background-color: transparent;
    border: 1px solid rgb(235, 235, 235);
    border-radius: 3px;
    padding: 7px 16px;
    font-size: 12px;
}
.danger-link{
    color: red !important;
}
</style>