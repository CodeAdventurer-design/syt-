<template>
  <view class="category">
    <view v-for="item in list" :key="item.id" class="category-item">
      <image :src="item.icon" mode="scaleToFill" />
      <text>{{ item.name }}</text>
    </view>
  </view>
</template>
<script setup lang="ts">
import type { categoryItemType } from '@/types/home'
defineProps<{
  list: categoryItemType[]
}>()
</script>
<style lang="scss" scoped>
.category {
  display: flex;
  flex-wrap: wrap;
  padding: 10rpx 0;
  margin: 20rpx 0 0;
  min-height: 328rpx;
  background: #f7f7f7;
  &-item {
    width: 150rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    image {
      width: 100rpx;
      height: 100rpx;
    }
    text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
