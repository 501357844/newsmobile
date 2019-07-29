const USER_KEY = 'user'
// 获取
export const getUser = () => JSON.parse(window.localStorage.getItem(USER_KEY))
// 设置
export const setUser = (data) => window.localStorage.setItem(USER_KEY, JSON.stringify(data))
// 移除
export const removeUser = () => window.localStorage.removeItem(USER_KEY)
