<script setup lang="ts">
import env from '@/config/env'
import routingIntercept from '@/utils/permission'

onLaunch(() => {
  console.log('App Launch')
  console.log(env.apiEnv, 'apiEnv')
  const appStore = useStore('app')
  const systemInfo = appStore.getSystemInfo()
  console.log(systemInfo, 'systemInfo')
  // 对路由进行统一拦截，实现路由导航守卫 router.beforeEach 功能
  routingIntercept()
  uni.redirectTo({
    url: 'pages/login/login',
  })
})

onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style lang="scss">
@import 'static/css/index.scss';
@import 'vk-uview-ui/index.scss';
</style>
