<template>
    <section class="blog">
          <div class="text-center">
             <h2 class="heading-secondary mb-5  text-dark">BLOG</h2>
          </div>
          <div class="container ">

        
                <section class="article-section mt-6" >
                   
                    <div class="row">
                      <div class="col-lg-4 col-sm-6 mb-md-5 mb-3 " v-for="artikel in artikels" :key="artikel.id" >
                              <blog-card :artikel="artikel"/>
                      </div>
                    
              

                    </div>

                </section>
            </div>
       
    </section>
</template>

<script>
import axios from 'axios';

export default{
    data() {
       return{
           search : '',
           artikels: [],
        
           perPage : 6,
           currentPage: 1,
            
           totalData: 10,
           meta: [],
           errors : [   ]
   
         
       }
   },
      mounted : function(){

          console.log(this.$route.params.slug)
          axios.get(`http://localhost:4000/api/v1/category/${this.$route.params.slug}` )
          .then(res => (this.artikels = res.data.category[0].artikel))
          .catch(e => {this.errors.push(e)})

         }
           

}
</script>