import fetch from '@/utils/fetch'

const PRODUCTION_URL = 'https://petinhome.net/api' // 线上环境
const DEV_URL = 'https://petinhome.net/api' // 测试环境

let envVersion = __wxConfig.envVersion, baseUrl = '';
console.log(envVersion);
switch (envVersion) {
  case 'develop': //开发版  
  case 'trial'://体验版  
    baseUrl = DEV_URL;
    break;
  case 'release'://正式版
    baseUrl = PRODUCTION_URL;
    break;
}

export const REQ_URL = baseUrl;

// 获取appid  token
export const getUserId = (data) => {
  let pathUrl = '/user/login'
  return fetch.post(REQ_URL + pathUrl, data)
}



// 首页banner
export const getBanner = (data) => {
  let pathUrl = '/banner/queryBanner'
  return fetch.get(REQ_URL + pathUrl, data)
}
// 顶部滚动文字
export const getTopScrollingText = (data) => {
  let pathUrl = '/banner/queryTopScrollingText'
  return fetch.get(REQ_URL + pathUrl, data)
}




// 查询订单
export const getOrders = (data) => {
  let pathUrl = '/order/queryOrders'
  return fetch.post(REQ_URL + pathUrl, data)
}
// 下单
export const placeAnOrder = (data) => {
  let pathUrl = '/order/placeAnOrder'
  return fetch.post(REQ_URL + pathUrl, data)
}




// 个人信息
export const gainUserInfo = (data) => {
  let pathUrl = '/user/queryUserInfo'
  return fetch.get(REQ_URL + pathUrl, data)
}
// 更新个人信息
export const editUserInfo = (data) => {
  let pathUrl = '/user/editUserInfo'
  return fetch.post(REQ_URL + pathUrl, data)
}
// 更新头像
export const updateAvatar = (data) => {
  let pathUrl = '/user/updateAvatar'
  return fetch.post(REQ_URL + pathUrl, data)
}





// 文件上传
export const uploadFile = (data) => {
  let pathUrl = '/file/upload'
  let tmp = {}
  for (let i in data) {
    if (i != 'file') {
      tmp[i] = data[i]
    }
  }
  return fetch.upload(REQ_URL + pathUrl, data.file, tmp)
}
