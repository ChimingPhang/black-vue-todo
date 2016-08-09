<template>
  <div>
    <ul class="tab">
      <li v-for="item in tablist" @click="changeList($index,$event)" v-bind:class="{'active':$index==0}">{{item}}</li>
    </ul>
    <div class="tab-content active">
      <List :data="latest"></List>
    </div>
    <div class="tab-content">
      <List :data="done"></List>
    </div>
  </div>

</template>
<script>
import Swiper from 'swiper'
import List from './List'
import $ from 'jquery'
export default {
  data() {
    return {
        tablist:["Latest","Done"],
        latest: ['a2', 'b', 'c'],
        done: ['d', 'e', 'f'],
    }
  },
  components: {
    List
  },
  methods:{
    changeList(index,event){
      $(event.target).addClass('active').siblings('li').removeClass('active')
      $(".tab-content:eq("+index+")").addClass("active").siblings('.tab-content').removeClass('active')

    }
  }
}
</script>
<style lang="scss">
  .tab{
    margin:10px 0 10px 0;
    li{
      color:#464a5a;
      display:inline-block;
      margin-right:20px;
      font-size:19px;
      &.active{
        color:#f53f3f;
      }
    }
  }
  .tab-content{
    display:none
  }
  .tab-content.active{
    display:block
  }

</style>
