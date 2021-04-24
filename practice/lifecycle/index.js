import Vue from 'vue'

const app = new Vue({
  template: '<div ref="xxx">{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log(1)
  }
})
app.$mount('#root')
