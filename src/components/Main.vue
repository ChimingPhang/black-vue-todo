<template>
  <div class="swiper-container">
      <div class="swiper-pagination"></div>
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <List :data="latest"></List>
          </div>
          <div class="swiper-slide">
            <List :data="done"></List>
          </div>
      </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import List from './List'
  export default {
    data() {
      return {
        latest:['a', 'b', 'c'],
        done:['a', 'b', 'c'],
      }
    },
    ready() {
      var swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          paginationBulletRender: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
      });
    },
    components: {
      List
    },
  }
</script>

<style></style>
