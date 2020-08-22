<template>
  <nuxt-link v-bind:to="'/blogs/'+artikel.slug" >
     <div class="card">
       <div class="card-img-top position-relative">
         <a href="/google.com">
           <img class="card-img blog-image-size" :src="'http://localhost:4000/img/thumbnail/' + artikel.thumbnail" alt="Image Description">
         </a>

       </div>
       <div class="card-body p-4">
         <h3 class="card-title"><a class="text-dark"
        
             href="/blogs/read/klinik-kecantikan-aura-kasih">{{artikel.title}}</a></h3>
         <p class="paragraph text-secondary" style="height: 125px; overflow: hidden" :content="strippedContent">
            {{strippedContent.substring(0,120) +  `....`}}
         </p>
         <p class="card-text text-right text-muted">{{`${new Date(artikel.date).toUTCString().split(' ').slice(0, 4).join(' ')}`}} </p>
       </div>
     </div>
</nuxt-link>
  
</template>
<script>
import moment from 'moment';


export default{
  
    props: ['artikel'],
    computed: {
     strippedContent() {
          let regex = /(<([^>]+)>)/ig;
           return this.artikel.content.replace(regex, "");
  },
  // methods : {
  //   format_date(value){
  //        if (value) {
  //          return moment(String(value)).format('YYYYMMDD')
  //         },
  //     },
  
  // },
  
   
}
}

</script>
<style lang="scss" scoped>
.card{
    box-shadow: 0px 12px 15px rgba(140, 152, 164, 0.1);
    border-radius: 1rem;
    border: none;
}
.card-text{
    font-size: 1.4rem
}
.card-img{
   clip-path: inset(0 0 0 0 round 5% 20% 5% 20%);


}
</style>