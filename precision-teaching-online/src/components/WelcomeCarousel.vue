<template>
        <Carousel3d
          display="1"
          ref="welcome-carousel"
          class="welcome-carousel"
        >
            <Slide 
              v-for="(slide, index) in slides" 
              :key="index" 
              :index="index"
              class='slide-wrapper'
            >
            <img class="slide-img" :src="require('@/assets/' + slide)" :alt="slide" srcset="">
            </Slide>
        </Carousel3d>
  
</template>

<script>
import {Carousel3d, Slide} from "vue-carousel-3d";

export default {
    components: {
        Carousel3d,
        Slide
    },
    data(){
        return {
            slides: ["slide-1.jpg", "slide-2.jpg", "slide-3.jpg", "slide-4.jpg", "slide-5.jpg"],
            height: 800,
            width: 1000
        }
    },
    mounted(){
        this.startTimer();
    },
    methods: {
        startTimer(){
            const welcomeCarousel = this.$refs["welcome-carousel"];
            setTimeout(() => {
                this.startTimer();
                welcomeCarousel.goNext();
            }, 6000)
        }
    }
}
</script>

<style lang="scss" scoped>

.wrapper{
    height: 100%;
    width: 100%;
}

.welcome-carousel{
    height: 100% !important;
    width: 100%;
    // transform: translateY(-20px)
}

.slide-wrapper{
    height: 100% !important;
    width: 100% !important;
}

.slide-img{
    height: 100%;
    width: 100%
}

</style>

<style>
.carousel-3d-slider{
    height: 100% !important;
    width: 100% !important;
}
</style>