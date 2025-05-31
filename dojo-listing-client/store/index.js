// TODO: Migrate these methods to the new store structure
export const getters = {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },

    loggedInUser(state) {
      return state.auth.user
    }
  }
