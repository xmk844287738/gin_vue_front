<template>
  <div>
    <b-row class="mt-5">
      <h3>心情大好记录一下</h3>
      <form @submit.prevent="onSubmitAdd" class="g-mb-40 mt-3">
        <div class="form-group">
          <label>文章分类号</label>
          <select
            class="form-control"
            v-model="selectCategoryId"
            @change="modifyState('categoryIdError')"
          >
            <option
              v-for="(category, index) in categories"
              :key="index"
              :value="category.id"
            >{{ category.id}}</option>
          </select>
          <b-alert
            show
            variant="danger"
            v-show="postForm.categoryIdError"
          >{{ postForm.categoryIdError }}</b-alert>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="post_title"
            v-model="postForm.title"
            @change="modifyState('titleError')"
            placeholder="标题"
          />
          <b-alert show variant="danger" v-show="postForm.titleError">{{ postForm.titleError }}</b-alert>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="post_summary"
            v-model="postForm.summary"
            placeholder="摘要"
          />
          <b-alert show variant="danger" v-show="postForm.summaryError">{{ postForm.summaryError }}</b-alert>
        </div>
        <div class="form-group" @change="modifyState('contentError')">
          <!-- <mavon-editor /> -->
          <mavon-editor v-model="postForm.content"></mavon-editor>
        </div>
        <b-alert show variant="danger" v-show="postForm.contentError">{{ postForm.contentError }}</b-alert>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </b-row>
  </div>
</template>

<script>
import request from '@/utils/request';

export default {
  data() {
    return {
      postForm: {
        title: '',
        summary: '',
        content: '',
        titleError: null,
        summaryError: null,
        contentError: null,
        categoryIdError: null,
      },
      categories: null,
      selectCategoryId: null,

    };
  },
  mounted() { // 当此组件加载时需要触发的函数
    const showAllCategoriesApi = 'categories/showAllCategories';
    request.service.get(showAllCategoriesApi).then((res) => {
      // console.log(res.data.data.categories);
      this.categories = res.data.data.categories; // 分类列表
    }).catch((err) => {
      console.log(err);
    });
  },
  methods: {
    onSubmitAdd() {
      // 验证用户输入
      if (!this.selectCategoryId) { // 文章分类号为空时
        console.log('文章分类号必填');
        this.postForm.categoryIdError = '文章分类号必选';
        return;
      }
      // console.log(this.selectCategoryId);

      if (!this.postForm.title) { // 当文章标题为空时
        console.log('文章标题不能为空');
        this.postForm.titleError = '文章标题不能为空';
        return;
      }
      // if (!this.postForm.summary) { // 当文章摘要为空时
      //   console.log('文章摘要不能为空');
      //   this.postForm.summaryError = '文章摘要不能为空';
      //   return;
      // }
      if (!this.postForm.content) { // 文章内容不能为空
        this.postForm.contentError = '文章内容不能为空';
        console.log('文章内容不能为空');
        return;
      }

      // 向后台添加文章api发起请求;
      const createPostApi = 'post';
      request.service.post(createPostApi, { category_id: this.selectCategoryId, title: this.postForm.title, content: this.postForm.content }).then((res) => {
        console.log(res.data);
        // 以toasts 的方式(提示卡)给出登陆成功提示
        this.$bvToast.toast(`文章'${this.postForm.title}'添加成功`, {
          title: '恭喜你',
          variant: 'success', // 提示卡显示的颜色
          autoHideDelay: 1000, // 提示卡停留的时间
          toaster: 'b-toaster-top-center', // 提示卡的位置
          solid: true,
        });

        // 定时跳转我的文章首页
      }).catch((err) => {
        console.log(err);
      });
    },
    modifyState(name) { // 聚焦时将error置为null
      // this.postForm.categoryIdError = null;
      // this.postForm.titleError = null;
      // this.postForm.contentError = null;
      // console.log(this.postForm[name]);
      this.postForm[name] = null;
    },

  },
  components: {

  },
};
</script>

<style>
</style>
