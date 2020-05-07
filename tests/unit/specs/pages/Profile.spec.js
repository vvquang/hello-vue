import { shallowMount } from '@vue/test-utils'
import Profile from '@/pages/Profile'
import wrapperOps from '../../supports/wrapper'

const wrapper = shallowMount(Profile, {
  ...wrapperOps,
  propsData: {
    username: 'user name',
    fullName: 'full name'
  }
})

describe('test Profile.vue', () => {
  it('render app', () => {
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })
})
