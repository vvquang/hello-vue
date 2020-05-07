import { shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList'
import wrapperOps from '../../supports/wrapper'

const handleChangeInput = jest.spyOn(TodoList.methods, 'handleChangeInput')
const handleAddTodo = jest.spyOn(TodoList.methods, 'handleAddTodo')
const handleCheckAllTodos = jest.spyOn(TodoList.methods, 'handleCheckAllTodos')
const handleFilterTodos = jest.spyOn(TodoList.methods, 'handleFilterTodos')
const handleClearCompleted = jest.spyOn(TodoList.methods, 'clearCompleted')

const ADD_TODO = jest.spyOn(TodoList.methods, 'ADD_TODO')
const CHECK_ALL_TODO = jest.spyOn(TodoList.methods, 'CHECK_ALL_TODO')
const FILTER_TODOS = jest.spyOn(TodoList.methods, 'FILTER_TODOS')
const CLEAR_COMPLETED_TODO = jest.spyOn(TodoList.methods, 'CLEAR_COMPLETED_TODO')

describe('TodoList.vue', () => {
  let wrapper

  afterEach(() => {
    wrapper.vm.$destroy()
  })

  const localWrapperOps = {
    ...wrapperOps,
    computed: {
      todos() {
        return []
      },
      filterTodos() {
        return []
      }
    }
  }
  beforeEach(() => {
    wrapper = shallowMount(TodoList, localWrapperOps)
  })

  it('component should render correctly', () => {
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })

  it('should call handleChangeInput when change input add todo', async () => {
    const textInput = wrapper.find('input[type="text"]')
    textInput.setValue('some value')
    textInput.trigger('change')

    // input v-model="newTodo"
    // wrapper.setData({ newTodo: 'some value' })
    // await wrapper.vm.$nextTick()

    expect(handleChangeInput).toHaveBeenCalled()
  })

  it('should call handleAddTodo when keypress.enter', async () => {
    const textInput = wrapper.find('input[type="text"]')
    textInput.setValue('some value')
    await textInput.trigger('keyup.enter')
    expect(handleAddTodo).toHaveBeenCalledTimes(1)
    expect(ADD_TODO).toHaveBeenCalledWith(textInput.text())
  })

  it('should call handleCheckAllTodos when checkbox checked', async () => {
    const cbxAll = wrapper.find('input[type="checkbox"]')
    // cbxAll.setChecked()
    await cbxAll.trigger('click')
    //wrapper.vm.$forceUpdate()

    expect(handleCheckAllTodos).toHaveBeenCalled()
    expect(CHECK_ALL_TODO).toHaveBeenCalledWith(true)
  })

  it('should call handleFilterTodos', async () => {
    wrapper.findComponent({ ref: 'btnTodoAll' }).trigger('click')
    await wrapper.vm.$nextTick()
    expect(handleFilterTodos).toHaveBeenCalledWith('all')
    expect(FILTER_TODOS).toHaveBeenCalled()

    wrapper.findComponent({ ref: 'btnTodoIncomplete' }).trigger('click')
    await wrapper.vm.$nextTick()
    expect(handleFilterTodos).toHaveBeenCalledWith('incomplete')
    expect(FILTER_TODOS).toHaveBeenCalled()

    wrapper.findComponent({ ref: 'btnTodoCompleted' }).trigger('click')
    await wrapper.vm.$nextTick()
    expect(handleFilterTodos).toHaveBeenCalledWith('completed')
    expect(FILTER_TODOS).toHaveBeenCalled()
  })

  it('should call handleClearCompleted when button ClearCompleted clicked', async () => {
    wrapper.findComponent({ ref: 'btnClearCompleted' }).trigger('click')
    await wrapper.vm.$nextTick()
    expect(handleClearCompleted).toHaveBeenCalled()
    expect(CLEAR_COMPLETED_TODO).toHaveBeenCalled()
  })
})
