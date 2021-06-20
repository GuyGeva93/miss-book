import bookApp from './pages/book-app.js';

const options = {
  el: '#app',
  template: `
      <section>
          <book-app />
      </section>
    `,
  components: {
    bookApp
  }
};

const app = new Vue(options);