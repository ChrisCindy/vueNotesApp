/*
 * @Author: chriscindy
 * @Date:   2016-06-17 16:45:37
 * @Last Modified by:   chriscindy
 * @Last Modified time: 2016-06-27 17:11:44
 */

import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

new Vue({
    store, //inject store to all children
    el: 'body',
    components: { App }
})
