<template>
  <div v-if="msg" class="notification" v-bind:class="[error ? 'is-danger' : 'is-primary']">
    <button class="delete" v-on:click="closeNotification"></button>
    {{ msg }}
  </div>
</template>

<script>
export default {
  props: ['msg','error'],

  methods: {
    closeNotification(event) {

      const $notification = event.target.parentNode;
      $notification.parentNode.removeChild($notification);
    }
  }
}
</script>

<style>

</style>
