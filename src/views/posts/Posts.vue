<template>
  <div>
    <div class="container">
      <div class="row mt-5" v-if="postsList">
        <!-- 文章内容 -->
        <div class="col-4 mb-4" v-for="post in postsList" :key="post.id">
          <!-- 卡片容器 -->
          <div class="card h-100">
            <!-- 标题 -->
            <h4 class="card-header">{{ post.title }}</h4>
            <!-- 摘要 -->
            <div class="card-body">
              <p class="card-text">{{ post.content }}</p>
            </div>
            <!-- 注脚 -->
            <!-- vue-router传递参数3种方法 -->
            <div class="card-footer">
              <b-button
                type="button"
                variant="primary"
                :to="{path: '/post', query: {postId: post.id}}"
              >阅读本文</b-button>
            </div>
          </div>
        </div>
      </div>
      <b-button
        class="mt-3"
        type="button"
        variant="primary"
        block
        @click="getPosts()"
        v-if="getPostsOn"
      >加载文章</b-button>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request';

export default {
  data() {
    return {
      postsList: [],
      postNum: 2, // 每次加载的文章数
      offset: 0, // 查询数据库文章数量偏移值
      getPostsOn: true, // 是否启用加载文章的函数
    };
  },
  mounted() {
    // 当此组件加载时需要触发的函数
    // 请求后台获取文章数据
    const postApi = `anonymousUser/posts/?postNum=${this.postNum}&offset=${this.offset}`; // 查询多篇文章
    request.service.get(postApi).then((res) => {
      // 遍历多篇文章数组
      for (let i = 0; i < res.data.data.posts.length; i += 1) {
        this.postsList.push(res.data.data.posts[i]);
      }
      console.log(res.data.data.posts.length);
    }).catch((err) => {
      console.log('文章加载失败');
      console.log(err.response.data);
    });

    this.offset += 1;
  },
  methods: {
    getPosts() {
      // 请求后台获取文章数据
      // const postApi = 'http://192.168.233.135:9000/anonymousUser/posts/e362971d-1be6-4c80-9404-863398ab7fdc'; // 查询单篇文章
      const postApi = `anonymousUser/posts/?postNum=${this.postNum}&offset=${this.offset}`; // 查询多篇文章
      request.service.get(postApi).then((res) => {
        // 文章数据赋值前台对象
        // js 列表向末尾添加一个元素使用 push
        // this.postsList.push(res.data.data.post); // 添加一篇文章

        // 如果res.data.data.posts.length的结果为0，表明数据文章已全部加载完成
        if (res.data.data.posts.length === 0) {
          this.getPostsOn = false;// 关闭加载文章的函数

          // 以toasts 的方式(提示卡)给出文章加载成功提示
          this.$bvToast.toast('数据文章已经全部加载', {
            title: '警告！！！',
            variant: 'danger', // 提示卡显示的颜色
            autoHideDelay: 3000, // 提示卡停留的时间
            toaster: 'b-toaster-top-center', // 提示卡的位置
            solid: true,
          });

          return; // then() 函数返回，终止往下执行
        }

        // 遍历多篇文章数组
        for (let i = 0; i < res.data.data.posts.length; i += 1) {
          this.postsList.push(res.data.data.posts[i]);
        }
        console.log(res.data.data.posts.length);


        // 以toasts 的方式(提示卡)给出文章加载成功提示
        this.$bvToast.toast('文章加载成功', {
          title: '恭喜你',
          variant: 'success', // 提示卡显示的颜色
          autoHideDelay: 1000, // 提示卡停留的时间
          toaster: 'b-toaster-top-center', // 提示卡的位置
          solid: true,
        });
        // console.log(res.data.data.posts);
      }).catch((err) => {
        console.log('文章加载失败');
        console.log(err.response.data);
      });

      // console.log('文章加载成功');

      this.offset += 1;
    },

  },
  components: {

  },
};
</script>

<style>
</style>
