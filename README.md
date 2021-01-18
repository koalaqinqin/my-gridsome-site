<!--
 * @Author: your name
 * @Date: 2021-01-11 21:40:20
 * @LastEditTime: 2021-01-19 00:27:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /03-04-study-materials/Users/luoqin/work/fe-luo/lagou/fe-task/fed-e-task-03-04/code/my-gridsome-site/README.md
-->
# Default starter for Gridsome

This is the project you get when you run `gridsome create new-project`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to install default starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

### 发布笔记

在自己的服务器http://106.75.164.93/

1. 在服务器上用 yum 安装了 httpd
2. 对项目执行 gridsome build，打包生成 dist
3. 对 dist 压缩，使用 `scp dist.zip root@106.75.164.93:/root/var/www/html` 把压缩包上传到服务器
4. 解压代码，放到 html 文件夹下
5. 启动 httpd 服务

### 存在的问题 -- 404

打包后页面对静态资源(assets)的引用是 /assets/xx。 会有 js 找不到的问题。现在是所以文件直接放在 html 下边的，所以没问题。如果把需要发布的文件放到指定的目录如 /var/www/html/blog/assets/xx 就会存在 404

同时也发布在了 https://my-gridsome-site-8k6cts6gv.vercel.app/
