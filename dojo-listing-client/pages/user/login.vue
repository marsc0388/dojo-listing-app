<template>
    <div>
        <Navbar/>
        <h1>Login</h1>
        <hr>

        <b-form @submit="submitForm">
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
                <b-form-input type="password" id="text-password" aria-describedby="password-help-block"></b-form-input>
                <b-form-text id="password-help-block">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not
                    contain spaces, special characters, or emoji.
                </b-form-text>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
    export default {
        middleware: 'auth',
        auth: 'guest',
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
            submitForm(){
                this.$auth.loginWith('local', {
                    data: {
                        email: this.email,
                        password: thispassword
                    }
                })
                .catch( error => {
                    console.log(error);
                    if(error.response.data.message) {
                        this.login_error = error.response.data.message
                    }
                })
            }
        }
    }
</script>
<style scoped>
    body {
        background: red;
    }
</style>