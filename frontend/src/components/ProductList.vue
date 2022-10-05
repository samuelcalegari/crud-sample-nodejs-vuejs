<template>
  <div>
    <router-link :to="{name: 'create'}" class="button is-success mt-5"> Add New</router-link>
     <table class="table is-striped is-bordered mt-2 is-fullwidth">
       <thead>
        <tr>
          <th>Product Name</th>
          <th class="has-text-centered">Price</th>
          <th class="has-text-centered">Actions</th>
        </tr>
       </thead>
       <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>
            {{ item.name }}
          </td>
          <td>
            {{ item.price }}
          </td>
          <td class="has-text-centered">
            <router-link :to="{name: 'edit', params: {id: item.id}}" class="button is-info is-small">Edit</router-link>
            <a href="" class="button is-danger is-small ml-1" @click="deleteProduct(item.id)"> Delete</a>
          </td>
        </tr>
       </tbody>
     </table>
  </div>
</template>

<script>
//import axios
import axios from "axios";

export default{
  data() {
    return{
      items: []
    }
  },
  created() {
    this.getProducts();
  },
  methods: {
    //get all products
    async getProducts(){
      try{
        const response = await axios.get("http://localhost:8000/products");
        this.items = response.data;
        console.log(this.items);
      } catch (err) {
        console.log(err)
      }
    },
    // delete product
    async deleteProduct(id) {
      try{
        await axios.delete("http://localhost:8000/products/" + id);
        await this.getProducts();
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>
