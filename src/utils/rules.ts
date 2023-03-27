/*
 * @Author: YuanQiii 1833386727@qq.com
 * @Date: 2023-03-18 23:05:55
 * @LastEditors: YuanQiii 1833386727@qq.com
 * @LastEditTime: 2023-03-25 10:58:12
 * @FilePath: \Consultation\src\utils\rules.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const loginRules = {
  mobile: <uview.FieldRule[]>[
    { required: true, message: '请输入手机号', trigger: ['blur'] },
    {
      validator: (rule, value, callback) => {
        const pattern = /^1[3-9]\d{9}$/
        return pattern.test(value)
      },
      message: '手机号格式不正确',
      trigger: ['blur'],
    },
  ],
  password: <uview.FieldRule[]>[
    { required: true, message: '请输入密码', trigger: ['blur'] },
    {
      validator: (rule, value, callback) => {
        const pattern = /^\w{8,24}$/
        return pattern.test(value)
      },
      message: '密码需8-24个字符',
      trigger: ['blur'],
    },
  ],
  code: <uview.FieldRule[]>[
    { required: true, message: '请输入验证码', trigger: ['blur'] },
    {
      validator: (rule, value, callback) => {
        console.log('callback', callback())

        const pattern = /^\d{6}$/
        return pattern.test(value)
      },
      message: '验证码是6个数字',
      trigger: ['blur'],
    },
  ],
}

export { loginRules }
