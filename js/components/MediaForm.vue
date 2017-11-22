<template>
  <form>
    媒体名or担当名：<input type="text">
    URL：<input type="text">
    電話番号：<input type="text">
    優先順位：<input type="text">
    <button type="submit">登録</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'MediaForm',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
