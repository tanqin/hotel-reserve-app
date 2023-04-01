<script lang="ts" setup>
import { ref } from 'vue'

const currentCity = ref(0)
const cityData = [
  {
    text: '成都',
    value: 0
  },
  {
    text: '重庆',
    value: 1
  },
  {
    text: '厦门',
    value: 2
  },
  {
    text: '西安',
    value: 3
  },
  {
    text: '丽江',
    value: 4
  },
  {
    text: '上海',
    value: 5
  },
  {
    text: '大理',
    value: 6
  },
  {
    text: '三亚',
    value: 7
  }
]
</script>

<template>
  <view class="city-checkbox hidden-scroll-bar">
    <uni-data-checkbox mode="tag" v-model="currentCity" :localdata="cityData" />
  </view>
</template>

<style lang="scss" scoped>
.city-checkbox {
  overflow-x: auto;
  background-color: $bg-color-gray;
  :deep(.checklist-group) {
    display: block;
    white-space: nowrap;
    .checklist-box {
      display: inline-flex;
      width: 146rpx;
      height: 80rpx;
      background-color: #fff !important;
      border: none !important;
      &.is-checked {
        background-color: $green !important;
      }
      .checklist-content {
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
