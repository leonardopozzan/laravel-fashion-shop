<template>
    <Transition name="slide-up">
    <div class="back-top" @click="scrollToTop()" v-show="isTop"><i class="fa-solid fa-arrow-up"></i></div>
  </Transition>
</template>

<script>
    export default {
        data() {
    return {
      isTop: false,        
    }
  },
  methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
  mounted(){
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                this.isTop = true
            } else {
                this.isTop = false
            }
        })
    },
    }
</script>

<style lang="scss" scoped>
.back-top{
  z-index: 2000;
  position: fixed;
  bottom: 30px;
  right: 100px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: white;
  border-radius: 50%;
  border: 1px solid black;
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    background-color: rgb(42, 42, 42);
    color: white;
  }
}
.slide-up-enter-active {
        transition: all 0.5s ease-out;
    }

    .slide-up-leave-active {
        transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-up-enter-from,
    .slide-up-leave-to {
        transform: translateY(50px);
        opacity: 0;
    }
</style>