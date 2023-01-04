
<template>
  <div class="login-form centrado">
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
          <button type="submit" class="btn btn-primary" @click="goToInventario">
            Iniciar sesión
          </button>
             | 
          <router-link to="/registro">No tienes cuenta?</router-link>
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
  
<style scoped>
.login-form {
  max-width: 330px;
  margin: 0 auto;
  padding: 15px;
}

.centrado {
  position:fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
  