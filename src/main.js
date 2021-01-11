/*
 * @Author: your name
 * @Date: 2021-01-11 21:40:20
 * @LastEditTime: 2021-01-11 23:27:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /03-04-study-materials/Users/luoqin/work/fe-luo/lagou/fe-task/fed-e-task-03-04/code/my-gridsome-site/src/main.js
 */
// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import util from './utils/utils'

export default function (Vue, { router, head, isClient }) {
  Vue.use(ElementUI)
  Vue.prototype.$util = util
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
