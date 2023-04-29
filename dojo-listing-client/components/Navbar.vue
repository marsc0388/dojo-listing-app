<template>
    <div>
        <b-navbar type="dark" variant="info">
            <!-- <b-navbar-brand href="#">Dojos</b-navbar-brand> -->
            <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/dojos/dojos">Dojos</b-nav-item>
                
            </b-navbar-nav>
                 <!-- Todo make this conditional on auth value -->
             <b-navbar-nav>
                <b-nav-item-dropdown right v-if="isAuthenticated">
                    <template #button-content>
                        <em>{{ loggedInUser.full_name }}</em>
                    </template>
                    <b-dropdown-item to="/user/my-profile">Profile</b-dropdown-item>
                    <b-dropdown-item to="/user/logout" exact-active-class="active">Sign out</b-dropdown-item>
                </b-nav-item-dropdown>
                <template v-else>
                    <b-nav-item to="/user/register">Register</b-nav-item> 
                    <b-nav-item to="/user/login">Login</b-nav-item>
                </template>
            </b-navbar-nav> 
        </b-navbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
}
</script>