import { bookPreview } from './book-preview.js';

export default {
  props: ['books'],

  template: `
  <ul class="book-list">
    <li v-for="book in books" :key="book.id" class="book-preview-container">
            <router-link :to="'/book/'+book.id">
                <button @click.prevent="remove(book.id)">✖</button>
                <book-preview :book="book" />
            </router-link>
        </li>
  </ul>
  
  `,
  methods: {
    select(bookId) {
      this.$emit('selected', bookId)
    },
    remove(bookId) {
      console.log('removing..', bookId);
      this.$emit('remove', bookId);
    }
  },

  components: {
    bookPreview,
  },
}