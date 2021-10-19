<template>
    <div>
        <b-navbar type="dark" variant="info">
            <!-- <b-navbar-brand href="#">Dojos</b-navbar-brand> -->
            <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/dojos">Dojos</b-nav-item>
                <b-nav-item to="/user/register">Register</b-nav-item> 
                <b-nav-item to="/user/login">Login</b-nav-item>
            </b-navbar-nav>
                 <!-- Todo make this conditional on auth value -->
            - <b-navbar-nav>
                <b-nav-item-dropdown right>
                    <template #button-content>
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item to="/user/logout" exact-active-class="active">Sign out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav> 
        </b-navbar>
    </div>
</template>