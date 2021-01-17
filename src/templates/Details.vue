<!--
 * @Author: your name
 * @Date: 2021-01-12 00:29:03
 * @LastEditTime: 2021-01-17 16:57:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /03-04-study-materials/Users/luoqin/work/fe-luo/lagou/fe-task/fed-e-task-03-04/code/my-gridsome-site/src/templates/Blogs/Detail.vue
-->
<template>
    <Layout>
        <el-card shadow="never" style="min-height: 400px">
            <div slot="header">
                <el-row>
                    <el-col :span="12">
                        <span>{{blog.title}}</span>
                    </el-col>
                    <el-col :span="12">
                        <div style="text-align: right;">
                            <el-button style="padding: 3px 0" type="text" icon="el-icon-share">分享</el-button>
                            <el-button style="padding: 3px 0" type="text" icon="el-icon-edit" v-if="token">编辑</el-button>
                            <el-button style=" padding: 3px 0" type="text" icon="el-icon-more-outline">更多博客</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                发布 {{blog.created_at}}
                <br> 更新 {{blog.updated_at}}
            </div>
            <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;border-bottom: 1px solid #E4E7ED;padding: 5px 0px 5px 0px">
                <pre style="font-family: '微软雅黑'">{{blog.description}}</pre>
            </div>
            <div v-html="blog.content" class="markdown-body" style="padding-top: 20px"></div>
        </el-card>
    </Layout>
</template> 
<page-query>
query ($id: String) {
    allConfig {
        edges {
            node {
                githubUsername
                token
            }
        }
    }
    userPost(id: $id) {
        id
        title
        description
        content
        created_at
        updated_at
    }
}
</page-query>

<script>
export default {
  name: 'Details',
  computed: {
        token() {
            return this.$page.allConfig.edges[0].node.token
        },
        blog() {
            return this.$page.userPost
        }
  }
}
</script>