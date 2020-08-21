<template>
    <section class="section-product">
      <div class="container">
          <div class="row">
              <div class="col-12 col-md-6 col-lg-6">
         
                    <img class="product__image" :src="'https://dev-api.skindialogue.id/storage/' + this.products.photos[0].thumbnail"  :alt="'Gambar '+products.name">
              </div>
              
              <div class="col-12 col-md-6 col-lg-6 ">
                  <h1 class="font-size-3  text-dark   ">{{products.name}}</h1>
               
                     <b-breadcrumb :items="items" class="bg-transparent  font-size-2 "></b-breadcrumb>
                     <h5 class="text-dark font-weight-bold font-size-2">Harga Member</h5>
                      <p class=" text-dark font-size-3 font-weight-light">
                    
                              {{convertRupiah}}
                </p>
                                <h5 class="text-dark font-weight-bold font-size-2">Harga Member</h5>
                <p class="text-main font-size-3 font-weight-light ">
                   IDR 44.500 + Point
                </p>
              </div>
              <div class="col-12">
                <div class="card mt-5 p-5">
                  <div class="spefikasi__product border-bottom">
                      <h4 class="text-dark font-size-2 font-weight-bold mt-3 ">Spesifikasi Produk</h4>
                    <div class="row mt-5 ">
                      <div class="col-md-2 "><p class="text-dark paragraph">Kategori</p></div>
                      <div class="col-md-4 "><nuxt-link v-bind:to="'/products/'+products.category.slug " class="text-primary paragraph">{{products.category.name }}</nuxt-link></div>
                    </div>
                    <div class="row  ">
                      <div class="col-md-2 "><p class="text-dark paragraph">Merek</p></div>
                      <div class="col-md-4 "><a class="text-primary paragraph">{{products.brand.name }}</a></div>
                    </div>
                    <div class="row  ">
                      <div class="col-md-2 "><p class="text-dark paragraph">Stock</p></div>
                      <div class="col-md-4 "><a class="text-dark text-primary paragraph">{{products.stock }}</a></div>
                    </div>
                    <div class="row  ">
                      <div class="col-md-2 "><p class="text-dark paragraph">Berat</p></div>
                      <div class="col-md-4 "><a class="text-dark text-primary paragraph">{{products.weight + ' KG'}}</a></div>
                    </div>
                  </div>
                 <h4 class="text-dark font-size-2 font-weight-bold mt-6 ">Details</h4>
                 <p class="text-dark  paragraph mt-2">{{products.description}}</p>
              
                </div>
              </div>

          </div>
      </div>
    </section>
</template>
<script>
 import axios from 'axios'
 export default {
  
    data() {
      return {
        items: [
          {
            text: 'perawatan wajah',
            href: '#'
          },
          {
            text: 'serum wajah',
            href: '#'
          }
        ],
        products : []
      }
     
    },
   
    async asyncData({route}) {
        const {data} = await axios.get(`https://dev-api.skindialogue.id/api/v1/public/products/${route.params.slug}`)
        return { products : data.data }
       
    },
     computed : {
         convertRupiah() {

             return "IDR " + this.products.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")

           },
           convertRupiahReseller() {

             return "IDR " + this.products.price_retail.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
    }
    },
  }
  
</script>
.<style lang="scss" scoped>


.section-product{
    padding: 10rem 0;
}
.product__image{
    width: 100%;
    height: auto;
}
.breadcrumb-item{
    a{
        color: pink
    }
}


</style>