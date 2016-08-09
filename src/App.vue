<template>
  <div id="app">
    <Loading :show="loading"></Loading>
    <Main v-show="!loading"></Main>
  </div>
</template>

<script>
import Loading from './components/Loading';
import Main from './components/Main';
export default {
  components: {
    Loading,
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>

<style>
html {
  height: 100%;
  font-size: calc(100vw / 3.75);
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #272a35
}


</style>
