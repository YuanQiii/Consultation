/*
 * @Author: YuanQiii 1833386727@qq.com
 * @Date: 2023-03-25 10:42:01
 * @LastEditors: YuanQiii 1833386727@qq.com
 * @LastEditTime: 2023-03-25 10:57:37
 * @FilePath: \Consultation\src\@types\vk-uview-ui.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
declare namespace uview {
  interface FieldRule {
    pattern?: RegExp
    trigger?: FieldValidateTrigger | FieldValidateTrigger[]
    message?: FieldRuleMessage
    required?: boolean
    validator?: FieldRuleValidator
    formatter?: FiledRuleFormatter
    validateEmpty?: boolean
  }
}

declare type FieldType =
  | 'tel'
  | 'url'
  | 'date'
  | 'file'
  | 'text'
  | 'time'
  | 'week'
  | 'color'
  | 'digit'
  | 'email'
  | 'image'
  | 'month'
  | 'radio'
  | 'range'
  | 'reset'
  | 'button'
  | 'hidden'
  | 'number'
  | 'search'
  | 'submit'
  | 'checkbox'
  | 'password'
  | 'textarea'
  | 'datetime-local'
declare type FieldTextAlign = 'left' | 'center' | 'right'
declare type FieldClearTrigger = 'always' | 'focus'
declare type FieldFormatTrigger = 'onBlur' | 'onChange'
declare type FieldValidateTrigger = 'blur' | 'change' | 'submit'
declare type FieldAutosizeConfig = {
  maxHeight?: number
  minHeight?: number
}
declare type FieldValidateError = {
  name?: string
  message: string
}
declare type FieldRuleMessage = string | ((value: any, rule: uview.FieldRule) => string)
declare type FieldRuleValidator = (
  value: any,
  rule: uview.FieldRule
) => boolean | string | Promise<boolean | string>
declare type FiledRuleFormatter = (value: any, rule: uview.FieldRule) => string
