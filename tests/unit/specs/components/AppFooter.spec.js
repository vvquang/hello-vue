import { shallowMount } from '@vue/test-utils'
import AppFooter from '@/components/AppFooter.vue'

const wrapper = shallowMount(AppFooter)

describe('AppFooter mount', () => {
  it('should render correctly', () => {
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })
})
