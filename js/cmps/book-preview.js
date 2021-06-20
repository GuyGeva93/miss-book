
export const bookPreview = {
  props: ['book'],

  template: `
    <div class="book-preview">
        <p class="book-title">{{book.title}}</p>
        <p>Price: {{book.listPrice.amount}}</p>
    </div>
  
  `,

}