<script lang="ts" setup>
withDefaults(
  defineProps<{
    title: string
    color?: string
    subTitle?: string
  }>(),
  {
    subTitle: ''
  }
)
</script>

<template>
  <view class="head-title">
    <view
      class="title"
      :style="{
        color: color
      }"
      >{{ title }}</view
    >
    <view class="sub-title"> <slot></slot>{{ subTitle }} </view>
  </view>
</template>

<style lang="scss" scoped>
.head-title {
  margin-bottom: 20rpx;
  .title {
    font-size: 48rpx;
    margin-bottom: 10rpx;
  }
  .sub-title {
    color: $gray;
    font-size: 28rpx;
    line-height: 2;
  }
}
</style>
