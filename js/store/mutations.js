export const STORAGE_KEY = 'todos-vuejs'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

const MediaModel = {
  name: '',
  rank: null,
  url: null,
  tel: null,
  is_hidden: false,
  order: null,
  id: null,
}

const CompanyModel = {
  name: '',
  rank: null,
  url: null,
  tel: null,
  is_hidden: false,
  order: null,
  id: null,
}
const GovernmentModel = {
  name: '',
  rank: null,
  title: null,
  body: null,
  checked: false,
  is_hidden: false,
  date_id: null,
  order: null,
  id: null,
}

const DateModel = {
  company_id: null,
  government_id: null,
  date: null,
  title: null,
  body: null,
  is_hidden: false,
  order: null,
  id: null,
}


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
