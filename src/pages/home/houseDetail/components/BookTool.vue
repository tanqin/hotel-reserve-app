<script lang="ts" setup>
import type { THouseInfo } from '@/types/home'

defineProps<{
  data: THouseInfo
}>()
</script>

<template>
  <view class="book-tool p24">
    <view class="info">
      <view class="price"
        ><text class="current-price">￥{{ data.currentPrice || '??' }}</text
        ><text class="original-price">￥{{ data.originalPrice || '??' }}</text
        >/晚
      </view>
      <uni-rate readonly :value="data.score" size="16" activeColor="#008a85" />
      <view class="tag">98%房客推荐</view>
    </view>
    <button class="select-date-btn" size="mini">选择其他日期</button>
  </view>
</template>

<style lang="scss" scoped>
.book-tool {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 162rpx;
  border-top: 2rpx solid $uni-border-color;
  background-color: #fff;
  .info {
    flex: 1;
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
    }
  }
  .select-date-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240rpx;
    height: 80rpx;
    background-color: $red;
    color: #fff;
  }
}
</style>
