<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand @click="$router.push({name: 'Home'})">小麦客</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <!-- 网易云音乐外链 -->
        <!-- <b-col md="8" offset-md="2" lg="6" offset-lg="3">
          <iframe
            frameborder="no"
            border="0"
            marginwidth="0"
            marginheight="0"
            width="256"
            height="86"
            src="//music.163.com/outchain/player?type=2&id=1373661216&auto=0&height=66"
          ></iframe>
        </b-col>-->

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right v-if="userInfo">
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>{{ userInfo.name }}</em>
              </template>
              <b-dropdown-item href="#">个人主页</b-dropdown-item>
              <b-dropdown-item href="#">退出</b-dropdown-item>
            </b-nav-item-dropdown>
            <div v-if=" !userInfo">
              <b-nav-item
                v-if="$route.name != 'register'"
                @click="$router.replace({name: 'register'})"
              >注册</b-nav-item>
              <b-nav-item v-if="$route.name != 'login'" @click="$router.replace({name: 'login'})">登录</b-nav-item>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
// import storageService from '@/service/storageService'; // 导入本地缓存服务

export default {
  computed: { // 计算属性
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
};
</script>
