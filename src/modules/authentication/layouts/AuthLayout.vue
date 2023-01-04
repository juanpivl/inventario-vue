<template >
  <div class="container centrado ">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1>pagina completa del auth</h1>

        <div class="d-grid gap-2 col-6 mx-auto">
            <button @click="goToLogin"  class="btn btn-primary ">Login</button>
            <button @click="goToRegister" class="btn btn-secondary">Registtro</button>
        </div>

      </div>
    </div>
  </div>

  
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push({ name: "login" });
    },
    goToRegister() {
      this.$router.push({ name: "registro" });
    },
  },
};
</script>



<style scoped>


.centrado {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


</style>