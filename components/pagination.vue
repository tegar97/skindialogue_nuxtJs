<template>
    <div>
          <div class="col-12 text-center mt-5 pagination-box ">
               <b-pagination  size="lg" :total-rows="totalData" :per-page="perPage" v-model="pageCurrent" @input="getPostData"  class="customPagination "></b-pagination>
              
           </div>
              <p class="mt-3 ml-3 text-dark">Current Page: {{ pageCurrent }}</p>
    </div>
</template>

<script>
export default {
    props: ['currentPage','perPageProps','getPostData','totalProps'],
    data() {
        return{
            pageCurrent: this.currentPage,
            perPage: this.perPageProps,
            totalData : this.totalProps
        }
    }
}
</script>
<style lang="scss" scoped>
.page-item.active .page-link {
  background-color: #f77b7a !important;
  border: none !important;
  outline: none;
  color: #fff !important;
  

  
}
.pagination-box{
  display: flex;
  justify-content: flex-start;
 

}
.page-item.active .page-link:active{
   border: none !important;
  outline: none;
}
.pagination-lg{
  width: 10px !important;
}
.page-link{
    color:  #677788 !important;
    width:  4rem !important;
    height: 4rem !important;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>