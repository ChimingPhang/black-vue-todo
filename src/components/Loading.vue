<template>
  <div class="loading-gif" v-show="show">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  props: ['show'],
  data() {
    return {
      msg: 'Hello World!',
    };
  },
};
</script>


<style lang="scss">
  .loading-gif{
    width: 50px;
    height: 30px;
    text-align: center;
    font-size: 10px;
    position:absolute;
    left:50%;
    top:50%;
    margin-left: -25px;
    margin-top: -15px;
    span{
      background-color: #f53f3f;
      height: 100%;
      width: 4px;
      display: inline-block;
      -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
      animation: stretchdelay 1.2s infinite ease-in-out;
    }
    span:nth-child(1){
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }
    span:nth-child(2){
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }
    span:nth-child(3){
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
    span:nth-child(4){
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }
  }
  @-webkit-keyframes stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
  }

  @keyframes stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% {
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }
</style>
