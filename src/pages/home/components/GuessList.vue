<script lang="ts" setup>
import CityCard from './CityCard.vue'
</script>

<template>
  <view class="guess-list">
    <HeadTitle title="你可能也想去" subTitle="发现更多出行灵感" />
    <view class="card-list hidden-scroll-bar">
      <CityCard class="mr24" v-for="item in 4" :key="item" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.guess-list {
  margin-bottom: 20rpx;
  .card-list {
    white-space: nowrap;
    overflow-x: auto;
  }
}
</style>
