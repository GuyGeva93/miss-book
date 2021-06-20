
export default {
  props: ['book'],

  template: `
  <article class="book-details">
    <div class="book-details-img">
      <img :src="book.thumbnail">
    </div>
    <div class="book-details-info">
      <h2 class="book-details-title">-{{book.title}}-</h2>
      <p v-if="countPages" class="bold">-{{countPages}}</p>
      <p v-if="publishDate" class="bold">-{{publishDate}}</p>
      <p class="bold">-{{book.listPrice.amount}}</p>
      <!-- <p v-if="publishDate" class="bold" v-bind:class="{color: priceColor}">-{{book.listPrice.amount}}</p> -->
      <p class="bold">Authors:</p>
      <ul v-for="author in book.authors" class="bold"><li>{{author}}</li> </ul>
      <p>Publish date: {{book.publishedDate}}</p>
      <p>{{book.description}}</p>
      <p>Page count: {{book.pageCount}}</p>
      <button @click="$emit('close')">Close</button>
    </div>
  </article>
  `,

  data() {
    return {
      // red: false,
      // green: false
    }
  },

  // methods() {
  //   return {
  //     colorsSet() {
  //       if (this.book.listPrice.amount > )
  //     }
  //   }
  // },

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
    price() {
      return this.book.listPrice.amount
    },

    // priceColor() {
    //   if (this.red) {
    //     return true
    //   }
    //   if (this.green) return true

    // }
  }

}