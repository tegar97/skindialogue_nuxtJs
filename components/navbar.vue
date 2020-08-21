<template>

        
  <b-navbar toggleable="lg" type="light" variant="white" class="p-3"  sticky>
  

    <b-container>
   
    <b-navbar-brand href="" >
      
        <img src="./../assets/images/LogoHeader_Small.png" class="navbar-logo " alt="logo skindialogue"> 
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       <li class="nav-item d-inline-block "><nuxt-link  class="nav-link" to="/">Home</nuxt-link></li>
       <li class="nav-item d-inline-block "><nuxt-link  class="nav-link" to="/products">Produk</nuxt-link></li>
       <li class="nav-item d-inline-block "><nuxt-link class="nav-link" to="/blogs">Blog</nuxt-link></li>
       <li class="nav-item d-inline-block "><a class=" btn__costume btn__costume--main nav-button  ">Login</a></li>
       <li class="nav-item d-inline-block "><a class=" btn__costume btn__costume--sub nav-button">Daftar Reseller</a></li>
           
    

      
      </b-navbar-nav>
    </b-collapse>
 
  </b-container>
  </b-navbar>



</template>

<style lang="scss" scoped>
 
.navbar-logo{
    width: auto;
    height: 3.7rem;
   
     @media only screen and (max-width: 56.25em) { 
            margin-left : .2rem;
      };
}
.nav-item{
    padding-left: 2rem;
    
     @media only screen and (max-width: 37.5em) { 
    
        padding-left:.5rem;
    }
   
}
.nav-link{
    font-size: 1.6rem;
    cursor: pointer;
    @media only screen and (max-width: 37.5em) { 
    
        margin-top: 0.5rem;
    }
    
    &:hover{
        color: #f77b7a !important;
        font-weight: 400;
    }
   
    
    
}
.nav-button{
      @media only screen and (max-width:  76.25em) { 
    
        margin-top: 2rem;
    }
}

</style>