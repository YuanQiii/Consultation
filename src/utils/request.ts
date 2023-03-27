import { getCommonParams } from '@/config/commonParams'
import env from '@/config/env'
import { hideLoading, showLoading } from '@/config/serviceLoading'

import { isDevelopment, isH5 } from './platform'

function reject(err: { errno: number; errmsg: string }) {
  const { errmsg } = err
  uni.showToast({
    title: errmsg,
  })
}

const apiBaseUrl = env.apiBaseUrl

function baseRequest(method, url: string, data) {
  return new Promise((resolve) => {
    showLoading(data.isLoading)
    delete data.isLoading
    let responseData

    uni.request({
      url: apiBaseUrl + url,
      method,
      timeout: 20000,
      header: {
        'content-type':
          method === 'GET'
            ? 'application/json; charset=utf-8'
            : 'application/x-www-form-urlencoded',
      },
      data,
      success: (res: any) => {
        responseData = res.data
      },
      fail: (err) => {
        reject({
          errno: -1,
          errmsg: '网络不给力，请检查你的网络设置~',
        })
      },
      complete: (data) => {
        resolve(responseData)
        hideLoading()
      },
    })
  })
}

const http = {
  get: <T>(api: string, params) =>
    baseRequest('GET', api, { ...getCommonParams(), ...params }) as Http.Response<T>,
  post: <T>(api: string, params) =>
    baseRequest('POST', api, { ...getCommonParams(), ...params }) as Http.Response<T>,
}

export default http
