// TODO: Migrate this middleware to Nuxt 3 structure
export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    return redirect('/')
  }
}
