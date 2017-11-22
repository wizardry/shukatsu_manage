<template>
  <form>
    会社名：<input type="text">
    通勤時間：<input type="text">
    勤務場所：<input type="text">
    沿線：<input type="text">
    駅：<input type="text">
    都道府県：<input type="text">
    給与：<input type="text">
    職能：<input type="text">
    応募有無：<input type="text">
    応募優先順位：<input type="text">
    電話番号：<input type="text">
    媒体：<input type="text">
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CompanyForm',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
