<template>
  <div class="centrado">
    <form class="form-horizontal">
      <h2>Registrate</h2>
      <div >
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
      <div >
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
      <div >
        <div class="col-xs-offset-2 col-xs-10">
          <button type="submit" class="btn button" @click="goToLogin">
            Registrar
          </button>
          |
          <router-link to="/login" class="router-link">Ingresar</router-link>
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

    
      goToLogin() {
        if (this.email && this.password) {
          return this.$router.push({ name: "login" });
        }
      },
    
  },
};
</script>

<style>
</style>