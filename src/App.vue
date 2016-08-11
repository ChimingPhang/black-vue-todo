<template>
  <div id="app">
    <Loading :show="loading"></Loading>
    <div class="main">
      <Main v-show="!loading"></Main>
    </div>

  </div>
</template>

<script>
import Loading from './components/Loading'
import Main from './components/Main'
import $ from 'jquery'

export default {
  components: {
    Loading,
    Main
  },
  ready(){
    let self = this
    setTimeout(function(){
      self.loading = false
    },4000)
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style lang="scss">
@import '../node_modules/font-awesome/scss/font-awesome.scss';

html {
  height: 100%;
  width:100%;
  overflow: hidden;
  font-family: Arial;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #272a35;
  padding: 16px;
  margin:0;
  .main{
    align-items: top;
  }
}
#app{
  width: 100%;
  height:100%;
}

</style>
