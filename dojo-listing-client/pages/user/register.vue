<template>
    <div>
        <Navbar/>
        <b-form @submit.prevent="submitForm()">
            <b-form-group
            label="Full Name"
            label-for="fullName"
            description="First Name and Last name">
                <b-form-input
                id="fullName"
                v-model="full_Name"
                type="text"
                placeholder="Enter your full name">
                </b-form-input>
            </b-form-group>

            <b-form-group
            label="Email"
            label-for="email"
            description="User email"
            >
                <b-form-input type="email" v-model="email"></b-form-input>
            </b-form-group>
            
            <b-form-group
            label="Password"
            label-for="password"
            description="User password">
                <b-form-input id="password" type="password" v-model="password"></b-form-input>
            </b-form-group>
        </b-form>
    </div>
</template>
<script>
    export default {
        middleware: 'auth',
        auth: 'guest',
        data(){
            return {
                errors:null,
                full_name:null,
                email:null,
                password:null,
                status:false,
            }
        },
        methods:{
            submitForm(){
                // Post to register method
                this.$axios.post('/api/users/register', {
                    full_name: this.full_name,
                    email: this.email,
                    password: this.password,
                })
                .then((res) => {
                    console.log(res)

                    if(res.data._id) {
                        this.$router.push({name: 'user-login', params: {registered: 'yes'}})
                        this.$auth.loginWith('local', {
                            data: {
                                email: this.email,
                                password: this.password
                                }
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                    }
                }).catch ( (error) => {
                    console.log(error);
                    if(error.response.data.error) {
                        this.errors = error.response.data.errors
                    }
                })
            }
        }
    }
</script>