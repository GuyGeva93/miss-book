
export default {
  template: `
  <section class="review-add">
    <h3>Enter your book review</h3>
    <form class="review-add-form">
      <label>Full name:</label>
      <input type="text">
      <label>Rating:</label>
      <select name="rate">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <label>Read at:</label>
      <input type="date" >
      <textarea cols="30" rows="10" placeholder="Tell us more.."></textarea>
      <button>Submit</button>
    </form>
  </section>`,



}