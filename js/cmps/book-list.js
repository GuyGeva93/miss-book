import { bookPreview } from './book-preview.js';

export default {
  props: ['books'],

  template: `
  <ul class="book-list">
    <li v-for="book in books" :key="book.id">
      <book-preview @click.native="select(book.id)"/>
      <div class="actions">
        <button ></button>
      </div>
    </li>


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