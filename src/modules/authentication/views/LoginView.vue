<template>
  <h1>Login view</h1>
  <h1>Aqui se va decorar de otra forma pero igual que el registro</h1>

  <input type="text" placeholder="Correo">
  <input type="password" placeholder="contraseña">

  <button @click="goToInventario">Ingresarrr (luego se pone la funcion)</button>
  <router-link to="/registro">No tienes cuenta?</router-link>
</template>

<script>
export default {
    methods:{
        goToInventario(){
            this.$router.push({name:'inicio'})
        }
    }
}
</script>

<style>

</style>