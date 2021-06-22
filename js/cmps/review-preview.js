export default {
  props: ['review'],

  template: `
    <div class="review-preview">
        <h2>By {{review.name}}</h2>
        <h3>Rate: {{review.rate}}</h3>
        <h3>Created on: {{review.date}} </h3>
        <p> {{review.text}} </p>
    </div>
    `,
};