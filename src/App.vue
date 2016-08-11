<template>
  <div id="app">
    <Loading :show="loading"></Loading>
    <Main v-show="!loading"></Main>
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
  data() {
    return {
      loading: false,
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
  align-items: top;
  justify-content: center;
  height: 100%;
  background: #272a35;
  padding: 16px;
  margin:0;

}
#app{
  width: 100%
}

</style>
