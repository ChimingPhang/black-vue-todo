import Vue from 'vue';
import App from './App';
const VueTouch = require('vue-touch');
Vue.use(VueTouch);

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    return JSON.parse(this.getItem(key));
}

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
});
