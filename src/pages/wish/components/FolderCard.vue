<script lang="ts" setup>
withDefaults(
  defineProps<{
    icon?: string
    ballColor?: string
    title: string
    subTitle?: string
  }>(),
  {
    ballColor: '#f59b22'
  }
)
</script>

<template>
  <uni-card class="folder-card">
    <view class="icon" v-if="icon">
      <uni-icons custom-prefix="iconfont" :type="icon" size="40" />
      <view class="ball" :style="{ backgroundColor: ballColor }" />
    </view>
    <view class="info">
      <h3 class="title">{{ title }}</h3>
      <text class="sub-title">{{ subTitle }}</text>
    </view>
  </uni-card>
</template>

<style lang="scss" scoped>
.folder-card {
  margin: 10rpx !important;
  padding: 0 !important;
  :deep(.uni-card__content) {
    display: flex;
    align-items: center;
    height: 166rpx;
    padding: 5rpx !important;
    color: #000;
    .icon {
      position: relative;
      width: 94rpx;
      margin-right: 10rpx;
      .uni-icons {
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: transparent;
      }
      .ball {
        position: absolute;
        right: 0;
        width: 46rpx;
        height: 46rpx;
        border-radius: 50%;
      }
    }
    .info {
      line-height: 2;
      .sub-title {
        color: $gray;
      }
    }
  }
}
</style>
