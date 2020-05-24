<template>
  <div class="login">
    <div>
      <!-- class="mt-5" 样式与导航栏保持一定距离 -->
      <b-row class="mt-5">
        <b-col md="8" offset-md="2" lg="6" offset-lg="3">
          <b-card title="登录">
            <b-form>
              <!-- 手机号 -->
              <b-form-group id="input-group-1" label="手机号:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="$v.user.telephone.$model"
                  :state="validateState('telephone')"
                  type="number"
                  placeholder="请输入你的手机号"
                ></b-form-input>
                <b-form-invalid-feedback :state="validateState('telephone')">手机号不符合要求!</b-form-invalid-feedback>
              </b-form-group>

              <!-- 密码 -->
              <b-form-group id="input-group-1" label="密码:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="$v.user.password.$model"
                  :state="validateState('password')"
                  type="password"
                  placeholder="请输入你的密码"
                ></b-form-input>
                <b-form-invalid-feedback :state="validateState('password')">密码必须大于6位!</b-form-invalid-feedback>
              </b-form-group>

              <b-button type="button" variant="primary" block @click="login()">登录</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators';

import custonValidate from '@/helper/customValidate'; // 导入自定义表单验证器

export default {
  data() {
    return {
      user: {
        telephone: '',
        password: '',
      },
    };
  },
  validations: {
    user: {
      telephone: {
        required,
        telephone: custonValidate.telephoneValidate,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  methods: {
    // 管理验证的状态值
    validateState(name) {
      const { $dirty, $error } = this.$v.user[name]; // ES结构赋值
      return $dirty ? !$error : null;
    },

    login() {
      // 验证表单有无错误
      this.$v.user.$touch(); // 用户不进行任何数据交互也会触发数据验证错误
      if (this.$v.user.$anyError) {
        return; // 有错误则返回
      }
      // 验证通过，给后端192.168.233.135:9000发送数据请求
      const api = 'http://192.168.233.135:9000/api/auto/login';
      this.axios.post(api, { ...this.user }).then((res) => { // 登录成功时
        // 利用localStorage保存后端发来得 token
        localStorage.token = res.data.data.token;
        // console.log('success');
        console.log(res.data.status); // 打印登录的状态

        // 以toasts 的方式(提示卡)给出注册成功提示
        this.$bvToast.toast(res.data.status.success, {
          title: '恭喜你',
          variant: 'success', // 提示卡显示的颜色
          autoHideDelay: 1000, // 提示卡停留的时间
          toaster: 'b-toaster-top-center', // 提示卡的位置
          solid: true,
        });

        // 跳转首页
        setTimeout(() => { this.$router.replace({ name: 'Home' }); }, 1000);
      }).catch((err) => { // 登录失败时
        // console.log('error of: ');
        console.log(err.response.data); // 查看错误信息

        this.$bvToast.toast(err.response.data.status.error, {
          title: '登录数据错误',
          variant: 'danger', // 提示卡显示的颜色
          autoHideDelay: 5000, // 提示卡停留的时间
          toaster: 'b-toaster-top-center', // 提示卡的位置
          solid: true,
        });
      });
      console.log('success login');
    },

  },
};
</script>
