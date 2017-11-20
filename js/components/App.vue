<style lang="scss" scoped>
section {
  font-size:12px;
}
</style>
  
<template>
  <section class="todoapp">
    <!-- header -->
    <appHeader></appHeader>
    <div class="appWrapper">
      <nav class="menuNav">
        <ul>
          <li>媒体管理</li>
          <li>会社管理</li>
          <li>役所管理</li>
          <li>日程管理</li>
        </ul>
      </nav>
      <div class="mainContent">
        <ul>
          <li>
            <header>
              <ul>
                <li class="isHidden">
                  <input type="checkbox">
                </li>
                <li class="sortHandler">::</li>
                <li class="name">株式会社ほげほげ</li>
                <li class="time">64分</li>
                <li class="toggle">↓</li>
              </ul>
            </header>
            <div class="taskContent">
              <button>編集</button>
              <ul>
                <li>場所：恵比寿</li>
                <li>TEL：03-4444-4444</li>
                <li>沿線：日比谷線</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- main section -->
<!--
    <section class="main" v-show="todos.length">
      <input class="toggle-all" id="toggle-all"
        type="checkbox"
        :checked="allChecked"
        @change="toggleAll({ done: !allChecked })">
      <label for="toggle-all"></label>
      <ul class="todo-list">
        <todo v-for="(todo, index) in filteredTodos" :key="index" :todo="todo"></todo>
      </ul>
    </section>
-->
    <!-- footer -->
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize('item') }} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters">
          <a :href="'#/' + key"
            :class="{ selected: visibility === key }"
            @click="visibility = key">{{ key | capitalize }}</a>
        </li>
      </ul>
      <button class="clear-completed"
        v-show="todos.length > remaining"
        @click="clearCompleted">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import AppHeader from './AppHeader.vue'

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}

export default {
  components: { AppHeader },
  data () {
    return {
      visibility: 'all',
      filters: filters
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    },
    allChecked () {
      return this.todos.every(todo => todo.done)
    },
    filteredTodos () {
      return filters[this.visibility](this.todos)
    },
    remaining () {
      return this.todos.filter(todo => !todo.done).length
    }
  },
  methods: {
    addTodo (e) {
      var text = e.target.value
      if (text.trim()) {
        this.$store.commit('addTodo', { text })
      }
      e.target.value = ''
    },
    ...mapMutations([
      'toggleAll',
      'clearCompleted'
    ])
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>
