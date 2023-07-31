//导出所有用户的信息接口
import request from '@/utils/request'
import type { LoginForm, loginResponse } from './type.ts'
import axios from 'axios'
enum API {
  LOGIN_URL = '/user/login',
  USER_INFO = '/user/info',
}
export const reqLogin = (data: LoginForm) =>
  request.post<any, loginResponse>(API.LOGIN_URL, data)

export const reqUserInfo = () => request.get(API.USER_INFO)

interface form {
  password: string
  username: string
}
interface to {
  token: string
}
interface response {
  msg: string
  data: to
}

export function login(data: form) {
  return axios.post<any, response>(
    'http://ceshi13.dishait.cn/admin/login',
    data,
  )
}
