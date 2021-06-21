import bookApp from './pages/book-app.js';
import { router } from './router.js';


const options = {
  el: '#app',

  router,

  template: `
      <section>
        <router-view />
      </section>
    `,

  components: {
    bookApp
  }
};

const app = new Vue(options);