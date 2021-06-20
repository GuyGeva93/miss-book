
export default {
  props: ['book'],

  template: `
  <article class="book-details">
    <button @click="$emit('close')">Close</button>
    <p v-if="countPages" class="bold">{{countPages}}</p>
    <p v-if="publishDate"  class="bold">{{publishDate}}</p>
    <!-- <p v-if="price" v-bind:class="">{{price}}</p> -->
    <p>{{book.title}}</p>
    <p>Authors: {{book.authors}}</p>
    <p>Publish date: {{book.publishedDate}}</p>
    <p>Description: {{book.description}}</p>
    <p>Page count: {{book.pageCount}}</p>
  </article>
  `,

  computed: {
    countPages() {
      if (this.book.pageCount > 500) return 'Long reading'
      if (this.book.pageCount > 200) return 'Decent reading'
      if (this.book.pageCount > 500) return 'Light reading'
      return null

    },
    publishDate() {
      let countYear = new Date().getFullYear() - this.book.publishedDate
      if (countYear > 10) return 'Veteran book'
      if (countYear < 1) return 'New book!'
      return null
    },
    // price() {
    //   if (this.book.price > 150) return 'red'
    //   if (this.book.price < 20) return 'green'
    // }
  }

}