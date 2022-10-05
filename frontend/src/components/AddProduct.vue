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
      <button class="button is-success" @click="saveProduct"> Save </button>
    </div>
  </div>
</template>

<script>
  //import axios
  import axios from "axios";
  export default {
    data(){
      return{
        name : "",
        price : ""
      }
    },
    methods : {
      async saveProduct() {
        try {
          await axios.post("http://localhost:8000/products", {
            name: this.name,
            price: this.price
          });
          this.name = "";
          this.price = "";
          this.$router.push("/")
        } catch (err) {
          console.log(err)
        }
      }
    }
  };
</script>

<style>

</style>
