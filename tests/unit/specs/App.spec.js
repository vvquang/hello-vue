import { shallowMount } from '@vue/test-utils'
import App from '@/App'
import wrapperOps from '../supports/wrapper'

const wrapper = shallowMount(App, wrapperOps)

describe('test App.vue', () => {
  it('render app', () => {
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })
})
