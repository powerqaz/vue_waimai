import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

export default [
  {
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/msite',
    component: Msite,
    meta:{
      isShowFooter:true
    }
  },
  {
    path: '/search',
    component: Search,
    meta:{
      isShowFooter:true
    }
  },
  {
    path: '/order',
    component: Order,
    meta:{
      isShowFooter:true
    }
  },
  {
    path: '/Login',
    component: Login,

  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      isShowFooter:true
    }
  },

]
