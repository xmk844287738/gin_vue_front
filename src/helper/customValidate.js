const telephoneValidate = (value) => /^1[3|4|5|7]\d{9}$/.test(value); // 利用正则表达式构建自定义表单验证器

// 把作为 telephoneValidate 的验证器抽离形成一个公共的组件
export default {
  telephoneValidate,
};
