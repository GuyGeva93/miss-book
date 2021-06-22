import bookHeader from '../pages/book-header.js'

export default {
  template: `
  <section>
    <book-header />
    <section class="book-add">
      <h2>BOOK ADD</h2>
      <input v-model="searchStr" @input="logStr" type="text" placeholder="Type to search..">
      <button @click="search">Search</button>
    </section>
  </section>
  `,
  components: {
    bookHeader
  },

  data() {
    return {
      searchStr: null
    }
  },

  methods: {
    logStr() {
      console.log(this.searchStr);
    },
    search() {
      console.log('searching', this.searchStr)
    }
  }



}