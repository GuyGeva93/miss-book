import homePage from './pages/home-page.js';
import about from './pages/about.js';
import bookApp from './pages/book-app.js';
import bookDetails from './pages/book-details.js';
import googleBookAdd from './cmps/google-book-add.js';



const routes = [
  {
    path: '/',
    component: homePage
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/book',
    component: bookApp
  },
  {
    path: '/book/:bookId',
    component: bookDetails
  },
  {
    path: '/google-book-add',
    component: googleBookAdd
  }
]

export const router = new VueRouter({ routes })