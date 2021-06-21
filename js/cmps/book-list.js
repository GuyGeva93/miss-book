import { bookPreview } from './book-preview.js';

export default {
  props: ['books'],

  template: `
  <ul class="book-list">
      <book-preview :book="book" v-for="book in books" :key="book.id"/>
  </ul>
  
  `,
  methods: {
    select(bookId) {
      this.$emit('selected', bookId)
    }
  },

  components: {
    bookPreview,
  },
}