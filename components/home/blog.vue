<template>
    <section class="section-blog">
        <div class="text-center ">
                <h2 class="heading-secondary text-dark">Health & Beauty Dialogue</h2>
        </div>
        <div class="container">
            <div class="row mt-6">
                  <div class="col-lg-4 col-sm-6 mb-md-5 mb-3 " v-for="artikel in artikels" :key="artikel.id">
                      <blog-card :artikel="artikel"/>
                  </div>
               
            </div>
        </div>
      

    </section>
        
</template>
<script>
export default{
    props: ['artikels']
}
</script>
<style lang="scss" scoped>
.section-blog{
    padding: 10rem 0;
     background-color: #F7F7F7;

}
</style>