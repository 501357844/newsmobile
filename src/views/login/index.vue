<template>
  <div>
    <van-nav-bar title="登陆" />
    <form action>
      <van-field
        v-model="user.mobile"
        required
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field v-model="user.code" type="password" label="密码" placeholder="请输入密码" required />
    </form>
    <van-button type="info" style="width:100%">登陆</van-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #ccc;
}
.van-nav-bar__title {
  color: #fff;
}
</style>
