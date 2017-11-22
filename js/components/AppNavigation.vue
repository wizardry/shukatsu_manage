<style lang="scss" scoped>
  .menuNav {
    float: left;
    width: 20%;
    height: 100%;

    ul {
      height: 100%;
      background: #2a2b2c;
      border-right: 1px solid #fafbfc;
    }
    li {
      cursor: pointer;
      a {
        padding: 20px;
        border-bottom: 1px solid #fafbfc;
        background: #3a3b3c;
        color: #cacbcc;
        display: block;

        &.current {
          font-weight: bold;
          text-indent: 1em;
        }

        &:hover {
          opacity: .8;
        }
      }
    }
  }
</style>

<template>
  <nav class="menuNav" :style="navStyle">
    <ul>
      <li><router-link to="#media">媒体管理</router-link></li>
      <li><router-link to="#company">会社管理</router-link></li>
      <li><router-link to="#government">役所管理</router-link></li>
      <li><router-link to="#date">日程管理</router-link></li>
    </ul>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

const genNavStyle = () => {
  const headerHeight = 35
  return {
    height: window.innerHeight - headerHeight + 'px'
  }
}

export default {
  name: 'AppNavigation',
  data() {
    return {
      navStyle: genNavStyle()
    }
  }
}
</script>
