<template>
    <section class="blog">
          <div class="text-center">
             <h2 class="heading-secondary mb-5  text-dark">BLOG</h2>
          </div>
          <div class="container ">

         
                <div class="blog__header ">
                 <div class="row ">
                     
                    <div class="col-12  col-md-8 mb-5 ">
                           <div class="d-flex">
                        <span class="text-dark paragraph">  Category :</span>
                        <div v-for="category in categories" :key="category.id">

                 
                            <nuxt-link   v-bind:to="'/blogs/category/'+category.categorySlug" class="btn btn-secondary-2 mr-2 btn-lg">{{category.categoryName}}({{category.artikel.length}})</nuxt-link>
        
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                      <form action="#" class="search">
                        <input type="text" class="search__input" placeholder="search hotels">
                        <button class="search__button">
                          <svg class="search__icon">
                            <use xlink:href="./../../assets/images/sprite.svg#icon-magnifying-glass"></use>
                          </svg>

                        </button>
                      </form>

                    </div>
                </div>
                <nuxt-link to="/">
                    <div class="article__card card--primary mt-6">
                        <div class="row">
                            <div class="col-md-7">
                                <img src="./../../assets/images/hero2.jpeg" alt="artikel photo" class="articel__card-image">
                            
                            </div>
                            
                            <div class="col-md-5  text-box">
                                <h3 class=" card-title text-dark mb-5">Klinik Kecantikan Aura Kasih</h3>
                                <p class="paragraph text-dark ">Penyanyi sekaligus entepreneur Aura Kasih mengatakan slogan "Beauty is Pain" sudah ketinggalan zaman, dan mulai ditinggalkan oleh perempuan modern.</p>
  
                            </div>
                              
                            
                            
                        </div>
                                                      <p class="card-text text-right text-muted">Aug 09 </p>
                    
                    </div>
                </nuxt-link>
                <section class="article-section mt-5">
                    <div class="heading mb-5">
                         <h2 class="heading-secondary text-dark font-size-2" >Latest News</h2>
                         <nuxt-link  to="/blogs/all" class="btn--text">Learn more &rarr;</nuxt-link>
                    </div>
                    <div class="row">
                      <div class="col-lg-4 col-sm-6 mb-md-5 mb-3 " v-for="artikel in artikels" :key="artikel.id" >
                          <blog-card :artikel="artikel"/>
                      </div>
                    

                    </div>

                </section>
            </div>
          </div>
    </section>
</template>
<script>
import axios from 'axios';

export default{
    data() {
        return {
            categories : []
        }   
    },
    async asyncData() {
        
        const {data} = await axios.get('http://localhost:4000/api/v1/artikel?limit=6')
        return { artikels : data.data }

      

  
      
   
    },

    
    mounted: function() {
        axios.get('http://localhost:4000/api/v1/category?limit=4')
        .then(res => (this.categories =  res.data.data  ))
        .catch(e => {this.errors.push(e)})


        console.log(this.categories)
    }
}
</script>
<style lang="scss" scoped>
.blog{
    padding: 8rem 0;
}
.card-title{
    font-size: 3rem !important;

    &:hover{
        color: pink !important
    }
}

.text-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.search{
    display: flex;
    flex: 0 0 40%;
    align-items: center;
    justify-content: center;
    &__input{
        font-family: inherit;
        font-size: 1.5rem;
        background-color: #fff;
        border: none;
        font-weight: 300;
        color: #1e2022;
        border-bottom: 1px solid #e7eaf3;
        padding: .7rem 2rem;
        width: 90%;
    
        transition: .5s all;
        margin-right: -3.25rem;
      
        &:focus{
            outline: none;
            width: 100%;
         
            border-bottom:  2px solid pink;
        }
        &::-webkit-input-placeholder{
            font-weight: 100;
            color: var(--color-grey-light-4)
        }
    }
    &__input:focus + &__button{
        background-color: var(--color-grey-light-3);
    }
    &__button{
        border: none;
        background-color: var(--color-grey-light-2);
        &:focus{
            outline: none
        }
        &:active{

        }
    }
    &__icon{
        height: 2rem;
        width: 2rem;
        fill: var(--color-grey-dark-3)
    }
}
.card--primary{
        box-shadow: 0px 12px 15px rgba(140, 152, 164, 0.1) !important;
        border: none;
        padding: 1.5rem;
        transition: transform 1s;
        &:hover{
        transform: translateY(-10px);
          box-shadow: 0px 12px 15px rgba(140, 152, 164, 0.6) !important;
    }
}
.articel__card{
   



    &-image{
        width: 100%;
        height: auto;
    
        border-style: none;
 clip-path: inset(0 0 0 0 round 5%);
          @media only screen and (max-width: 37.5em) { 
                clip-path:none
          };
          @media only screen and (max-width: 56.25em) { 
              clip-path:none
           };     

    }
    
}
.article-section {
    padding: 5rem 0;
}
.heading{
    display: flex;
    justify-content: space-between;
    align-items:center;
}
.btn-secondary-2{
    
    color: #71869d;
    background-color: rgba(113, 134, 157, 0.1);;
    border-color: transparent;
    &:hover{
           background-color: rgba(113, 134, 157, 1);
           color: white;
    }
}
</style>