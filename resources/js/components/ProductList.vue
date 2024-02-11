<template>
    <div class="container">
      <h1>Daftar Produk</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Deskripsi</th>
            <th>Stok</th>
            <th>Harga</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.name">
            <td style="padding: 10px">{{ product.name }}</td>
            <td style="padding: 10px">{{ product.description }}</td>
            <td style="padding: 10px">{{ product.stock }}</td>
            <td style="padding: 10px">Rp. {{ product.price }}</td>
            <td style="padding: 10px">
              <button @click="addToCart(product)" :disabled="product.stock === 0" class="btn btn-primary mt-3">Add to cart</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: ['products'],
    methods: {
      addToCart(product) {
        this.$emit('add-to-cart', product);
      }
    }
  };
  </script>
  