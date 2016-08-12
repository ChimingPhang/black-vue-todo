<template>
  <div class="add-task-box" v-show="editing">
    <input type="text" placeholder="{{placeholder}}" name="add-text-field" @keyup.enter="addTask">
  </div>
  <span class="add-task-btn">
    <b v-if="!editing" v-on:click="showAddBox">
      <i class="icon_add h"></i>
      <i class="icon_add v"></i>
    </b>
    <b class="add-btn-txt" v-if="editing" v-on:click="addTask">DONE</b>
  </span>
</template>

<script>
  export default {
    data(){
      return{
        editing:false,
        placeholder: 'ADD A NEW TASK',
      }
    },
    ready(){
      let self = this
      let field = document.getElementsByName('add-text-field')[0]
      field.addEventListener("focus", function(){
        field.setAttribute('placeholder','')
      }, true)
      field.addEventListener("blur", function(){
        field.setAttribute('placeholder',self.placeholder)
      }, false)
    },
    methods:{
      showAddBox(){
        this.editing = true
        document.querySelectorAll('.add-task-box')[0].classList.add('popInBottom')
        document.querySelectorAll('.add-task-box')[0].classList.remove('popOutBottom')
        document.getElementsByName('add-text-field')[0].focus()
      },
      addTask(){
        let self = this
        let field = document.getElementsByName('add-text-field')[0]

        //animation
        document.querySelectorAll('.add-task-box')[0].classList.add('popOutBottom')
        setTimeout(function(){
          self.editing = false
        },150)
        document.querySelectorAll('.add-task-box')[0].classList.remove('popInBottom')

        //add latest
        let new_task = field.value
        let latestList = window.localStorage.getObject('lastestTask')?window.localStorage.getObject('lastestTask'):[]
        if(new_task!=''){
          latestList.push(new_task)
          window.localStorage.setObject('lastestTask',latestList)
          this.$parent.getTasks()
          field.value = ''
        }

      }
    }
  }
</script>

<style lang="scss">
  .add-task-box {
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 2px 8px 0px rgba(2, 3, 3, 0.09);
    position: fixed;
    width: 91%;
    height: 60px;
    bottom: 110px;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 4px;
    text-align:center;
    justify-content: center;
    z-index:99;
    input{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width:90%;
      text-align:center;
      right: 0;
      margin: auto;
      outline:none;
      border:none;
    }
    &:after{
      content:'';
      width:0;
      height:0;
      border-left:10px solid transparent;
      border-right:10px solid transparent;
      border-top:10px solid #fff;
      position:absolute;
      bottom:-9px;
      left:50%;
      margin-left:-10px;
      box-shadow: 0px 2px 8px 0px rgba(2, 5, 3, 0.02);
    }
  }

  .add-task-btn {
    border-radius: 50%;
    display: inline-block;
    background-color: rgb(245, 63, 63);
    box-shadow: 0px 0px 32px 0px rgba(54, 0, 0, 0.32);
    position: fixed;
    bottom: 25px;
    width: 60px;
    height:60px;
    color: #fff;
    left:50%;
    font-size: 29px;
    margin-left: -30px;
    cursor:pointer;
    text-align: center;
    .icon_add{
      background: #fff;
      display:inline-block;
      &.h{
        width:30px;
        height:4px;
        top:50%;
        left:50%;
        margin-top:-2px;
        margin-left:-15px;
        position:absolute;
        border-radius:1px;
      }
      &.v{
        height:30px;
        width:4px;
        top:50%;
        left:50%;
        margin-top:-15px;
        margin-left:-2px;
        position:absolute;
        border-radius:1px;
      }
    }
    .add-btn-txt{
      font-size:16px;
      font-weight:normal;
      line-height:60px;
    }
  }

</style>
