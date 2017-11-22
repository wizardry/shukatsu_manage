<style lang="scss" scoped>
  .menuNav {
    float: left;
    width: 20%;
    height: 100%;

    ul {
      height: 100%;
      border-right: 1px solid #fff;
    }
    li {
      padding: 20px;
      border-bottom: 1px solid #fff;
      background: #3a3b3c;
      color: #cacbcc;

      &.current {
        font-weight: bold;
        text-indent: 1em;
      }
    }
  }
</style>

<template>
  <nav class="menuNav" :style="navStyle">
    <ul>
      <li>媒体管理</li>
      <li>会社管理</li>
      <li>役所管理</li>
      <li>日程管理</li>
    </ul>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

const navStyle = {
  height: window.innerHeight - 35,
  width: '20px'
}

export default {
  name: 'AppNavigation',
  data() {
    return {
      navStyle: () => {
        const headerHeight = 35
        return {
          height: window.height - headerHeight
        }
      }
    }
  }
}
</script>
