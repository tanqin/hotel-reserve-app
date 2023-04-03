<script lang="ts" setup>
import type { THouseInfo } from '@/types/home.type'

defineProps<{
  houseInfo: THouseInfo
}>()

// 跳转房源详情
function handleGoDetail(id: string) {
  uni.navigateTo({ url: '/pages/home/houseDetail/houseDetail?id=' + id })
}
</script>

<template>
  <view class="house-item" @tap="handleGoDetail(houseInfo.id)">
    <image
      class="cover"
      :src="houseInfo?.pictures[0] || '/static/images/default-pic.png'"
      mode="aspectFill"
    />
    <view class="house-info">
      <view class="facility"> {{ houseInfo.facility }}</view>
      <view class="title one-line-overflow">{{ houseInfo.title }}</view>
      <view class="evaluate">
        <uni-rate readonly :value="houseInfo.score" size="16" activeColor="#008a85" />
        <text>172条评价 · 超赞房东</text>
      </view>
      <view class="price"
        ><text class="current-price">￥{{ houseInfo.currentPrice || '??' }}</text
        >/晚
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.house-item {
  display: flex;
  padding: 10rpx;
  font-size: 28rpx;
  line-height: 1.5;
  .cover {
    width: 224rpx;
    height: 166rpx;
    margin-right: 24rpx;
    background-color: $bgc-placeholder;
    border-radius: 10rpx;
  }
  .house-info {
    .facility {
      color: $gray;
    }
    .title {
      font-size: 30rpx;
      font-weight: bold;
    }
    .evaluate {
      display: flex;
      & :nth-child(2) {
        color: $gray;
      }
    }
    .price {
      font-size: 28rpx;
      font-weight: bold;
    }
  }
}
</style>
