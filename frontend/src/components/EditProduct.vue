<template>
  <Notification :error="true" :msg="msg"></Notification>
  <div v-if="!error">
    <div class="field">
      <label for="" class="label">Name</label>
      <div class="control">
        <input
            type="text"
            class="input"
            placeholder="Name"
            v-model="name"
        >
      </div>
    </div>
    <div class="field">
      <label for="" class="label">Price</label>
      <div class="control">
        <input
            type="text"
            class="input"
            placeholder="Price"
            v-model="price"
        >
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updateProduct"> Update</button>
    </div>
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
        name: "",
        price: ""
      }
    },

    created() {
      this.getProductById();
    },

    methods: {

      async getProductById() {

        try {
          const authStore = useAuthStore();
          await authStore.getToken();
          const response = await axios.get(
              process.env.VUE_APP_API_ENDPOINT + "/products/" + this.$route.params.id,
              {
                headers: {"Authorization": `Bearer ${authStore.token}`}
              }
          )
          this.name = response.data.name;
          this.price = response.data.price;
        } catch (err) {
          console.log(err);
          this.error = true;
          this.msg = err;
        }
      },

      async updateProduct() {

        try {
          const authStore = useAuthStore();
          await authStore.getToken();
          const response = await axios.put(
              process.env.VUE_APP_API_ENDPOINT + "/products/" + this.$route.params.id,
              {
                name:this.name,
                price:this.price
              },
              {
                headers: {"Authorization": `Bearer ${authStore.token}`}
              }
          );
          this.name = "";
          this.price = ""
          this.$router.push("/");
        } catch (err) {
          console.log(err);
          this.error = true;
          this.msg = err;
        }
      }
    }
  };
</script>

<style></style>
