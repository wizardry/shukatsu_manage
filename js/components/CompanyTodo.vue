<template>
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
<!--
  <li class="todo" :class="{ completed: todo.done, editing: editing }">
    <div class="view">
      <input class="toggle"
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodo({ todo: todo })">
      <label v-text="todo.text" @dblclick="editing = true"></label>
      <button class="destroy" @click="deleteTodo({ todo: todo })"></button>
    </div>
    <input class="edit"
      v-show="editing"
      v-focus="editing"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit">
  </li>
-->
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CompanyTodo',
  props: ['company_todo'],
  data () {
    return {
      editing: false
    }
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  methods: {
    ...mapMutations([
      'editTodo',
      'toggleTodo',
      'deleteTodo'
    ]),
    doneEdit (e) {
      const value = e.target.value.trim()
      const { todo } = this
      if (!value) {
        this.deleteTodo({
          todo
        })
      } else if (this.editing) {
        this.editTodo({
          todo,
          value
        })
        this.editing = false
      }
    },
    cancelEdit (e) {
      e.target.value = this.todo.text
      this.editing = false
    }
  }
}
</script>
