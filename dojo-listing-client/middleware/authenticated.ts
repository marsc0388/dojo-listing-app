// Client-side middleware is not automatically applied to all routes
export default defineNuxtRouteMiddleware(async () => {
  // Check if the user is authenticated
  const { loggedIn } = await useUserSession()

  // console.log('Checking user session:', loggedIn)

  // If the user is not authenticated, redirect to the login page
  if (!loggedIn.value) {
    return navigateTo('/login')
  }
})
