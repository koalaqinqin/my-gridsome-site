  
// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')
const config = require('./config.json')
const { githubUsername, apiUrl, token } = config
const tokenParam = `?access_token=${token}`

// 创建配置集合  读取配置文件数据
function getConfig(actions) {
  const config_collection = actions.addCollection('Config')
  config_collection.addNode(config)
}
 
// 获取关注者
async function getFollowings (actions) {
  const collection = actions.addCollection('following')
  const { data } = await axios.get(`${apiUrl}/users/${githubUsername}/following${tokenParam}`)
  if (data) {
    for (const item of data) {
      collection.addNode(item)
    }
  }
}
// 获取追随者
async function getFollowers (actions) {
  const collection = actions.addCollection('followers')
  let { data } = await axios.get(`${apiUrl}/users/${githubUsername}/followers${tokenParam}`)
  if (!data || !data.length) {
    data = [{
      avatar_url: '',
      html_url: '',
      login: '',
      id: '-1',
    }]
  }
  if (data) {
    for (const item of data) {
      collection.addNode(item)
    }
  }
}

async function getUser (actions) {
  const collection = actions.addCollection('user')
  const { data } = await axios.get(`${apiUrl}/users/${githubUsername}${tokenParam}`)
  if (data) {
    collection.addNode(data)
  }
}
// 获取项目集合
// async function getProjects (actions) {
//   const collection = actions.addCollection('project')
//   const { data } = await axios.get(`${apiUrl}/users/${githubUsername}/repos${tokenParam}`)
//   if (data && data) {
//     for (const item of data) {
//       collection.addNode(item)
//     }
//   }
// }

async function getPosts (actions) {
  const collection = actions.addCollection('UserPost')
  const { data: userPost } = await axios.get(`${apiUrl}/users/${githubUsername}/gists${tokenParam}`)
  userPost.reverse()
  for (let item of userPost) {
    let { data: detailsPost } = await axios.get(`${apiUrl}/users/${githubUsername}/gists/${item.id}${tokenParam}`)
    const key = Object.keys(detailsPost.files)[0]
    collection.addNode({
      id: item.id,
      title: Object.keys(item.files)[0],
      description: item.description,
      created_at: item.created_at,
      updated_at: item.updated_at,
      content: detailsPost.files[key].content
    })
  }
}

module.exports = function (api) {
  api.loadSource(async (actions) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    getConfig(actions)
    await getUser(actions)
    await getFollowings(actions)
    await getFollowers(actions)
    // await getProjects(actions)
    await getPosts(actions)
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}