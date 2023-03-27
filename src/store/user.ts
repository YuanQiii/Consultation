import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const defaultUserInfo = {
  id: '',
  account: '',
  avatar: '',
  mobile: '',
  token: '',
}

// 定义用户状态仓库
export default defineStore(
  'user',
  () => {
    // 用户信息
    const user = ref<User.info>(defaultUserInfo)

    const userId = computed(() => user.value!.id)

    // token
    const token = computed(() => user.value!.token)

    // 修改用户信息
    const setUser = (u: User.info) => {
      user.value = u
    }
    // 删除用户信息
    const delUser = () => {
      user.value = defaultUserInfo
    }
    // 记录回跳地址，修改回跳地址
    const returnUrl = ref('')
    const updateReturnUrl = (url: '') => (returnUrl.value = url)
    return { user, userId, token, setUser, delUser, returnUrl, updateReturnUrl }
  },
  {
    // 开启持久化（使用本地存储，默认是localStorage）
    persist: {
      enabled: true,
    },
  }
)
