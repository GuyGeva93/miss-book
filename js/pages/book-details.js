import { bookService } from '../services/book-service.js'
import reviewAdd from './review-add.js'
import reviewList from '../cmps/review-list.js'

export default {
  template: `
  <article class="book-details" v-if="book">
    <section class="book-details-info">
      <router-link to="/book">Close</router-link>
      <h2 class="book-details-title">-{{book.title}}-</h2>
      <p v-if="countPages" class="bold">-{{countPages}}</p>
      <p v-if="publishDate" class="bold">-{{book.publishedDate}}</p>
      <h3> Authors: {{authors}} </h3>
      <p>Publish date: {{publishDate}}</p>
      <p>{{book.description}}</p>
      <p>Page count: {{book.pageCount}}</p>
      <review-add @addReview="addReview"/>
      <review-list :reviews="getBookReviews" @remove="removeReview" > </review-list>
    </section>
    <section class="book-details-img">
      <img :src="book.thumbnail">
    </section>
  </article>`,

  data() {
    return {
      book: null
    }
  },

  created() {
    const { bookId } = this.$route.params;
    bookService.getBookById(bookId)
      .then(book => this.book = book)
      .catch(err => console.log(err))
  },

  methods: {
    addReview(review) {
      debugger
      bookService.addReview(this.book.id, review)
        .then(book => {
          this.book = book
          // const msg = {
          //   txt: 'Your review was successfully added!',
          //   type: 'success',
          //   linkTitle: 'Check this book out',
          //   link: '/book/' + this.book.id
          // };
          // eventBus.$emit('show-msg', msg);
        })
        .catch(err => console.log(err))
      // eventBus.$emit('show-msg', msg);
    },
    removeReview(reviewId) {
      bookService.removeReview(this.book.id, reviewId).then(book => {
        this.book = book;
      })
    },
  },

  computed: {
    authors() {
      return this.book.authors.join(' and ');
    },
    publishDate() {
      let countYear = new Date().getFullYear() - this.book.publishedDate
      if (countYear > 10) return 'Veteran book'
      if (countYear < 1) return 'New book!'
      return null
    },
    countPages() {
      if (this.book.pageCount > 500) return 'Long reading'
      if (this.book.pageCount > 200) return 'Decent reading'
      if (this.book.pageCount > 500) return 'Light reading'
      return null
    },
    getBookReviews() {
      return this.book.reviews
    },
  },

  components: {
    reviewAdd,
    reviewList,
  }
}


// computed: {


//   // },
//   price() {
//     return this.book.listPrice.amount
//   }
// },