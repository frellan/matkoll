import Vue from 'vue'
import App from './app'

import router from './router'

var Sugar = require('sugar')
Sugar.extend()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
