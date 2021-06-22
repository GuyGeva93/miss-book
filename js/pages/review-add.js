
export default {
  template: `
  <section class="review-add">
    <h3>Enter your book review</h3>
    <form @submit.prevent="submitReview" class="review-add-form">
      <label>Full name:</label>
      <input v-model="review.name" type="text" required>
      <label>Rating:</label>
      <select v-model="review.rate" name="rate" required>
        <option value="" selected disabled hidden></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <label>Read at:</label>
      <input v-model="review.date" type="date" required>
      <textarea v-model="review.text" cols="30" rows="10" placeholder="Tell us more.." required></textarea>
      <button>Submit</button>
    </form>
  </section>`,

  data() {
    return {
      review: {
        name: null,
        rate: null,
        date: null,
        text: null
      },
      reviews: false
    }
  },

  methods: {
    submitReview() {
      this.$emit('addReview', this.review)
      this.review = {
        readerName: null,
        rating: null,
        readAt: null,
        text: null
      }
    },
  }






}