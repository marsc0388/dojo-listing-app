// TODO: Convert this to a pinia store

export const state = () => ({
    list: []
  })

  export const mutations = {
    setDojos(state, dojos) {
      state.list = dojos
    },
    remove(state, dojo) {
      state.list.splice(state.list.indexOf(dojo), 1)
    },
  }

  export const actions = {
      async loadDojos({ commit }) {
        let {data: dojos} = await this.$axios.$get("/api/dojos")
        commit("setDojos", dojos);
      }
  }
