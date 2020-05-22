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

              <b-button type="button" variant="primary" block @click="register()">登录</b-button>
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
    register() {
      console.log('success login');
    },

  },
};
</script>
