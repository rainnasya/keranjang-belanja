<template>
    <div class="container">
      <h1>Keranjang Belanja</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Jumlah</th>
            <th>Harga</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="index">
            <td style="padding: 10px">{{ item.name }}</td>
            <td style="padding: 10px">{{ item.quantity }}</td>
            <td style="padding: 10px">Rp. {{ item.price * item.quantity }}</td>
            <td style="padding: 10px">
              <button @click="removeFromCart(index)" class="btn btn-danger mt-3">Delete</button>
            </td>
          </tr>
          <tr>
            <td style="font-weight: bold">Total</td>
            <td colspan="1"></td>
            <td style="font-weight: bold">Rp. {{ calculateTotalPrice() }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="checkout" class="btn btn-success mt-3">Checkout</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['cart'],
    methods: {
      removeFromCart(index) {
        this.$emit('remove-from-cart', index);
      },
      calculateTotalPrice() {
        let totalPrice = 0;
        this.cart.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
      },
      checkout() {
        const total = this.calculateTotalPrice();
        alert(`Total harga pesanan Anda adalah: Rp. ${total}`);
      }
    }
  };
  </script>
  