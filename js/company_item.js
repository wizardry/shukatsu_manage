import Vue from "vue/dist/vue.js";
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Axios from 'axios';


/*
const axios = Axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3/',
  headers: {
    'contentType': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});

window.onload = (e) => {
  console.log('Hello Vue templates');
  console.log(axios)
  axios.get('playlists?part=snippet&id=PLur2Eo4AXXcz9t48gi9RDZnK0rDnDQ2m5&key=AIzaSyA-KA-XQKME2ATFfsOZWF7YPNJ1cgG0tg4').then((callback)=>{
    debugger;
  })
}
*/

Vue.use(VueRouter)

const axios = Axios.create({
  baseURL:'/json/',
  headers: {
    'contentType': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count**
    }
  }
})

window.onload = (e) -> {
  axios.get('menu').then
}