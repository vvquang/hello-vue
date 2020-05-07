import { shallowMount } from '@vue/test-utils'
import Home from '@/pages/Home'
import wrapperOps from '../../supports/wrapper'

const wrapper = shallowMount(Home, wrapperOps)

describe('test App.vue', () => {
  it('render app', () => {
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })
})
