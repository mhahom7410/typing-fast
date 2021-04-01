import Home from './pages/Home.vue'
import NotFound from './pages/NotFound.vue'

export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/:path(.*)', component: NotFound },
]