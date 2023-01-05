<template >
  <div class="container centrado ">
    
      <div >
        <h1>Bienvenido a tu inventario!</h1>

        <div class="d-grid gap-2 col-6 mx-auto">
            <button @click="goToLogin"  class="btn button ">Login</button>
            <button @click="goToRegister" class="btn button">Registro</button>
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
  width:300px;
  padding-right: 20px;
  padding-left:20px;
  padding-bottom: 15px;
  padding-top: 10px;
  border-radius: 20px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  background-color: white;
  text-align: center;
}

.button{
  color: black;
  font-family:Arial, Helvetica, sans-serif;
  background-color: coral;
  
}
.button:hover {
    background-color: #4CAF50; /* Green */
    color: white;
}


</style>