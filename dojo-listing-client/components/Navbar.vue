<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
// import { mapGetters } from 'vuex'

// export default {
//   computed: {
//     ...mapGetters(['isAuthenticated', 'loggedInUser'])
//   }
// }
</script>

<template>
  <!-- Todo make this conditional on auth value -->
  <!-- <b-navbar-nav>
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
</b-navbar-nav> -->
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NuxtLink v-slot="{ isActive, href, navigate }" to="/" custom>
          <NavigationMenuLink :active="isActive" :href :class="navigationMenuTriggerStyle()" @click="navigate">
            Home
          </NavigationMenuLink>
        </NuxtLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NuxtLink v-slot="{ isActive, href, navigate }" to="/dojos/dojos" custom>
          <NavigationMenuLink :active="isActive" :href :class="navigationMenuTriggerStyle()" @click="navigate">
            Dojos
          </NavigationMenuLink>
        </NuxtLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
