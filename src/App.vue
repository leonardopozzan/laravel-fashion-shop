<template>
  <HeaderComponent/>
  <div>
     {{ title }}
  </div>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';


  export default {
    data() {
        return {
            title: "Hello world!"
        };
    },
    components: { HeaderComponent , FooterComponent }
}
</script>

<style lang="scss" scoped>

</style>