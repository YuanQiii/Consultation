<template>
  <div class="flex justify-between">
    <div>{{ isPass ? '密码登录' : '短信验证码登录' }}</div>
    <div @click="isPass = !isPass">{{ isPass ? '短信验证码登录' : '密码登录' }}</div>
  </div>
  <!-- form 表单 -->
  <u-form ref="uLoginForm" :model="loginData">
    <u-form-item prop="mobile">
      <u-input v-model="loginData.mobile" placeholder="请输入手机号" clearable />
    </u-form-item>
    <u-form-item v-if="isPass" prop="password">
      <u-input v-model="loginData.password" type="password" placeholder="请输入密码" clearable />
    </u-form-item>
    <u-form-item v-else prop="code">
      <u-input v-model="loginData.code" placeholder="请输入验证码" clearable />
      <u-button size="mini" type="success" @click="handleGetCode">{{ codeText }}</u-button>
    </u-form-item>
  </u-form>

  <div>
    <u-checkbox v-model="agree">
      <span>我已同意</span>
      <a href="javascript:;">用户协议</a>
      <span>及</span>
      <a href="javascript:;">隐私条款</a>
    </u-checkbox>
  </div>
  <div>
    <u-button native-type="submit" round type="primary" @click="handleLogin">登 录</u-button>
    <u-button class="mt-2" native-type="submit" round type="primary">注 册</u-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { loginByCode, loginByPassword } from '@/api/user'
import useUserStore from '@/store/user'
import { loginRules } from '@/utils/rules'
// 表单的数据
const loginData = reactive({
  mobile: '18908077873',
  password: '123yqgta',
  code: '',
})

const agree = ref(true)

// 短信登录界面切换，添加短信输入框校验
const isPass = ref(true)
const code = ref('')

const uLoginForm = ref()
const codeText = ref('获取验证码')

// 设置表单校验
onMounted(() => {
  uLoginForm.value.setRules(loginRules)
})

// 表单的数据
const store = useUserStore()

// 发送短信验证码
const handleGetCode = function () {
  const pattern = /^1[3-9]\d{9}$/

  const time = ref(0)
  let timerId!: number

  if (loginData.mobile !== '' && pattern.test(loginData.mobile)) {
    time.value = 60
    uni.showToast({
      title: '发送成功',
    })
    // 开启倒计时
    if (timerId) clearInterval(timerId)
    timerId = window.setInterval(() => {
      time.value--
      codeText.value = String(time.value)
      if (time.value <= 0) {
        clearInterval(timerId)
        codeText.value = '重新获取验证码'
      }
    }, 1000)
  }
}

// 同时支持 密码登录 和  短信登录
const handleLogin = () => {
  uLoginForm.value.validate(async (valid: boolean) => {
    if (valid) {
      // 当表单校验成功后触发 submit 事件 触发这个 login 函数
      if (!agree.value) return uni.showToast({ title: '请勾选用户协议' })

      const res: any = isPass.value
        ? await loginByPassword({
            mobile: loginData.mobile,
            password: loginData.password,
          })
        : await loginByCode({
            mobile: loginData.mobile,
            code: code.value,
          })

      // 成功：存储用户信息+跳转地址+成功提示
      store.setUser(res.data)

      uni.switchTab({
        url: '/pages/user/user',
      })
      uni.showToast({
        title: '登录成功',
      })
    }
  })
}
</script>

<style lang="scss" scoped></style>
