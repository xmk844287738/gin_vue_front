<template>
  <div>
    <h1>
      你好！
      <strong v-if="userInfo">{{ userInfo.name }}</strong>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userModule.userInfo;
    },
  },
  methods: {

  },
  components: {

  },
};
</script>

<style>
</style>
