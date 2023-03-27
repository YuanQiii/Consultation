import type { FormInstance } from 'vk-uview-ui'
import { type Ref } from 'vue'

import type { CodeType } from '@/@types/store'
import { sendMobileCode } from '@/api/user'

export const useMobileCode = (mobile: Ref<string>, type: CodeType) => {
  const time = ref(0)
  const form = ref<FormInstance | null>(null)
  let timerId: number
  const send = async () => {
    if (time.value > 0) return
    await form.value?.validate('mobile')
    // 上面的校验成功发验证码
    await sendMobileCode({
      mobile: mobile.value,
      type,
    })
    time.value = 60
    uni.showToast({
      title: '发送成功',
    })
    // 开启倒计时
    if (timerId) clearInterval(timerId)
    timerId = window.setInterval(() => {
      time.value--
      if (time.value <= 0) clearInterval(timerId)
    }, 1000)
  }

  onUnmounted(() => {
    clearInterval(timerId)
  })

  return { form, time, send }
}
