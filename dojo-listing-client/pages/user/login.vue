<template>
    <div>
        <h1>Welcome back!</h1>
        <hr>
        <Notification :message="errors" v-if="errors"/>
        <b-form @submit.prevent="login">
            <b-form-group
            id="input-email"
            label="Email address:"
            label-for="email"
            description="We'll never share your email with anyone else."
            >
                <b-form-input
                    id="email"
                    v-model="email"
                    type="email"
                    placeholder="Enter email"
                    required>
                </b-form-input>
            </b-form-group>
            <b-form-group
            id="input-password"
            label="Password:"
            label-for="text-password"
            >
                <b-form-input type="password" id="text-password" aria-describedby="password-help-block" v-model="password"></b-form-input>
                <b-form-text id="password-help-block">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not
                    contain spaces, special characters, or emoji.
                </b-form-text>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        

        <p>
              Don't have an account? <nuxt-link to="/users/register">Register</nuxt-link>
            </p>
    </div>
</template>

<script>
import Notification from '../../components/Notification.vue'
    export default {
        middleware: 'auth',
        auth: 'guest',
        components: {
            Notification,
        },
        data() {
            return {
                errors:null,
                login_error: null,
                email: null,
                password: null,
                status: false,
            }
        },
        methods: {
            async login(){
                try {
                    console.log("Login attempted!")
                    await this.$auth.loginWith('local', {
                    data: {
                        email: this.email,
                        password: this.password
                    }
                })

                this.$router.push('/')
                }
                catch(err) {
                    console.log(err);
                    if(err.response.data.message) {
                        this.login_error = err.response.data.message
                    }
                }
            }
        }
    }
</script>
<style scoped>
    body {
        background: red;
    }
</style>