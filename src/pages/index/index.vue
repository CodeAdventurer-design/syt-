<script setup lang="ts">
import XtxSwiper from '@/components/XtxSwiper.vue'
import CustomNavBar from './components/CustomNavBar.vue'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { bannerItemType } from '@/types/home'
//轮播图
const bannerList = ref<bannerItemType[]>([])

const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBanner()
})
</script>

<template>
  <view class="viewport">
    <!-- 自定义导航 -->
    <CustomNavBar></CustomNavBar>
    <!-- 自定义轮播图 -->
    <XtxSwiper :list="bannerList" />
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
