<template>
  <header    class="  d-none d-sm-none d-md-block ">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      background="#f77b7a"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      
    
   
    >
      <!-- Text slides with image -->
      <b-carousel-slide class="carousel__hero">
        <b-container>
            <div class="row">
                <div class="col-lg-6 ">
                    <img src="./../../assets/images/BannerNoPhoto.png" class="hero__image"  alt="no photo">
                </div>
                <div class="col-lg-6  ">
                    <div class="carousel__text-box">
                        <h1 class="font-size-3 text-light">
                          Mau Stok barang? Bisa! Hasilnya lebih OK lagi
                          
                        </h1>
                        <p class="paragraph mt-4 ">SKIN DIA/LO/GUE punya tim kreatif yang setiap hari siapin konten menarik untuk Kamu bagikan.</p>
                          <nuxt-link to="/register" class="btn__costume btn__costume--tertiary">Join Resseler</nuxt-link>
                    </div>
                  
                </div>
            </div>
        </b-container>
      </b-carousel-slide>
      <b-carousel-slide class="carousel__hero">
        <b-container>
            <div class="row">
                <div class="col-lg-6 ">
                    <img src="./../../assets/images/BannerNoStock.png" class="hero__image"  alt="hero 1">
                </div>
                <div class="col-lg-6  ">
                    <div class="carousel__text-box ">
                        <h1 class="text-light font-size-3">
                       Ga perlu stok barang
                          
                        </h1>
                        <p class="paragraph mt-4 ">Kalau ada yang order ke Kamu, Dropship aja! Barang bisa dikirim ke pembeli langsung atas nama Kamu.</p>
                        <nuxt-link to="/register" class="btn__costume btn__costume--tertiary">Join Resseler</nuxt-link>
                    </div>
                  
                </div>
            </div>
        </b-container>
      </b-carousel-slide>

    
    </b-carousel>

   
  </header>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.carousel-item{

    height: 50rem !important;
        @media only screen and (max-width: 75em) {
          height: 20rem;
         };    //1200px

}

.hero__image{
  width: 100%;
  height: 100%;
}
.carousel__text-box{
  
  margin-top: 30% !important;
  text-align: left;
}

</style>