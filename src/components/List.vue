<template>
  <ul class="task-list">
    <li v-for="item in data">
      <div class="task-item">
        <input type="check" name="">
        <label>This is the task</label>
      </div>
      <div class="task-actions">
        <img src="../assets/icon_delete.svg">
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        msg: 'Hello World!',
      };
    },
  };
</script>

<style lang="scss">
.task-item{

}
</style>
