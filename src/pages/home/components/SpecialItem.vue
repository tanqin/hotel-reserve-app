<script lang="ts" setup>
import type { THouseInfo } from '@/types/home'

defineProps<{
  // 是否展示更多标签
  showMoreTag?: boolean
  houseInfo: THouseInfo
}>()

// 跳转房源详情
function handleGoDetail(id: string) {
  console.log(id)
  uni.navigateTo({ url: '/pages/home/houseDetail/houseDetail?id=' + id })
}
</script>

<template>
  <view class="special-item" @tap="handleGoDetail(houseInfo.id)">
    <image
      class="pic"
      :style="{ height: showMoreTag && '412rpx' }"
      :src="houseInfo?.pictures[0] || '/static/images/default-pic.png'"
      mode="aspectFill"
    />
    <view class="facility">
      <uni-tag v-if="showMoreTag" :text="houseInfo.tags[0]?.text" /> {{ houseInfo.facility }}</view
    >
    <view class="name one-line-overflow">{{ houseInfo.title }}</view>
    <TagGroup v-if="showMoreTag" :tagList="houseInfo.tags.slice(1)" backgroundColor="#fff" />
    <view class="price"
      ><text class="current-price">￥{{ houseInfo.currentPrice || '??' }}</text
      ><text class="original-price">￥{{ houseInfo.originalPrice || '??' }}</text
      >/晚
      <uni-tag v-if="showMoreTag" :text="houseInfo.discountTag" />
    </view>
    <uni-rate
      readonly
      :value="houseInfo.score"
      size="16"
      activeColor="#008a85"
      v-if="!showMoreTag"
    />
    <view class="tag" v-if="!showMoreTag">{{ houseInfo.tags?.[0]?.text }}</view>
  </view>
</template>

<style lang="scss" scoped>
.special-item {
  padding: 10rpx;
  font-size: 28rpx;
  line-height: 2;
  .pic {
    width: 100%;
    height: 214rpx;
    background-color: $bgc-placeholder;
    border-radius: 10rpx;
  }
  .facility {
    color: $gray;
    .uni-tag {
      margin-right: 10rpx;
      border: none;
      background-color: #000;
      font-weight: bold;
    }
  }
  .name {
    font-size: 30rpx;
    font-weight: bold;
  }
  .price {
    font-size: 24rpx;
    .current-price {
      color: $red;
      font-size: 28rpx;
      font-weight: bold;
    }
    .original-price {
      margin: 0 10rpx;
      color: $gray;
      text-decoration: line-through;
    }
    .uni-tag {
      margin-left: 10rpx;
      border: none;
      background-color: $bgc-pink;
      color: $red;
      font-weight: bold;
    }
  }
  .tag {
    color: $gray;
  }
}
</style>
