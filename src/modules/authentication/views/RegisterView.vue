<template>
  <h1>Register view</h1>
  <input type="text" placeholder="Nombre">
  <input type="text" placeholder="Correo">
  <input type="password" placeholder="contraseña">

<!--Redirige al login pero luego registrara al usuario-->
  <button @click="goToLogin">Registrar (luego se pone la funcion)</button>
</template>

<script>
export default {

    methods:{
        goToLogin(){
            this.$router.push({name: 'login'})
        },
    }
}
</script>

<style>

</style>