import http from '@/utils/request'

export const sendMobileCode = (params: SendMobileCode.params) =>
  http.get<SendMobileCode.data>('/code', params)

export const loginByCode = (params: LoginByCode.params) =>
  http.post<LoginByCode.data>('/loginByCode', params)

export const loginByPassword = (params: loginByPassword.params) =>
  http.post<loginByPassword.data>('/loginByPassword', params)
