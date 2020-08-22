<template>
    <section class="blog-detail">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="blog">
                            <h1 class="text-dark blog__title">{{blogs.title}}</h1>
                            <div class="blog__date">
                                     <span class="text-muted paragraph"> {{`${new Date(blogs.date).toUTCString().split(' ').slice(0, 4).join(' ')}`}}</span>
                            </div>
                            <div class="blog__content">
                                <img :src="'http://localhost:4000/img/thumbnail/' + blogs.thumbnail" class="blog__content-image">
                                <div class="content mt-5">
                                
                                     <p class="blog__content-text" v-html="blogs.content">
                                     
                                     </p>
                                </div>
                            </div>
                       
                    </div>
             
                    
                </div>
                <div class="col-md-4">
                    <div class="categories mb-5">
                        <span class="text-dark paragraph font-weight-bold mb-3">Categories</span>
                        <div class="row ">
                            <div class="col-lg-4"  v-for="categories in blogs.category" :key="categories.id">
                                  <nuxt-link  v-bind:to="'/blogs/category/'+categories.categorySlug" class="btn btn-secondary-2 mr-2 btn-lg">{{categories.categoryName}}({{categories.artikel.length}}) </nuxt-link>
                            </div>
                          
                           
                        </div>
               
                    </div>
                    <!-- <div class="tags">
                        <span class="text-dark paragraph font-weight-bold mb-3">Tags</span>
                        <div class="d-flex">
                            <a class="btn btn-secondary-2 mr-2 btn-lg">kecatikan(4) </a>
                            <a class="btn btn-secondary-2 mr-2  btn-lg">kecatikan(4) </a>
                        </div>
               
                    </div> -->
                    <div class="latest-article mt-5">
                        <div class="row">
                            <div class="col-12 mb-4">
                                <div class="row">
                                    <div class="col-4">
                                        <img src="./../../assets/images/latest-1.jpeg" class="latest-article-image" alt="latest blog">
                                   
                                    </div>
                                    <div class="col-8 latest-content">
                                             <span class="text-dark latest-article-title ">Catatan Penting Cara Membersih...</span>
                                             <span class="text-muted latest-article-title font-weight-light ">03 agustus 2020</span>
                                             <span class="text-muted mini-text">Bagaimana cara menghilangkan jerawat? Menghilangkan jerawat tidak se...</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-4">
                                <div class="row">
                                    <div class="col-4">
                                        <img src="./../../assets/images/latest-1.jpeg" class="latest-article-image" alt="latest blog">
                                   
                                    </div>
                                    <div class="col-8 latest-content">
                                             <span class="text-dark latest-article-title ">Catatan Penting Cara Membersih...</span>
                                             <span class="text-muted latest-article-title font-weight-light ">03 agustus 2020</span>
                                             <span class="text-muted mini-text">Bagaimana cara menghilangkan jerawat? Menghilangkan jerawat tidak se...</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 mb-4">
                                <div class="row">
                                    <div class="col-4">
                                        <img src="./../../assets/images/latest-1.jpeg" class="latest-article-image" alt="latest blog">
                                   
                                    </div>
                                    <div class="col-8 latest-content">
                                             <span class="text-dark latest-article-title ">Catatan Penting Cara Membersih...</span>
                                             <span class="text-muted latest-article-title font-weight-light ">03 agustus 2020</span>
                                             <span class="text-muted mini-text">Bagaimana cara menghilangkan jerawat? Menghilangkan jerawat tidak se...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <!-- <div class="related-product mt-5">
               <h2 class="heading-secondary mb-5  text-dark">Related  Products</h2>
               <Product-card/>
            </div> -->
        </div>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    async asyncData({route}) {
        console.log(route.params.slug)
        const { data } = await axios.get(`http://localhost:4000/api/v1/artikel/${route.params.slug}`)
        return {
          blogs :  data.data.artikel
        }
       
    },
}
</script>
<style lang="scss" scoped>
.blog-detail{
    padding: 10rem 0rem;
    background-color: #f7f7f7;


}
.blog{
    &__title{
        font-size: 3.5rem;
        line-height: 1.7;
    
    }
    &__date{
        padding: 2rem 2rem;
        border-top: 0.0625rem solid #e7eaf3;
         border-bottom: 0.0625rem solid #e7eaf3
    }
    &__content{
        margin-top: 4rem;
        &-image{
            width: 100%;
            height: auto;
        }
        &-text{
            color: #677788;
            font-size: 1.5rem;
        }
    }
    
}
.categories{
    display: flex;
    flex-direction: column;
    
}
.tags{
       display: flex;
    flex-direction: column;
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
.latest-content{
    display: flex;
    flex-direction: column;
}
.latest-article-image{
    width: 100%;
    height: auto;
}
.latest-article-title{
    font-size: 1.2rem;
    font-weight: 400;
}
.mini-text{
    font-size: 1.15rem
}
</style>
