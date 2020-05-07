import { shallowMount } from '@vue/test-utils'

import TodoItem from '@/components/TodoItem'
import wrapperOps from '../../supports/wrapper'
import { todo } from '../../supports/fixtures/todo-item'

const REMVOVE_TODO = jest.spyOn(TodoItem.methods, 'REMVOVE_TODO')
const CHECK_ITEM_TODO = jest.spyOn(TodoItem.methods, 'CHECK_ITEM_TODO')
const FINISH_EDIT_TODO = jest.spyOn(TodoItem.methods, 'FINISH_EDIT_TODO')

const handleRemoveTodo = jest.spyOn(TodoItem.methods, 'handleRemoveTodo')
const handleEditTodo = jest.spyOn(TodoItem.methods, 'handleEditTodo')
const handleCompleteItem = jest.spyOn(TodoItem.methods, 'handleCompleteItem')
const handleDoneEdit = jest.spyOn(TodoItem.methods, 'handleDoneEdit')
const handleCancelEdit = jest.spyOn(TodoItem.methods, 'handleCancelEdit')

describe('TodoItem.vue', () => {
  let wrapper

  afterEach(() => {
    wrapper.vm.$destroy()
  })

  const localWrapperOps = {
    ...wrapperOps,
    propsData: {
      todo,
      index: 0,
      checkAll: false
    },
    computed: {}
  }

  beforeEach(() => {
    wrapper = shallowMount(TodoItem, localWrapperOps)
  })

  it('component should render correctly', () => {
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('should call handleRemoveTodo', async () => {
    wrapper.find('.remove-item').trigger('click')
    await wrapper.vm.$nextTick()

    expect(handleRemoveTodo).toHaveBeenCalled()
    expect(REMVOVE_TODO).toHaveBeenCalledWith(0)
  })

  it('should call handleEditTodo', async () => {
    wrapper.find('.todo-item-label').trigger('dblclick')
    await wrapper.vm.$nextTick()
    expect(handleEditTodo).toHaveBeenCalled()
  })

  it('should call handleDoneEdit', async () => {
    // enable input
    wrapper.find('.todo-item-label').trigger('dblclick')
    await wrapper.vm.$nextTick()

    wrapper.find('.todo-item-edit').trigger('keyup.enter')
    await wrapper.vm.$nextTick()

    expect(handleDoneEdit).toHaveBeenCalled()
    expect(FINISH_EDIT_TODO).toHaveBeenCalledWith({
      index: 0,
      todo: todo
    })
  })

  it('should call handleCompleteItem', async () => {
    const cbxComplete = wrapper.find('input[type="checkbox"]')
    await cbxComplete.trigger('click')

    expect(handleCompleteItem).toHaveBeenCalled()
    expect(CHECK_ITEM_TODO).toHaveBeenCalledWith({
      id: todo.id,
      completed: true
    })
  })

  it('should call handleCancelEdit', async () => {
    // enable input
    wrapper.find('.todo-item-label').trigger('dblclick')
    await wrapper.vm.$nextTick()

    wrapper.find('.todo-item-edit').trigger('keyup.esc')
    await wrapper.vm.$nextTick()

    expect(handleCancelEdit).toHaveBeenCalled()
  })
})
