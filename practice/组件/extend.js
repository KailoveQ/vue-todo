import Vue from 'vue'

const component = {
  template: `
    <div :style='style'>
      <slot :value="style"></slot>
    </div>
  `,
  props: ['xxx'],
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid red'
      }
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  data: {val: 'xxx'},
  el: '#root',
  template: `
    <div>
      <compOne xxx="100"  ref="fu">
        <span slot-scope="p" ref="zi">{{p.value}}</span>
      </compOne>
    </div>`,
  mounted () {
    console.log(this.$refs.fu.$props)
  }
})
