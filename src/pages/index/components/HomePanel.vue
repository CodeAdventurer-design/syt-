<template>
  <view class="homePanel">
    <view class="item" v-for="item in list">
      <view :key="item.id" class="item-textBox">
        <text>{{ item.title }}</text>
        <text class="item-textBox-desc">{{ item.alt }}</text>
      </view>
      <navigator hover-class="none" class="cards">
        <image
          v-for="(src, srcIndex) in item.pictures"
          :key="srcIndex"
          class="image"
          mode="aspectFit"
          :src="src"
        ></image>
      </navigator>
    </view>
  </view>
</template>
<script lang="ts" setup>
import type { homePanelType } from '@/types/home'

defineProps<{
  list: homePanelType[]
}>()
</script>
<style lang="scss" scoped>
.homePanel {
  display: flex;
  flex-wrap: wrap;
  min-height: 508rpx;
  margin: 20rpx 20rpx 0;
  border-radius: 10rpx;
  background-color: #fff;
  .item {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 254rpx;
    border-right: 1rpx solid #eee;
    border-top: 1rpx solid #eee;
    &-textBox {
      padding: 24rpx 24rpx 0;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 32rpx;
      color: #262626;
      &-desc {
        font-size: 24rpx;
        color: #7f7f7f;
      }
    }
    .cards {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      padding: 15rpx 20rpx;
    }
  }
}
</style>
