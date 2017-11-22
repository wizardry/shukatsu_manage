<template>
  <li>
    <header>
      <ul>
        <li class="isHidden">
          <input type="checkbox">
        </li>
        <li class="sortHandler">::</li>
        <li class="name">株式会社ほげほげ：倉田</li>
        <li class="rank">1</li>
        <li class="toggle">↓</li>
      </ul>
    </header>
    <div class="taskContent">
      <button>編集</button>
      <ul>
        <li>URL：<a href="#">http://google.com</a></li>
      </ul>
    </div>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'MediaTodo',
  props: ['media_todo'],
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
