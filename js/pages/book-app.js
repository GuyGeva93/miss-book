import { bookService } from '../services/book-service.js';
import bookFilter from '../cmps/book-filter.js';
import bookList from '../cmps/book-list.js';
import bookDetails from './book-details.js';

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
  components: {
    bookFilter,
    bookList,
    bookDetails
  },
}