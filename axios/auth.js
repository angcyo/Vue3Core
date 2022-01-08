/**
 * 授权相关的接口
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/01
 */
import {onMounted, ref} from "vue"
import api from "./api"
import {http, wrapObj} from "./http"

/**创建一个图形验证码*/
function createImageCodeUrl(type) {
  return "/auth/code".toUrl({
    clientUuid: window.uuid,
    type: type || 2,
    timestamp: nowTime()
  })
}

/**授权相关逻辑*/
export default function useAuth() {

  /**登录图形验证码url的响应对象*/
  const loginImageCodeUrlRef = ref()

  /**注册时的图形验证码*/
  const registerImageCodeUrlRef = ref()

  /**更新登录的验证码*/
  const updateLoginImageCode = () => {
    loginImageCodeUrlRef.value = createImageCodeUrl(2)
  }
  const updateRegisterImageCode = () => {
    registerImageCodeUrlRef.value = createImageCodeUrl(1)
  }

  /**登录*/
  const login = (data, callback) => {
    toastLoading({
      message: '正在登录...',
    })
    api.postData({
      url: "/auth/login?toast",
      data: {
        "clientType": "web",
        "grantType": "password",
        ...wrapObj(data)
      }
    }, callback)
  }

  /**注册*/
  const register = (data, callback) => {
    toastLoading({
      message: '正在注册...',
    })
    api.postData({
      url: "/auth/register?toast",
      data: {
        "grantType": "password",
        ...wrapObj(data)
      }
    }, callback)
  }

  /**登出*/
  const logout = (callback) => {
    api.getData({
      url: "/auth/logout"
    }, (data, error) => {
      if (data) {
        //清除缓存
        local.token = undefined
        http.token = undefined
        local.user = undefined
      }
      callback?.(data, error)
    })
  }

  onMounted(() => {
    //首次刷新
    updateLoginImageCode()
    updateRegisterImageCode()
  })

  return {
    loginImageCodeUrlRef,
    registerImageCodeUrlRef,
    updateLoginImageCode,
    updateRegisterImageCode,
    login,
    register,
    logout,
  }
}
