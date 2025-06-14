import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('nuxtLogo', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
