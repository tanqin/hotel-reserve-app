<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <view class="entrance-card">
    <view class="title">{{ title }}</view>
    <uni-icons type="right" size="24" />
  </view>
</template>

<style lang="scss" scoped>
.entrance-card {
  display: flex;
  align-items: center;
  padding: 30rpx 0;
  border-bottom: 2rpx solid $bdc-light-gray;
  font-size: 36rpx;
  .title {
    flex: 1;
    color: $gray;
  }
}
</style>
