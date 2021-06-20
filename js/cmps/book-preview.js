
export const bookPreview = {
  props: ['book'],

  template: `
    <li class="book-preview">
        <p class="book-title">{{book.title}}</p>
        <p>{{currency}}{{book.listPrice.amount}} </p>
    </li>
  
  `,

  data() {
    return {
      ILS: '₪',
      USD: '$',
      EUR: '€'
    }
  },

  computed: {
    currency() {
      const currCurrency = this.book.listPrice.currencyCode
      return this[currCurrency]
    }
  },

}