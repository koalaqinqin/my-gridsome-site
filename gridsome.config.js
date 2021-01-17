/*
 * @Author: your name
 * @Date: 2021-01-11 21:40:20
 * @LastEditTime: 2021-01-17 16:47:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /03-04-study-materials/Users/luoqin/work/fe-luo/lagou/fe-task/fed-e-task-03-04/code/my-gridsome-site/gridsome.config.js
 */
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// 配置插件
module.exports = {
  siteName: '个人博客',
  port: '8081',
  plugins: [],
  templates: {
    UserPost: [
      {
        path: '/detail/:id',
        component: './src/templates/Details.vue'
      }
    ]
  }
}