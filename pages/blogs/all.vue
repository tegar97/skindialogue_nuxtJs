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
                    <div class="col-12 text-center mt-5 pagination-box " v-if="totalData >= 6"> 
                                  <pagination :currentPage="currentPage" :totalProps="totalData" :perPageProps="perPage" :getPostData="getPostData"/>
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
            
           totalData: null,
           meta: [],
   
         
       }
   },
    methods: {
      getPostData(currentPage) {

          axios.get(`http://localhost:4000/api/v1/artikel?limit=${this.perPage}&page=${currentPage}` )
          .then(res => (this.artikels = res.data.data))
          .catch(e => {this.errors.push(e)})

          
       

      
     
         

         }
         
    
        
      
      
    },
    mounted(currentPage) {
        axios.get(`http://localhost:4000/api/v1/artikel` )
        .then(res => (this.totalData = res.data.total))
        .catch(e => {this.errors.push(e)})

          
      this.getPostData(currentPage)
      
   
    },
    

}
</script>