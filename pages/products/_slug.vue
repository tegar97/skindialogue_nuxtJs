<template>
    <section class="section-products">
      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-5" >
            <category/>
          </div>
          <div class="col-md-9">
            <div class="row  mb-4">
              <div class="col-md-2 ">
              <nuxt-link to="/products" class=" btn__costume btn__costume--main nav-button  ">All Brands</nuxt-link>
              </div>
              <div class="col-md-3 ">
                <button class="btn__costume btn__costume--main nav-button bg-secondary  " :click="brandName = 'tes'">consequatur aliquid</button>
              </div>
             
            </div>
            <div class="d-flex align-item-center search ">

              <div class="form__group col-12">

                <input id="cari" name="cari" class="form__input" placeholder="Cari..." type="text" v-model="search" >
                <i class=" fas fa-search "></i>
                <label for="cari" class="form__label">Kita Menumakan {{filterProduct.length}} produk</label>
              </div>
            </div>
             
            <div class="row mt-3"   >
                <div class="col-6 col-md-4 mb-4" v-for="product in filterProduct" :key="product.id" >
                    <product-card  :product="product " :isLoading="isLoading" /> 
                </div>
            </div>
           <div class="col-12 text-center mt-5 pagination-box " >
             <pagination :currentPage="currentPage" :totalProps="totalData" :perPageProps="perPage" :getPostData="getPostData" />
              
           </div>
              <p class="mt-3 ml-3 text-dark">Current Page: {{ totalData }}</p>

          </div>
        </div>
      </div>
    </section>
</template>
<script>
import axios from 'axios'

export default{
    
   data() {
       return{
           search : '',
           products: [],
           brandName : 'brand-consequatur-aliquid',
           perPage : 16,
           currentPage: 1,
           isLoading: false,
         
           meta: [],
           categorySlug : this.$route.params.slug
   
         
       }
   },
 
 
     async asyncData({route}) {
      
        const {data} = await axios.get(`https://dev-api.skindialogue.id/api/v1/public/products?category=${route.params.slug}`)
        return { totalData : data.meta.total}
      
      
    },

    methods: {
      getPostData(currentPage) {
         this.isLoading = true
          axios.get(`https://dev-api.skindialogue.id/api/v1/public/products?category=${this.categorySlug}&page=${currentPage}` )
          .then(res => (this.products = res.data.data))
  
          .catch(e => {this.errors.push(e)})
          .finally(() => (this.isLoading = false));
         

         }
         
    },
        computed : {
         filterProduct() {
               
           return this.products.filter(products => {
             return products.name.toLowerCase().includes(this.search.toLowerCase())
           })
         },
        
      
      
    },
    mounted(currentPage) {
  
      this.getPostData(currentPage)
   
    },
   

      
      
    
    

}
</script>
<style lang="scss" >
.section-products{
    background-color: #f7f7f7;
    padding: 10rem 0;
    height: auto;
}

.fa-search{
   position: absolute;
   margin-top: -2.5rem;
   color: #f77b7a;
   font-size: 1.4rem;
   margin-left: 1.1rem;
}
.page-item.active .page-link {
  background-color: #f77b7a !important;
  border: none !important;
  outline: none;
  color: #fff !important;
  

  
}
.pagination-box{
  display: flex;
  justify-content: flex-start;
 

}
.page-item.active .page-link:active{
   border: none !important;
  outline: none;
}
.pagination-lg{
  width: 10px !important;
}
.page-link{
    color:  #677788 !important;
    width:  4rem !important;
    height: 4rem !important;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>