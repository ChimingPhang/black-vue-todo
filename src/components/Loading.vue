<template>
  <div class="loading-gif" v-show="show">
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
    text-align:center;
    span{
      display:inline-block;
      width:9px;
      height:9px;
      background:#f53f3f;
      border-radius:50%;
    }
    span:nth-child(1){
      -webkit-animation:loading 1s ease-in 0s infinite;
    }
    span:nth-child(2){
      -webkit-animation:loading 1s ease-in .2s infinite;
    }
    span:nth-child(3){
      -webkit-animation:loading 1s ease-in .4s infinite;
    }
  }
  @-webkit-keyframes loading{
    0%{margin-bottom:0}
    50%{margin-bottom:20px;}
    100%{margin-bottom:0px;}
  }
</style>
