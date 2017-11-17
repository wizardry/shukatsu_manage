import Vue from "vue/dist/vue.js";
import Vuex from 'vuex'

export default function () {
  Vue.component('appHeader', {
    el:'#appHeader',
    template: `
      <h1 class="logo">就活！マネージャー</h1>
      <ul>
        <li>
          <select name="selectSort" id="selectSort">
            <option value="">通勤時間</option>
          </select>
        </li>
        <li>
          <input type="checkbox" class="toggle">
        </li>
      </ul>
    `
  })
}