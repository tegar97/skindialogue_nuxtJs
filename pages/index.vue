<template>
      <div>
        <ticker />
        <hero />
        <feature />
        <section class="section-product">
          <div class="text-center">
            <h2 class="heading-secondary mb-5  text-dark">Our Products</h2>
          </div>

          <div class="container ">

            <div class="row mt-5 " >
              <div class="col-6 col-md-3 mb-4" v-for="product in products" :key="product.id">
                <div v-if="product">
                      <productCard :product="product"/> 
                </div>
               

              </div>
              <div  v-if="!products.length">
                  <h1>Tidak ada data</h1>
              </div>



            </div>
            <div class="d-flex justify-content-center">
              <nuxt-link to="/products" href="/products" class="btn__costume btn__costume--grey">View Product</nuxt-link>
            </div>

          </div>

        </section>
        <partner />
        <Reseller />
        <blog />
        <categories />
        <courier />
      </div>
</template>


<script>
import axios from 'axios';
import productCard from './../components/product-card';

export default{

   data() {
       return{
           search : '',
           products: [],
         
       }
   },
   
   components:{
     productCard
   },
    async asyncData() {
        
        const {data} = await axios.get('https://dev-api.skindialogue.id/api/v1/public/products?page=1&limit=6')
        return { products : data.data }
   



    },

    

}
</script>
<style lang="scss" scoped>
.section-product{
    padding: 7rem 0;
    background-color: #F7F7F7;
}


</style>