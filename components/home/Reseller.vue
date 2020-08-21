<template>
    <section class="section-joinReseller">
      <div class="text-center">
        <h2 class="heading-secondary mb-5 text-light">Join Our Reseller Program</h2>
        <p class="text-light paragraph">ingin menjalankan bisnis sendiri tanpa ribet ? <br> Ingin menjalankan bisnis
          dari smartphone dan bekerja di rumah ?</p>
      </div>
      <div class="container">
        <div class="row text-center">
          <div class="col-12 col-md-6 col-lg-3 reseller__box">
            <div class=" reseller__image">
              <img src="./../../assets/images/Formulir_Small.png" alt="formulir small">
              <p class="font-size-1  mt-4 text-center">
                isi Formulir<br>
                <nuxt-link to="/register"><a class="font-size-1 text-light "><u>"PENDAFTARAN MEMBER"</u></a></nuxt-link>
              </p>

            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 reseller__box">
            <div class="reseller__image ">
              <img src="./../../assets/images/Verifikasi_Small.png" alt="verifikasi small">
              <p class="font-size-1 text-center mt-4">Verifikasi <br>Email & No. HPr</p>

            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="reseller__image reseller__box ">
              <img src="./../../assets/images/Login_Small.png" alt="Login small">
              <p class="text-light paragraph mt-4">Login ke aplikasi</p>
              <nuxt-link to="/register"><a class="font-size-1 text-light "><u>"my.skindialogue.id"</u></a></nuxt-link>

            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 reseller__box">
            <div class="reseller__image ">
              <img src="./../../assets/images/FormulirReseller_Small.png" alt="formulir reseller">
              <p class="text-light paragraph mt-4">Isi Formulir <br> "DAFTAR RESELLER"</p>

            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3  ml-auto  reseller__box">
            <div class="reseller__image ">
              <img src="./../../assets/images/VerifikasiData_Small.png" alt="Verfikasi data small">
              <p class="text-light paragraph mt-4">Verifikasi data <br>oleh admin</p>

            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 reseller__box">
            <div class="reseller__image ">
              <img src="./../../assets/images/Verifikasi_Small.png" alt="Lakukan pembelanjaan">

              <p class="text-light paragraph mt-4">Lakukan Pembelanjaan</p>

            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 mr-auto reseller__box">
            <div class="reseller__image ">
              <img src="./../../assets/images/MemberRecurrent_Small.png" alt="">
              <p class="text-light paragraph mt-4">Lakukan pembayaran <br>MEMBER otomatis menjadi RESELLER</p>

            </div>
          </div>

        </div>
        <div class="text-center">
            <nuxt-link to="/register" class="btn__costume btn__costume--tertiary mt-3">Daftar Resseler</nuxt-link>
        </div>
        
      </div>

    </section>
</template>

<style lang="scss" scoped>
.section-joinReseller {
    padding: 10rem 0;
    background-image: url('./../../assets/images/bg-section.png');
    background-color: #f77b7a;  
    height: auto;
}
.reseller__image{
    padding: 1rem 0;
    img{
  
        max-width: 100%;
        height: 15rem

    }
}
.reseller__box{
    padding-top: 2rem;
}
</style>