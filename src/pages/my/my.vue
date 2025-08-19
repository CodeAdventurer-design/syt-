<script setup lang="ts">
import { useMemberStore } from '@/stores'
import '@/utils/request'
import { http } from '@/utils/request'
const memberStore = useMemberStore()
//测试请求
const getData = async () => {
  const res = await http<string[]>({
    method: 'GET',
    url: '/member/profile',
  })
  console.log(res.result, 'res')
}
</script>

<template>
  <view class="my">
    <button
      @tap="
        memberStore.setProfile({
          nickname: '黑马先锋',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="getData()" size="mini" plain type="warn">测试请求</button>
  </view>
</template>

<style lang="scss">
//
</style>
