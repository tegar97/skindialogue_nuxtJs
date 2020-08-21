<template>

    <footer class="footer">
      <div class="container mb-5 py-5">
        <div class="row pr-5 mt-5">
          <div class="col-12 col-md-5 mb-5">
            <img src='./../assets/images/logoFooter__small.png' class="footer__image" alt="logo skindialogue">
            <p class="text-light footer__text mt-5">SKIN DIA/LO/GUE adalah platform sistem pemasaran produk (barang dan
              jasa) dengan menggunakan skema Reseller – Distributor.<br><br> Platform ini dikembangkan dengan semangat ingin
              membantu para Beauty Blogger dan Healthy Blogger agar bisa mendapatkan penghasilan dari penjualan
              produk,<br> hanya dengan membuat story telling, dan posting content di social media atau chat group.</p>
           <div class="row mt-5 mb-3">
            <h3 class="font-weight-bold ml-3 mt-2">IKUTI KAMI :</h3>
            <div class="col-1">
              <i class="social__media-icon fab fa-facebook-square"></i>
            </div>
            <div class="col-1">
             <i class=" social__media-icon fab fa-instagram"></i>
            </div>
            <div class="col-1">
               <i class="social__media-icon fab fa-youtube"></i>
            </div>
           </div>
          </div>
          <div class="col-12 col-md-3 ml-2  mb-5  ">
            <h5 class="text-light font-size-2 font-weight-bold">LAYANAN PELANGGAN</h5>
            <div class="list-box mt-5">
                  <div class="list__text">
                    <nuxt-link to="/login" class="list-text text-light">Login</nuxt-link>
                    <nuxt-link to="/login" class="list-text text-light">Pendaftaran Member</nuxt-link>
                    <nuxt-link to="/login" class="list-text text-light">Cara Menjadi Reseller</nuxt-link>
                    <nuxt-link to="/login" class="list-text text-light">Lacak Pesanan</nuxt-link>
                    <nuxt-link to="/login" class="list-text text-light">Kamus SKIN DIA/LO/GUE</nuxt-link>
                  </div>
                
                  
                 
            </div>
          
          
          </div>
          <div class="col-12 col-md-2 ml-3  mb-5  ">
            <h5 class="text-light font-size-2 font-weight-bold">Perusahaan</h5>
            <div class="list-box mt-5">
                  <div class="list__text">
                    <nuxt-link to="/login" class="list-text text-light">Tentang Kami</nuxt-link>
                    <nuxt-link to="/login" class="list-text text-light">Produk</nuxt-link>
                    <nuxt-link to="/login" class="list-text text-light">Reseller</nuxt-link>
                    <nuxt-link to="/login" class="list-text text-light">Blog</nuxt-link>
                    <nuxt-link to="/login" class="list-text text-light">Hubungi Kami</nuxt-link>
                  </div>
                
                  
                 
            </div>
          
          
          </div>
          <div class="col-12 col-md-1   mb-5  ">
            <div class="row">
              <div class="col-9">
                  <img src="./../assets/images/Callcenter.png" class="footer__whatsapp " alt="whaatsapp">
              
              </div>
              
                
            </div>
           
          
          
          </div>
        </div>
        
      </div>
      <div class="copyright">
          <div class="container">
            <div class="row">
              <p class="font-size-1 text-light">Copyright ©️ 2020 PT. Dialogue Estetika Indonesia | All Right Reserved tegar</p>
            </div>
          </div>
        </div>
    </footer>
</template>
<style scoped>
.footer{
   
    background-color : #f77b7a 
}
.footer__image{
    width: 20rem;
    
    
}
.footer__list{
  list-style: none;
  margin-right: 100%;
  width: 100%;
}
.footer__whatsapp {
  width: 100%;
  height: 5rem;
}
.footer__text{
  font-size: 1.25rem;
  color : #ffe2db !important;
}
.social__media-icon {
  font-size: 3rem
}
.list__text{
  list-style: none;
 
}
.list-text {
  display: flex;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  color: #ffe2db !important;

}
.copyright{
  background-color: #212121;
  height: auto;
  padding: 1rem 0;
}
</style>