export const productMixin = {
  data() {
    return {
      products: ["Kasa", "Monitör", "Klavye", "Mouse", "Hoparlör", "Mikrofon"],
      searchText: "",
    };
  },
  computed: {
    filtered(){
      return this.products.filter((element) => {
        return element.toLowerCase().match(this.searchText);
      })
    }
  }
};