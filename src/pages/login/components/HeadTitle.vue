<script lang="ts" setup>
withDefaults(
  defineProps<{
    title: string
    subTitle?: string
  }>(),
  {
    subTitle: ''
  }
)
</script>

<template>
  <view class="head-title">
    <view class="title">{{ title }}</view>
    <view class="sub-title">{{ subTitle }} </view>
  </view>
</template>

<style lang="scss" scoped>
.head-title {
  .title {
    font-size: 48rpx;
  }
  .sub-title {
    color: $gray;
    font-size: 28rpx;
    line-height: 2;
  }
}
</style>
