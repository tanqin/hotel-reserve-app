<script lang="ts" setup>
import type { THouseInfo } from '@/types/home'

withDefaults(
  defineProps<{
    data: THouseInfo
    size?: 'default' | 'small'
  }>(),
  {
    size: 'default'
  }
)

// 跳转房源详情
function handleGoDetail(id: string) {
  uni.navigateTo({ url: '/pages/home/houseDetail/houseDetail?id=' + id })
}
</script>

<template>
  <view
    class="discount-card"
    :style="{ height: size === 'small' && '156rpx' }"
    @tap="handleGoDetail(data.id)"
  >
    <image
      class="pic"
      :src="data?.pictures[0] || '/static/images/default-pic.png'"
      mode="aspectFill"
    />
    <uni-tag
      class="tag"
      :text="data?.discountTag"
      custom-style="background-color: #fff;border-color: #fff; color: #d8001b; font-weight: bold;"
    />
  </view>
</template>

<style lang="scss" scoped>
.discount-card {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 336rpx;
  padding: 10rpx;
  .pic {
    width: 100%;
    height: 100%;
    background-color: $bgc-placeholder;
    border-radius: 10rpx;
  }
  .tag {
    position: absolute;
    left: 20rpx;
    top: 20rpx;
  }
}
</style>
