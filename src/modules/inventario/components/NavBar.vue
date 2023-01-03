<template>
  <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img 
                src="@/assets/logo.png" 
                alt="Vue logo"
                height="24" 
                class="d-inline-block align-text-top mx-2">
            Daybook
        </a>
        
                <button  @click="exitToApp" class="btn btn-outline-info" >
                    <h1>exit(meter icono)</h1>
                </button>
           

    </nav>
</template>

<script>
export default {
    methods:{
        exitToApp(){
            this.$router.push({name:'authLayout'})
        }
    }

}
</script>

<style>

</style>