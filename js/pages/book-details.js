
export default {
  props: ['book'],

  template: `
  <article class="book-details">
    <button @click="$emit('close')">Close</button>
    <p>Authors: {{book.authors}}</p>
    <p>Publish date: {{book.publishedDate}}</p>
    <p>Description: {{book.description}}</p>
    <p>Page count: {{book.pageCount}}</p>
  </article>
  `,

  computed: {

  }

}