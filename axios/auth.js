/**
 * 授权相关的接口
 * Email:angcyo@126.com
 * @author angcyo
 * @date 2021/12/01
 */
import {onMounted, ref} from "vue"
import api from "./api"
import {wrapObj} from "./http"

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

  /**更新登录的验证码*/
  const updateLoginImageCode = () => {
    loginImageCodeUrlRef.value = createImageCodeUrl(2)
  }

  /**登录*/
  const login = (data, callback) => {
    api.postData({
      url: "/auth/login",
      data: {
        "clientType": "web",
        "grantType": "password",
        ...wrapObj(data)
      }
    }, callback)
  }

  onMounted(() => {
    //首次刷新
    updateLoginImageCode()
  })

  return {
    loginImageCodeUrlRef,
    updateLoginImageCode,
    login
  }
}
