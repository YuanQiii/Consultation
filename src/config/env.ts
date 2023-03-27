const apiEnv: ApiEnv = 'dev'

const envMap = {
  dev: {
    baseUrl: 'https://yapi.pro/mock/17699',
    apiBaseUrl: 'https://yapi.pro/mock/17699',
  },
  beta: {
    baseUrl: 'https://yapi.pro/mock/17699',
    apiBaseUrl: 'https://yapi.pro/mock/17699',
  },
  prod: {
    baseUrl: 'https://yapi.pro/mock/17699',
    apiBaseUrl: 'https://yapi.pro/mock/17699',
  },
  local: {
    baseUrl: 'https://yapi.pro/mock/17699',
    apiBaseUrl: 'https://yapi.pro/mock/17699',
  },
}

type ApiEnv = keyof typeof envMap
type Env<T extends ApiEnv> = {
  apiEnv: T
} & (typeof envMap)[T]

function createEnv(apiEnv: ApiEnv): Env<typeof apiEnv> {
  return Object.assign({ apiEnv }, envMap[apiEnv])
}

const env = createEnv(apiEnv)
export default env
