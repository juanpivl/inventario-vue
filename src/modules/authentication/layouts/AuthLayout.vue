<template>
  <h1>pagina completa del auth</h1>
  <button @click="goToLogin"> Login</button>

  <button @click="goToRegister"> Registtro</button>

</template>

<script>
export default {
    methods: {
        goToLogin(){
            this.$router.push({name: 'login'})
        },
        goToRegister(){
            this.$router.push({name: 'registro'})
        }
    }
}
</script>



<style scoped> /*Scoped es para mantener el stilo aqui*/

</style>