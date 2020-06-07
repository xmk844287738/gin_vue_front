<template>
  <div>
    <div class="container">
      <div class="row mt-5" v-if="post">
        <!-- 文章内容 -->
        <div class="col-4 mb-4">
          <!-- 卡片容器 -->
          <div class="card h-100">
            <!-- 标题 -->
            <h4 class="card-header">{{ post.title }}</h4>
            <!-- 摘要 -->
            <div class="card-body">
              <p class="card-text">{{ post.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request';

export default {
  data() {
    return {
      post: {
        title: '',
        content: '',
      },
    };
  },
  mounted() {
    // 查询单篇文章
    // const postId = 'e362971d-1be6-4c80-9404-863398ab7fdc';
    const postApi = `post/${this.$route.query.postId}`;
    request.service.get(postApi).then((res) => {
      console.log(res.data.data.post);
      // 渲染文章
      this.post.title = res.data.data.post.title;
      this.post.content = res.data.data.post.content;
    }).catch((err) => {
      console.log(err.response.data);
    });
  },
  methods: {

  },
  components: {

  },
};
</script>

<style>
</style>
