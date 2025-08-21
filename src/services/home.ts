import type { bannerItemType, categoryItemType, homePanelType } from '@/types/home'
import { http } from '@/utils/request'

// 首页-广告区域
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<bannerItemType[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

//首页-前台分类
export const getHomeCategoryAPI = () => {
  return http<categoryItemType[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
//首页-热门推荐
export const getHomePanelAPI = () => {
  return http<homePanelType[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
