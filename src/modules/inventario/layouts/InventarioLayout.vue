<template>
  <NavBar />
  <div class="d-flex back">
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
  },
};
</script>

<style scoped>
.back {
  height: 100vh;
  background-color: whitesmoke;
  text-align: center;
}
</style>

