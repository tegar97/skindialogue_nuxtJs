<template>
  <div class="container text-center error-page">
    <div class="row">
      <div class="col-md-6">
        <img src="./../assets/images/About_1.png" alt="page not found" class="error__image"/>
      </div>
      <div class="col-md-6">
        <div class="d"  v-if="error.statusCode === 404">
           <h1 class="text-danger font-size-3 mt-6">404 :(</h1>
            <h1 class="text-danger font-size-3 mt-6">Page not found</h1>
        </div>
      
       
        <h1 v-else class="text-danger font-size-3 mt-6">An error occurred</h1>
   <nuxt-link to="/" class="btn__costume btn__costume--tertiary bg-danger mt-5">Back To Home page</nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout : 'secondary'
  }
</script>

<style lang="scss" scoped>
.error-page{
    padding: 10rem 0;
}
.error__image{
  width: 100%;
  height: auto;
}
</style>