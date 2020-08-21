<template>
    <div class="section-partner">
        <div class="text-center">
            <h2 class="heading-secondary mb-5 text-dark ">Our Partner</h2>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
                  <div class="partner__box mt-5">
                    <div class="row text-center">
                      <div class="col-12 col-md-12 col-lg-4 ">
                        <div class="partner__box-avatar mt-4">
                          <img src="./../../assets/images/partner-1.png" alt="partner">
                        </div>


                      </div>
                      <div class="col-12 col-md-12 col-lg-8">
                        <div class="partner__box-info text-center p-4" >
                            <img src="./../../assets/images/dni_logo.png"  alt="Dni logo">
                            <h3 class="paragraph text-dark mt-3 ">By: DR. dr I Gusti Nyoman Darmaputra <br>  SpKK (K), FINSDV, FAADV</h3>
                        </div>
                       
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-12 col-md-6">
                  <div class="partner__box mt-5">
                    <div class="row text-center">
                      <div class="col-12 col-md-12 col-lg-4 ">
                        <div class="partner__box-avatar mt-4">
                          <img src="./../../assets/images/partner-2.png" alt="partner 2"> 
                        </div>


                      </div>
                      <div class="col-12 col-md-12 col-lg-8">
                        <div class="partner__box-info text-center mt-6   " >
                            <img src="./../../assets/images/simplysiti.png"  alt="logo simlysiti" >
                            <span class="paragraph text-dark mt-3 ">By: Siti</span>
                        </div>
                       
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-12 col-md-6">
                  <div class="partner__box mt-5">
                    <div class="row text-center">
                      <div class="col-12 col-md-12 col-lg-4 ">
                        <div class="partner__box-avatar mt-4">
                          <img src="./../../assets/images/partner-3.png" alt="partner 3">
                        </div>


                      </div>
                      <div class="col-12 col-md-12 col-lg-8">
                        <div class="partner__box-info text-center p-4" >
                            <img src="./../../assets/images/isis.png" alt="isis pharma logo" >
                            <span class="paragraph text-dark mt-3 ">By: Grégoire Dewavrin</span>
                        </div>
                       
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-12 col-md-6">
                  <div class="partner__box mt-5">
                    <div class="row text-center">
                      <div class="col-12 col-md-12 col-lg-4 ">
                        <div class="partner__box-avatar mt-4">
                          <img src="./../../assets/images/partner-4.png" alt="partner 4">
                        </div>


                      </div>
                      <div class="col-12 col-md-12 col-lg-8">
                        <div class="partner__box-info text-center p-4" >
                            <img src="./../../assets/images/natural-logo.png" alt="natural logo">
                            <span class="paragraph text-dark mt-3 ">By: Aura Kasih</span>
                        </div>
                       
                      </div>
                    </div>
                  </div>
            </div>
          

            </div>
        </div>
       
        
    </div>
</template>
<style lang="scss" scoped>
.section-partner{
    padding : 7rem 0;
    background-color: #F7F7F7;
}
.partner__box{
    background-color: #ffe2db;
    transition: .5s transform;
    width: 100%;
    height: auto;
    

    &:hover{
        transform: translateY(-3px);
        border: 1px solid #f77b7a
    }
    &-info{
            display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
        
     @media only screen and (max-width: 75em) {
          margin-top: 2rem
         };    //1200px
    }
  
}
</style>