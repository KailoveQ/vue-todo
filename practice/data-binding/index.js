import Vue from 'vue'
const app = new Vue({
  template: `<div>{{text}}+++{{isActive ? 'active' : 'not active'}}</div>`,
  data: {
    text: 0,
    isActive: false
  }
})
app.$mount('#root')
