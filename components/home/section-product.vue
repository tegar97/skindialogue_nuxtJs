<template>
    <section class="section-product">
      <div class="text-center">
        <h2 class="heading-secondary mb-5  text-dark">Our Products</h2>
      </div>

      <div class="container ">

        <div class="row mt-5 " v-for="product in products" :key="product.id">
         <div class="col-6 col-md-3 mb-4"    >
                  <h1 class="text-primary">tes</h1>

           </div>
         
       

        </div>
        <div class="d-flex justify-content-center">
          <a href="/products" class="btn__costume btn__costume--grey">View Product</a>
        </div>

      </div>

    </section>
</template>
<script>
import axios from 'axios';
export default{

   data() {
       return{
           search : '',
           products: [],
       }
   },
    async asyncData() {
        const {data} = await axios.get('https://dev-api.skindialogue.id/api/v1/public/products?page=1&limit=16')
        return { products : data.data }
        console.log(products)
    },
    

}
</script>
<style lang="scss" scoped>
.section-product{
    padding: 7rem 0;
    background-color: #F7F7F7;
}


</style>