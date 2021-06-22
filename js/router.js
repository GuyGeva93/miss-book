import homePage from './pages/home-page.js';
import about from './pages/about.js';
import bookApp from './pages/book-app.js';
import bookDetails from './pages/book-details.js';
import bookAdd from './cmps/book-add.js';



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
    path: '/book-add',
    component: bookAdd
  }
]

export const router = new VueRouter({ routes })