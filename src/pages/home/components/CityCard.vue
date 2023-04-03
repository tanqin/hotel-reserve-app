<script lang="ts" setup>
import type { TCity } from '@/types/home.type'

defineProps<{
  data: TCity
}>()
</script>

<template>
  <view class="city-card">
    <image class="pic" :src="data.coverUrl" mode="aspectFill" />
    <view class="city">{{ data.cityName }}</view>
  </view>
</template>

<style lang="scss" scoped>
.city-card {
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 276rpx;
  height: 276rpx;
  background-color: $bgc-placeholder;
  border-radius: 10rpx;
  .pic {
    width: 276rpx;
    height: 276rpx;
  }
  .city {
    position: absolute;
    left: 20rpx;
    bottom: 20rpx;
    color: #fff;
  }
}
</style>
