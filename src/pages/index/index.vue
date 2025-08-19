<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavBar from './components/CustomNavBar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { bannerItemType, categoryItemType } from '@/types/home'
//轮播图
const bannerList = ref<bannerItemType[]>([])
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
//前台分类
const categoryPanelList = ref<categoryItemType[]>([])
const getCategoryPanel = async () => {
  const res = await getHomeCategoryAPI()
  categoryPanelList.value = res.result
}

onLoad(() => {
  getHomeBanner()
  getCategoryPanel()
})
</script>

<template>
  <view class="viewport">
    <!-- 自定义导航 -->
    <CustomNavBar></CustomNavBar>
    <!-- 自定义轮播图 -->
    <XtxSwiper :list="bannerList" />
    <!-- 自定义前台分类 -->
    <CategoryPanel :list="categoryPanelList"></CategoryPanel>
  </view>
</template>

<style lang="scss">
//
.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
