<template>
  <ul class="task-list">
    <li v-for="item in data" track-by="$index">
      <div class="task-actions">
        <svg enable-background="new 0 0 512 512" height="26px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="26px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" @click="delTask($event)">
          <g>
            <path d="M444.852,66.908h-99.339V47.04c0-21.943-17.792-39.736-39.736-39.736h-99.339   c-21.944,0-39.736,17.793-39.736,39.736v19.868H67.363v19.868h20.47l19.887,377.489c0,21.944,17.792,39.736,39.736,39.736h218.546   c21.944,0,39.736-17.792,39.736-39.736l19.538-377.489h19.577V66.908z M186.57,47.04c0-10.962,8.926-19.868,19.868-19.868h99.339   c10.962,0,19.868,8.906,19.868,19.868v19.868H186.57V47.04z M385.908,463.236l-0.039,0.505v0.524   c0,10.943-8.906,19.868-19.868,19.868H147.455c-10.942,0-19.868-8.925-19.868-19.868v-0.524l-0.019-0.523L107.72,86.776h297.669   L385.908,463.236z" fill="#f53f3f" />
            <rect fill="#f53f3f" height="317.885" width="19.868" x="246.173" y="126.511" />
            <polygon fill="#f53f3f" points="206.884,443.757 186.551,126.493 166.722,127.753 187.056,445.017  " />
            <polygon fill="#f53f3f" points="345.649,127.132 325.82,125.891 305.777,443.776 325.606,445.017  " />
          </g>
        </svg>
      </div>
      <div class="task-item" v-touch:swipe="onSwipe($event)">
        <span class="checkbox" v-bind:class="{'active':type=='done'}" @click="checkDone($event)"></span>
        <label>{{item}}</label>
      </div>

    </li>
  </ul>
</template>
<script>
import _ from 'lodash'
import $ from 'jquery'

export default {
  props: ['data', 'type'],
  data() {
    return {};
  },
  methods: {
    checkDone(event) {
      let rm_txt = event.target.nextElementSibling.textContent
      let doneList = window.localStorage.getObject('doneTask') ? window.localStorage.getObject('doneTask') : []
      let latestList = window.localStorage.getObject('lastestTask') ? window.localStorage.getObject('lastestTask') : []
      let storage = window.localStorage

      if (this.type == 'done') {

        event.target.classList.remove('active')

        //remove doneList
        _.remove(doneList, function(obj) {
          return obj == rm_txt
        })

        storage.setObject('doneTask', doneList)

        //add latestList
        latestList.push(rm_txt)
        storage.setObject('lastestTask', latestList)

      } else {
        event.target.classList.add('active')

        //remove latestlist
        _.remove(latestList, function(obj) {
          return obj == rm_txt
        })

        storage.setObject('lastestTask', latestList)

        //add donelist
        doneList.push(rm_txt)
        storage.setObject('doneTask', doneList)
      }

      this.$parent.getTasks()
    },
    delTask(event) {
      let rm_txt = $(event.target).parent().next('div').find('label').text()
      let doneList = window.localStorage.getObject('doneTask') ? window.localStorage.getObject('doneTask') : []
      let latestList = window.localStorage.getObject('lastestTask') ? window.localStorage.getObject('lastestTask') : []

      if (this.type == 'done') {

        event.target.classList.remove('active')

        //remove doneList
        _.remove(doneList, function(obj) {
          return obj == rm_txt
        })
        window.localStorage.setObject('doneTask', doneList)

      } else {
        event.target.classList.add('active')

        //remove latestlist
        _.remove(latestList, function(obj) {
          return obj == rm_txt
        })

        window.localStorage.setObject('lastestTask', latestList)

      }

      this.$parent.getTasks()
    },
    onSwipe(event) {

      let x = event.direction
      if (x == 2) {
        event.target.classList.add('slideLeft')
        event.target.classList.remove('slideRight')
      } else {
        event.target.classList.add('slideRight')
        event.target.classList.remove('slideLeft')
      }

    }
  }
};
</script>
<style lang="scss">
@import '../../static/todo-animate.scss';
.task-list {
  padding-left: 0;
  margin: 0;
  li {
    list-style: none;
    position: relative;
    margin-bottom: 10px;
    transition: all .3s ease-in-out;
    -webkit-transition: all .3s ease-in-out;
  }
  input {
    outline: none
  }
}

.task-item {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  color: #606887;
  font-size: 18px;
  box-shadow: 0px 2px 8px 0px rgba(2, 3, 3, 0.004);
  position: relative;
  z-index:2;
  .checkbox {
    display: inline-block;
    vertical-align: middle;
    margin: -3px 5px 0 10px;
    margin-top: -3px;
    border-style: solid;
    border-width: 1px;
    border-color: #d8dae4;
    border-radius: 3px;
    background-color: rgb(255, 255, 255);
    box-shadow: inset 0px 1px 1px 0px rgba(0, 0, 0, 0.11);
    width: 18px;
    height: 18px;
    position: relative;
    &.active {
      &:after {
        content: '\F00C';
        color: rgb(245, 63, 63);
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: 14px;
        position: absolute;
        top: 2px;
        left: 2px;
      }
    }
  }
}

.task-actions {
  position: absolute;
  right: 10px;
  top: 12px;
  .task-del-icon {
    height: 30px;
    color: #f53f3f;
  }
}
</style>
