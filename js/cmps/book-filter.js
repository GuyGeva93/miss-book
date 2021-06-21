
export default {
  template: `
    <section class="book-filter">
      <input v-model="filterBy.byName" type="text" @input="filter" placeholder="Search..">
    </section>
  
  `,

  data() {
    return {
      filterBy: {
        byName: ''
      }
    }
  },

  methods: {
    filter() {
      this.$emit('filtered', this.filterBy);
    }
  }
}