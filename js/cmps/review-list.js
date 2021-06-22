import reviewPreview from "./review-preview.js";


export default {
  props: ['reviews'],
  template: `
  <ul class="review-list clean-list">
      <li v-for="review in reviews" :key="review.id" class="review-preview-container">
          <button @click="remove(review.id)">✖</button>
          <review-preview :review="review" />
      </li>
  </ul>
  `,

  methods: {
    remove(reviewId) {
      console.log('removing review...', reviewId);
      this.$emit('remove', reviewId);
    },
  },
  components: {
    reviewPreview
  }
}
