<template>
    <nuxt-link v-bind:to="'/product/'+product.slug" >

        <div class="skeleton"  v-if="isLoading"> </div>
        <div class="product__box pb-2" v-else>
          <img class="product__box-image" :src="getImg" :alt="'Gambar '+product.name">
        
          <h3 class="mt-4 product__box-heading--main" >{{product.name}}</h3>
          <h3 class="mt-2 product__box-heading--sub">{{product.brand.name}}</h3>
          <p class="product__box-price font-weight-bold text-secondary font-size-2">
            {{convertRupiah}}
          </p>
          <p class="product__box-price text-main ">
            Reseller <span class="font-weight-bold">{{convertRupiahReseller}}</span> 
          </p>


        </div>
      </nuxt-link>
</template>
<script>
export default {
  data() {
    return{
       
    }
  },
  props : ['product','isLoading'],
  computed : {
    convertRupiah() {
      
        return "IDR " + this.product.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
    
    },
    convertRupiahReseller() {
      
        return "IDR " + this.product.price_retail.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
    
    },
    getImg(){
        return "https://dev-api.skindialogue.id/storage/" + this.product.photos[0].thumbnail
    }
  },
  
}
</script>
<style lang="scss" scoped>
.product__box{
  
    background-color: #fff;
    text-align: center;
    width: 100%;

    &-image{
        width: 100%;
    }
    &-heading--main {
        font-size: 1.2rem;
        font-weight: 400;
        color: #677788 !important
        
        
    }
    &-heading--sub{
        font-size: 1.4rem;
        font-weight: 300;
        color: #677788;
        width: 100%;
        overflow: hidden;
        padding: 0 10px;
        height: 45px;
        text-overflow: ellipsis;

    }
    &-price {
      font-size: 1.4rem;
      text-align: center;
    }
}
</style>