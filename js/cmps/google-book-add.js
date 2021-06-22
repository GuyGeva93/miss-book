import bookHeader from '../pages/book-header.js'
import { bookService } from '../services/book-service.js';
import googleBookPreview from './google-book-preview.js'


export default {
  template: `
  <section>
    <book-header />
    <section class="google-book-add">
      <h2>BOOK ADD</h2>
      <input v-model="searchStr" @input="logStr" type="text" placeholder="Type to search..">
      <button @click="search">Search</button>
      <google-book-preview  :books="books"/>
    </section>
  </section>
  `,


  data() {
    return {
      searchStr: null,
      books: null
    }
  },

  methods: {
    logStr() {
      console.log(this.searchStr);
    },
    search() {
      console.log('searching', this.searchStr)
      bookService.searchGoogleBook(this.searchStr)
        .then(books => {
          console.log('Google book', books)
          this.books = books
          console.log('this.books', this.books);
        })
    }
  },

  components: {
    bookHeader,
    googleBookPreview
  },



}