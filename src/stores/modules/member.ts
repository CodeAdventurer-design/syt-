import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useMemberStore = defineStore(
  'member',
  () => {
    // 会员信息
    const profile = ref<any>()

    // 保存会员信息，登录时使用
    const setProfile = (val: any) => {
      profile.value = val
    }

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
    }

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  // TODO: 持久化
  {
    //网页端配置
    // persist: true,
    //小程序配置
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorage({
            key: 'key',
            success: ({ data }) => {},
            fail: (error) => {},
          })
        },
        setItem(key, value) {
          // 正确写法，传递对象参数，key 是存储的键名，data 是要存储的值
          uni.setStorage({
            key: key,
            data: value,
            success: () => {
              /* 可选的成功回调 */
            },
            fail: (err) => {
              /* 可选的失败回调 */
            },
          })
        },
      },
    },
  },
)
