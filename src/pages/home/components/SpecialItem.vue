<script lang="ts" setup>
import { ref } from 'vue'

const rateValue = ref(4)
</script>

<template>
  <view class="special-item">
    <image class="pic" src="/static/images/landmark-city.png" mode="aspectFill" />
    <view class="facility">整套公寓·1室1卫1床</view>
    <view class="name one-line-overflow">寓见·消毒安心住·观景plus</view>
    <view class="price"
      ><text class="current-price">￥148</text><text class="original-price">￥158</text>/晚</view
    >
    <uni-rate :value="rateValue" size="16" activeColor="#008a85" />
    <view class="explain">超赞房东</view>
  </view>
</template>

<style lang="scss" scoped>
.special-item {
  padding: 10rpx;
  font-size: 28rpx;
  line-height: 2;
  .pic {
    width: 100%;
    height: 192rpx;
    border-radius: 10rpx;
  }
  .facility {
    color: $gray;
  }
  .name {
    font-size: 30rpx;
  }
  .price {
    font-size: 24rpx;
    .current-price {
      font-size: 28rpx;
    }
    .original-price {
      margin: 0 10rpx;
      color: $gray;
      text-decoration: line-through;
    }
  }
  .explain {
    color: $gray;
  }
}
</style>
