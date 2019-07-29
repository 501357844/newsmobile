<template>
  <div>
    <van-nav-bar title="登陆" />
    <form action>
      <span>{{ errors.first('phone') }}</span>
      <van-field
        name="phone"
        type="text"
        :error-message="errors.first('phone')"
        v-model="user.mobile"
        v-validate="'required|mobile'"
        required
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field v-model="user.code" type="password" label="密码" placeholder="请输入密码" required />
    </form>
    <van-button type="info" style="width:100%" @click.prevent="getLogin()" :loading="loading">登陆</van-button>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      },
      loading: false
    }
  },
  methods: {
    async getLogin () {
      this.loading = true
      const valid = await this.$validator.validate()
      if (!valid) {
        this.loading = false
        return
      }
      try {
        const data = await login(this.user)
        console.log(data)
        this.$store.commit('setUser', data)
        this.$router.push({ path: '/' })
      } catch (error) {
        console.log(error)
      }
      this.loading = false
    }
  }
}

</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #0096fa;
}
.van-nav-bar__title {
  color: #fff;
}
</style>
