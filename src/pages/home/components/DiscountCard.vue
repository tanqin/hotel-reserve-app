<script lang="ts" setup>
withDefaults(
  defineProps<{
    size?: 'default' | 'small'
  }>(),
  {
    size: 'default'
  }
)
</script>

<template>
  <view class="discount-card" :style="{ height: size === 'small' && '156rpx' }">
    <image class="pic" src="/static/images/greet.jpg" mode="aspectFill" />
    <uni-tag
      class="tag"
      text="限时5折起"
      custom-style="background-color: #fff;border-color: #fff; color: #d8001b; font-weight: bold;"
    />
  </view>
</template>

<style lang="scss" scoped>
.discount-card {
  display: inline-block;
  position: relative;
  overflow: hidden;
  width: 322rpx;
  height: 336rpx;
  background-color: $bg-color-placeholder;
  border-radius: 10rpx;
  .pic {
    width: 100%;
    height: 100%;
  }
  .tag {
    position: absolute;
    left: 20rpx;
    top: 20rpx;
  }
}
</style>
