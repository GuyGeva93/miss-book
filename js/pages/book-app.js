import { bookService } from '../services/book-service.js';
import bookFilter from '../cmps/book-filter.js';
import bookList from '../cmps/book-list.js';
import bookDetails from './book-details.js';

export default {
  template: `
  <section>
    <h1>Miss Book</h1>
    <book-filter @filtered="setFilter"/>
    <book-list v-if="!selectedBook" @selected="selectBook" :books="booksToShow"/>
    <book-details v-else :book="selectedBook" @close="closeDetails"/>
  </section>
  
  `,

  data() {
    return {
      books: [],
      filterBy: null,
      selectedBook: null
    }
  },

  methods: {
    selectBook(bookId) {
      this.selectedBook = this.books.find(book => { return book.id === bookId })
    },
    closeDetails() {
      this.selectedBook = null;
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    }
  },

  computed: {
    booksToShow() {
      if (!this.filterBy) return this.books;
      const searchStr = this.filterBy.byName.toLowerCase();
      return this.books.filter(book => {
        return book.title.toLowerCase().includes(searchStr);
      });
    }
  },

  created() {
    bookService.query()
      .then(books => this.books = books)
      .catch(err => console.log(err));
  },

  components: {
    bookFilter,
    bookList,
    bookDetails
  }
}
