<template>
  <div>
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

export default {
  data() {
    return {
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
        const response = await axios.get("http://localhost:8000/products/" + this.$route.params.id)
        this.name = response.data.name;
        this.price = response.data.price;
      } catch (err) {
        console.log(err);
      }
    },
    async updateProduct() {
      try {
        const response = await axios.put(
            "http://localhost:8000/products/" + this.$route.params.id,
            {
              name:this.name,
              price:this.price
            }
        );
        this.name = "";
        this.price = ""
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style></style>
