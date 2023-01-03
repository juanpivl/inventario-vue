<template>
  <NavBar />
  <div class="d-flex">
    <div class="col-2">
      <NavLateral />
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


import { defineAsyncComponent } from "vue";
export default {
  components: {
    NavBar: defineAsyncComponent(()=> import('../components/NavBar.vue')),
    NavLateral: defineAsyncComponent(() => import('../components/NavLateral.vue'))
  },
};
</script>

<style>
</style>