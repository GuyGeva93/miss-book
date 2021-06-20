
export const bookPreview = {
  props: ['book'],

  template: `
  <div class="book-preview">
        <p>Vendor: {{book.title}}</p>
        <p>Max speed: {{book.listPrice.amount}}</p>
    </div>
  
  `,

}