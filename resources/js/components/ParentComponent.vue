<template>
    <div>
      <product-list :products="products" @add-to-cart="addToCart"></product-list>
      <shopping-cart :cart="cart" @remove-from-cart="removeFromCart"></shopping-cart>
    </div>
  </template>
  
  <script>
  import ProductList from './ProductList.vue';
  import ShoppingCart from './ShoppingCart.vue';
  
  export default {
    components: {
      ProductList,
      ShoppingCart
    },
    data() {
      return {
        products: [
          {
            name: 'Indomie Goreng Rendang',
            description: 'Masakan instan terenak di dunia',
            stock: 10,
            price: 3900
          },
          {
            name: 'Mie Gelas Rendang',
            description: 'Mie instant khusus anak kosan',
            stock: 3,
            price: 1500
          },
          {
            name: 'Bakmi Mewah',
            description: 'Kalau anak kosan jangan macam2 deh',
            stock: 80,
            price: 10000
          }
        ],
        cart: []
      };
    },
    methods: {
      addToCart(product) {
        if (product.stock > 0) {
          const existingItemIndex = this.cart.findIndex(item => item.name === product.name);
          if (existingItemIndex !== -1) {
            this.cart[existingItemIndex].quantity++;
          } else {
            this.cart.push({ name: product.name, quantity: 1, price: product.price });
          }
          product.stock--;
        }
      },
      removeFromCart(index) {
        const item = this.cart[index];
        const productIndex = this.products.findIndex(product => product.name === item.name);
        this.products[productIndex].stock += item.quantity;
        this.cart.splice(index, 1);
      }
    }
  };
  </script>
  