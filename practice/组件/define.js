import Vue from 'vue'
new Vue({
  el: '#root',
  template: `<Ch1></Ch1>`,
  components: {
    'ch1': {
      template: `<div>我是子组件</div>`
    }
  }
})
