import Vue from 'vue'

const app = new Vue({
  template: '<div ref="xxx">{{text}} <div>ppppp</div></div>',
  data: {
    text: 0
  }
  // watch: {
  //   text (newval, oldval) {
  //     console.log(`${newval} : ${oldval}`)
  //   }
  // }
})
app.$mount('#root')

setInterval(() => {
  app.text += 1
}, 1000)
// console.log(app.$data)
// console.log(app.$refs)
// // console.log(app.$isServer)
// console.log(app.$children)
// app.$watch('text', (newval, oldval) => {
//   console.log(`${newval} : ${oldval}`)
// })

app.$on('text', (a, b) => {
  console.log('text 事件被触发了')
  console.log(`${a} ++++ ${b}`)
})
setTimeout(() => {
  app.$emit('text', 3, 5)
}, 3000)
