<template>
        <div >
            <div class="sidebar__category" v-for="category in category" :key="category.id" >
                <div class="row ">
                         <div class="col-md-10">
                        <nuxt-link  v-bind:to="'/products/'+category.slug" :class="{'text-secondary' : true,  classActive , 'font-weight-bold' : true, 'text-category' : true,'text-left' : true}">{{category.name}}</nuxt-link>
                       
                </div>
                <div class="col-md-2">
                    <span class="text-secondary border text-right ">{{category.count_products}}</span>     
                       
                </div>
                </div>
               
         
            </div>
        </div>
        
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            category: [],
            isActive : false,
            categorySlug : this.$route.params.slug,
            isLoading: false
        }
        
    },
    mounted : function(){
        axios.get('https://dev-api.skindialogue.id/api/v1/public/product_categories')
        .then(res => (this.category = res.data.data))
        
    },
    computed: {
        classActive : function( ) {
            // let slug = this.$route.params.slug
            // console.log(this.categorySlug.replace('-',' '))
            // if(this.category.name === slug.replace('-',' ')) {
            //     this.isActive = true;
            // }
        }
    }
}
</script>

<style lang="scss">
.sidebar__category{
    background-color: #ffff;
    width: 100%;
    padding: 2rem 3rem;

}
.text-category {
    font-size: 1.2rem
}
.active{
    color: pink !important
}
</style>