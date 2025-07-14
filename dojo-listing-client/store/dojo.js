// TODO: Convert this to a pinia store

export function state() {
  return {
    list: [],
  }
}

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
    const { data: dojos } = await this.$axios.$get('/api/dojos')
    commit('setDojos', dojos)
  },
}
