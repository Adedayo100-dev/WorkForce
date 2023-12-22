<template>
    <div class="d-center">
        <div>
            <h1>Login</h1>
            <div class="login_render">
                <div>
                    <form @submit.prevent="nextForm()" action="" method="post">
                        <div class="login_form-control_stack">
                            <div>
                                <label class="login_label" for="">Your Name</label>
                                <div class="input_box-shadow">
                                    <input class="login_input" type="text">   
                                </div>
                            </div>
                            <!-- <div>
                                <label class="login_label" for="">Your Passowrd</label>
                                <div class="input_box-shadow">
                                    <input class="login_input" type="password" name="" id="">
                                </div>
                            </div> -->
                            <button class="login_submit" type="submit">Continue</button>
                            <!-- Vercel signup page -->
                        </div>
                    </form>
                </div>
                <div>
                    <a :href="getGoogleUrl(from)" class="g-signin2">Google</a>
                </div>
                <div class="terms-declaration">
                    By clicking the Continue button above you agree to the <router-link to="/terms_of_use" title="Terms of use">Terms of use </router-link> and <router-link to="/privacy_policy" title="Privacy Policy">Privacy Policy</router-link>
                </div>
            </div>
        </div>
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
        nextForm(){
            alert("Go to next")
        },
        getGoogleUrl,
    }
    
}
</script>

<style>
.login_render{
    min-width: 418px;
    max-width: 456px;
}
.login_form-control_stack{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    flex: initial;
    gap: 16px;
}
.input_box-shadow{
    display: flex;
    align-items: center;
    font-size: var(--geist-form-font);
    max-width: 100%;
    border-radius: 6px;
    transition: box-shadow .15s;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08);
    width: 100%;
}
.login_label{
    cursor: text;
    display: block;
    font-size: 13px;
    color: rgb(102, 102, 102);
    margin-bottom: 8px;
    max-width: 100%;
}
.login_input{
    padding: 0 12px;
    width: 100%;
    height: 36px;
    border-radius: 6px;
    border: none;
    outline: none;
}
.login_submit{
    display: flex;
    border-radius: 6px;
    border: none;
    color:white;
    background: rgb(23, 23, 23);
    font-weight: 500;
    padding: 0 12px;
    min-width: 100%;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    transition-property: border-color, background,color,transform,box-shadow;
    transition-duration: .15s;
    transition-timing-function: ease;
    font-size: 0.875;
    line-height: 1.25rem;
    height: 40px;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-sizing: border-box;
}
.terms-declaration {
    color: rgb(194, 194, 194);
    font-size: 10px;
    margin-top: 32px;
    margin-bottom: 20px;
    text-align: center;
    /* padding-right: 36px; */
    /* padding-left: 36px; */
}
.terms-declaration > a{
    color: rgb(112, 112, 112);
    font-weight: 600;
}
.terms-declaration > a:hover{
    color: #0690FA;
    text-decoration: none;
    background-color: transparent;
}

</style>