import { bookService } from '../services/book-service.js';
import bookFilter from '../cmps/book-filter.js';
import bookList from '../cmps/book-list.js';
import bookDetails from './book-details.js';
import bookHeader from './book-header.js';

export default {
  template: `
  <section>
    <book-header />
    <book-filter @filtered="setFilter"/>
    <book-list :books="booksToShow" @remove="removeBook"/>
  </section>
  
  `,

  data() {
    return {
      books: [],
      filterBy: null,
    }
  },

  methods: {
    loadBooks() {
      bookService.query()
        .then(books => this.books = books);
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    removeBook(bookId) {
      bookService.removeBook(bookId)
        .then(() => this.loadBooks())
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
      .then(books => { this.books = books })
      .catch(err => console.log(err));
  },

  components: {
    bookFilter,
    bookList,
    bookDetails,
    bookHeader
  }
}
