import { bookService } from '../services/book-service.js';
import '../cmps/book-filter.js';
import '../cmps/book-list.js';
import '../cmps/book-details.js';

export default {
  template: `
  <section>
    <book-filter @filtered="setFilter"/>
    <book-list :books="booksToShow" @selected="selectBook"/>
    <book-details @selected="selectedBook"/>
  </section>
  
  `,
  data() {
    return {
      books: null,
      filterBy: null,
      booksToShow: null
    }
  },
  created() {
    this.books = bookService.query();
  },
}