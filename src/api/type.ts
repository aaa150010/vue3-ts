//登录接口需要携带参数ts类型
export interface LoginForm {
  username: string
  password: string
}
interface dataType {
  token: string
}

// 登录接口返回数据类型
export interface loginResponse {
  code: string
  data: dataType
}
//获取用户信息返回
