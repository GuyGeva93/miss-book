import { bookPreview } from './book-preview.js';

export default {
  props: ['books'],

  template: `
  <ul class="book-list">
      <book-preview :book="book" v-for="book in books" :key="book.id" @click.native="select(book.id)"/>
      <!-- <div class="actions"> -->
        <!-- <button ></button> -->
      <!-- </div> -->
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

//book-preview "