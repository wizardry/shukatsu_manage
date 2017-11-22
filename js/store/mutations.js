export const STORAGE_KEY = 'todos-vuejs'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const ADD_MEDIA_MODEL = 'ADD_MEDIA_MODEL'
export const CHECKOUT_MEDIA_MODEL_REQUEST = 'CHECKOUT_MEDIA_MODEL_REQUEST'
export const CHECKOUT_MEDIA_MODEL_SUCCESS = 'CHECKOUT_MEDIA_MODEL_SUCCESS'
export const CHECKOUT_MEDIA_MODEL_FAILURE = 'CHECKOUT_MEDIA_MODEL_FAILURE'
export const RECEIVE_MEDIA_MODEL_PRODUCTS = 'RECEIVE_MEDIA_MODEL_PRODUCTS'

export const state = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
  menus: [
    { name: '会社管理', is_current: true},
    { name: '媒体管理', is_current: false},
    { name: '役所管理', is_current: false},
    { name: '日程管理', is_current: false},
  ],
}

export const mutations = {
  addTodo (state, { text }) {
    state.todos.push({
      text,
      done: false
    })
  },

  deleteTodo (state, { todo }) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  toggleTodo (state, { todo }) {
    todo.done = !todo.done
  },

  editTodo (state, { todo, value }) {
    todo.text = value
  },

  toggleAll (state, { done }) {
    state.todos.forEach((todo) => {
      todo.done = done
    })
  },

  clearCompleted (state) {
    state.todos = state.todos.filter(todo => !todo.done)
  }
}
