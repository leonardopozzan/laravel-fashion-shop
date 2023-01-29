<template>
    <Transition name="slide-fade">
    <div class="chat" v-show="show">
      <h4 class="text-white text-center pt-4 pb-2">Send a message to our team</h4>
      <div class="inner-chat">
        <Transition name="slide-left">
          <div class="message" v-show="send">Hi, How can I help you?</div>
        </Transition>
        <input type="text" class="input" placeholder="Send a message">
      </div>
    </div>
  </Transition>
  <div class="chat-icon" @click="showChat()"><i class="fa-regular fa-comment"></i></div>
</template>

<script>
    export default {
  data() {
    return {
      send : false,
      show: false
    }
  },
  methods: {
        showChat(){
          this.show = !this.show;
          if(this.show){
            setTimeout(()=> this.send =true, 800)
          }else{
            setTimeout(()=> this.send =false, 800)
          }
        }
    },

}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as *;
.chat-icon{
    z-index: 2000;
  position: fixed;
  bottom: 10px;
  right: 20px;
  background-color: $rich-green;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 2rem;
  text-align: center;
  border-radius: 50%;
  color: $white;
  cursor: pointer;
  &:hover{
    background-color: $pink;
  }
  }
  .chat{
    z-index: 2000;
    position: fixed;
    bottom: 75px;
    right: 20px;
    height: 500px;
    width: 350px;
    border-radius: 0.5rem;
    background: linear-gradient(180deg, $rich-green 35%, white 35%);
    border: 1px solid black;
    .inner-chat{
      width: 90%;
      height: 85%;
      margin: auto;
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
    }
    .message{
      margin-top: 3rem;
      padding: 1rem;
      width: max-content;
      border-radius: 0.5rem;
      background-color: #D5F9BA;
    }
    .input{
      width: 100%;
      font-size: 1.3rem;
      align-self: flex-end;
    }
  }
  .slide-fade-enter-active {
        transition: all 0.5s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateY(-50px);
        opacity: 0;
    }
    .slide-left-enter-active {
        transition: all 0.5s ease-out;
    }

    .slide-left-leave-active {
        transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-left-enter-from,
    .slide-left-leave-to {
        transform: translateX(-50px);
        opacity: 0;
    }

</style>