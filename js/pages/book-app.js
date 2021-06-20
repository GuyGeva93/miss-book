import { bookService } from '../services/book-service.js';
import bookFilter from '../cmps/book-filter.js';
import bookList from '../cmps/book-list.js';
import bookDetails from './book-details.js';

export default {
  template: `
  <section>
    <!-- <book-filter @filtered="setFilter"/> -->
    <book-list v-if="!selectedBook" :books="books" @selected="selectBook"/>
    <book-details v-else :book="selectedBook" @close="closeDetails"/>
  </section>
  
  `,

  data() {
    return {
      books: null,
      filterBy: null,
      booksToShow: null,
      selectedBook: null
    }
  },

  methods: {
    selectBook(bookId) {
      this.selectedBook = this.books.find(book => { return book.id === bookId })
    },
    closeDetails() {
      this.selectedBook = null;
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

// book-list :books="booksToShow" 