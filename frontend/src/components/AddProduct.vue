<template>
  <Notification :error="error" :msg="msg"></Notification>
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
      <button class="button is-success" @click="saveProduct"> Save </button>
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

    data(){
      return{
        msg: '',
        error: false,
        name : "",
        price : ""
      }
    },

    methods : {

      async saveProduct() {

        try {
          const authStore = useAuthStore();
          await authStore.getToken();
          await axios.post(
              "http://localhost:8000/products",
              {
                name: this.name,
                price: this.price },
              {
                headers: {"Authorization": `Bearer ${authStore.token}`}
              }
          );
          this.name = "";
          this.price = "";
          this.$router.push("/")
        } catch (err) {
          console.log(err);
          this.error = true;
          this.msg = err;
        }
      }
    }
  };
</script>

<style>

</style>
