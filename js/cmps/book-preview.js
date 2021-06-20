
export const bookPreview = {
  props: ['book'],

  template: `
    <li class="book-preview">
        <p class="book-title">{{book.title}}</p>
        <p>Price: {{book.listPrice.amount}} {{currency}}</p>
    </li>
  
  `,

  computed: {
    currency() {
      return this.book.listPrice.currencyCode
    }
  },

}