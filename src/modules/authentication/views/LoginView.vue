
<template>
  <div class=" centrado">
    <form class="form-horizontal">
      <h2>Iniciar sesión</h2>
      <div class="form-group">
        <label for="email" class="control-label col-xs-2"
          >Correo Electronico</label
        >
        <div class="col-xs-10">
          <input
            type="text"
            class="form-control"
            id="email"
            v-model="email"
            required
          />
        </div>
      </div>
      <div class="form-group">
        <label for="password" class="control-label col-xs-2">Contraseña</label>
        <div class="col-xs-10">
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            required
          />
        </div>
      </div>
      <br />
      <div class="form-group">
        <div class="col-xs-offset-2 col-xs-10">
          <button type="submit" class="btn button" @click="goToInventario">
            Iniciar sesión
          </button>
             | 
          <router-link to="/registro" class="router-link">No tienes cuenta?</router-link>
        </div>
      </div>
    </form>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Aquí iría el código para iniciar sesión
      // utilizando el nombre de usuario y la contraseña
      // proporcionados por el usuario
    },
    goToInventario() {
      if (this.email && this.password) {
        return this.$router.push({ name: "inicio" });
      }

      
    },
  },
};
</script>
  
<style >


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

.router-link{
  color: black;
}

</style>
  