const app = Vue.createApp({
    data() {
        return{ 
        cart:0,
        product: 'Phone',
        brand: 'Vivo Y11',
        selectedVariant: 0,
        sizes: ['Small', 'Medium', 'Large'],
        variants: [
              { id: 2234, color: 'red', image: 'phone1_red.png', quantity:50 },
              { id: 2235, color: 'green', image: 'phone2_green.png', quantity: 0 },
        ],
        onSale: true
    }
  },
  methods :{
      addToCart() {
          this.cart += 1
      },
      removeItems(){
           this.cart -= 1
      },
      updateVariant(index) {
          this.selectedVariant = index
          
      }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        saleMessage() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
    }
  
})