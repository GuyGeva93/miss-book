import homePage from './pages/home-page.js';
import about from './pages/about.js';
import bookApp from './pages/book-app.js';
import bookDetails from './pages/book-details.js';



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
  }
]

export const router = new VueRouter({ routes })