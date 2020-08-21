<template>
    <section class="blog-detail">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="blog">
                            <h1 class="text-dark blog__title">{{blogs.title}}</h1>
                            <div class="blog__date">
                                     <span class="text-muted paragraph">Jul 03 2020</span>
                            </div>
                            <div class="blog__content">
                                <img :src="'http://localhost:4000/img/thumbnail/' + blogs.thumbnail" class="blog__content-image">
                                <div class="content mt-5">
                                    <p class="blog__content-text">Bagaimana cara menghilangkan jerawat? Menghilangkan jerawat tidak selalu menggunakan produk kimia. Daripada menghabiskan banyak uang dan hasilnya belum pasti, mari kita coba cara menghilangkan jerawat secara alami dan cepat.Cara menghilangkan jerawat secara alami banyak sekali metode dan bahannya, salah satu yang paling efektif adalah dengan menggunakan masker.</p>
                                    <br>
                                    <p class="blog__content-text">Produk masker pun ada yang bisa dibuat secara alami ada pula buatan pabrik yang menjamin bisa menjadi cara menghilangkan jerawat secara alami dalam waktu 1 hari saja. Namun, produk buatan sendiri bisa Kamu coba di awal, karena lebih terjamin kehigienisannya dan tentu lebih ramah di kantong. Berikut adalah beberapa cara yang bisa kamu coba :</p>
                                    <br>
                                    <h4 class="text-dark font-weight-bold font-size-2">1. Cara menghilangkan jerawat secara alami dengan masker soda kue dan air</h4>
                                     <p class="blog__content-text" v-html="blogs.content">
                                     
                                     </p>
                                </div>
                            </div>
                       
                    </div>
             
                    
                </div>
                <div class="col-md-4">
                    <div class="categories mb-5">
                        <span class="text-dark paragraph font-weight-bold mb-3">Categories</span>
                        <div class="d-flex flex-row" v-for="categories in blogs.category" :key="categories.id">
                            <a class="btn btn-secondary-2 mr-2 btn-lg">{{categories.categoryName}}(4) </a>
                           
                        </div>
               
                    </div>
                    <div class="tags">
                        <span class="text-dark paragraph font-weight-bold mb-3">Tags</span>
                        <div class="d-flex">
                            <a class="btn btn-secondary-2 mr-2 btn-lg">kecatikan(4) </a>
                            <a class="btn btn-secondary-2 mr-2  btn-lg">kecatikan(4) </a>
                        </div>
               
                    </div>
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
