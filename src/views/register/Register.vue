<template>
  <div class="login">
    <div>
      <!-- class="mt-5" 样式与导航栏保持一定距离 -->
      <b-row class="mt-5">
        <b-col md="8" offset-md="2" lg="6" offset-lg="3">
          <b-card title="注册">
            <b-form>
              <!-- 名字 -->
              <b-form-group id="input-group-1" label="名字:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="user.name"
                  type="text"
                  placeholder="请输入你的名字(选填)"
                ></b-form-input>
              </b-form-group>

              <!-- 手机号 -->
              <b-form-group id="input-group-1" label="手机号:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="user.telephone"
                  @input="changeInput"
                  type="number"
                  placeholder="请输入你的手机号"
                ></b-form-input>
                <b-form-invalid-feedback :state="telephoneValidation">手机号必须为11位！</b-form-invalid-feedback>
                <b-form-valid-feedback :state="telephoneValidation">手机号符合11位！</b-form-valid-feedback>
              </b-form-group>

              <!-- 密码 -->
              <b-form-group id="input-group-1" label="密码:" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="user.password"
                  type="password"
                  placeholder="请输入你的密码"
                ></b-form-input>
              </b-form-group>

              <b-button type="button" variant="primary" block @click="register()">注册</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '',
        telephone: '',
        password: '',
      },
      telephoneValidation: null, // 不进行输入时，不进行表单验证
    };
  },
  methods: {
    register() {
      if (this.user.telephone.length !== 11) {
        this.telephoneValidation = false; // 手机号不符合条件
        return;
      }
      this.telephoneValidation = true; // 手机号符合条件

      console.log('success register');
    },

    changeInput() {
      // 使用input设置数据监听来移除上一次验证的结果
      this.telephoneValidation = null;
    },
  },
};
</script>
