// import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app/',
    props: true,
    components: {
      default: () => import('../views/todo/todo.vue'),
      a: Login
    },
    name: 'app',
    meta: {
      title: '这是增加的标题',
      // description: 'todo 应用',
      anhao: true
    }
    // beforeEnter (to, from, next) {
    //   console.log('app beforeach go')
    //   next()
    // }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    components: {
      default: Login,
      a: () => import('../views/todo/todo.vue')
    }
  }
]
