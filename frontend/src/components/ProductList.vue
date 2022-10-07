<template>
  <Notification :error="error" :msg="msg"></Notification>
  <div v-if="!error">
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
          <a class="button is-danger is-small ml-1" href="#" @click="deleteProduct(item.id)"> Delete</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//import axios
import axios from "axios";
//import store
import {useAuthStore} from "@/store";
import Notification from "@/components/Notification";

export default {
  components: {Notification},

  data() {
    return {
      msg: '',
      error: false,
      items: [],
      authStore: null,
    }
  },

  created() {
    this.getProducts();
  },

  methods: {
    //get all products
    async getProducts() {

      const authStore = useAuthStore();
      await authStore.getToken();

      try {
        const response = await axios.get(
            process.env.VUE_APP_API_ENDPOINT + "/products",
            {
              headers: {"Authorization": `Bearer ${authStore.token}`}
            }
        );
        this.items = response.data;
        console.log(this.items);
      } catch (err) {
        console.log(err);
        this.error = true;
        this.msg = err;
      }
    },

    // delete product
    async deleteProduct(id) {

      try {
        const authStore = useAuthStore();
        await authStore.getToken();

        await axios.delete(
            process.env.VUE_APP_API_ENDPOINT + "/products/" + id,
            {
              headers: {"Authorization": `Bearer ${authStore.token}`}
            });
        await this.getProducts();
      } catch (err) {
        console.log(err);
        this.error = true;
        this.msg = err;
      }
    },

  }
}
</script>

<style>

</style>
