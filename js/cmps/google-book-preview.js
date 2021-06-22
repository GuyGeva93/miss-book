
export default {
  props: ['books'],

  template: `
  <ul class="google-book-preview-ul">
    <li v-for="book in books" :key="book.id" class="google-book-preview-li clean-list">
    <h3>{{book.volumeInfo.title}}</h3>
    <h5>{{book.volumeInfo.publisher}}</h5>
    <button  @click="addBook(book)">Add to my books</button>
    </li>
  </ul>
  `,

  data() {
    return {
      googleBook: {
        title: null,
        publisher: null
      }
    }
  },

  methods: {
    addBook(book) {
      // this.$emit('addGoogleBook', this.book)
      console.log(book);
    }
  }



}