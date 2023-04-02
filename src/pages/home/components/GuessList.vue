<script lang="ts" setup>
import { ref } from 'vue'
import CityCard from './CityCard.vue'
import type { TCity } from '@/types/home'
import { onShow } from '@dcloudio/uni-app'

const cityList = ref<TCity[]>([])
// 获取城市列表
function getCityList() {
  // 📌调取接口
  setTimeout(() => {
    cityList.value = []
    for (let i = 0; i < 4; i++) {
      cityList.value.push({
        id: i,
        coverUrl: [
          'https://img02.mockplus.cn/image/2020-09-07/9ad6d2b0-f0dd-11ea-bc40-179c46417a14.jpeg',
          'https://img02.mockplus.cn/image/2020-09-07/ba478770-f0dd-11ea-9731-9f5dce9cc7fd.jpg',
          'https://img02.mockplus.cn/image/2020-09-07/a5709940-f0dd-11ea-bafd-492b5ca81ed3.jpeg',
          'https://img02.mockplus.cn/image/2020-09-07/ac0b6cd0-f0dd-11ea-baac-95a5b71ad650.jpg'
        ][i],
        cityName: ['重庆', '西安', '厦门', '丽江'][i]
      })
    }
  }, 500)
}

onShow(() => {
  getCityList()
})
</script>

<template>
  <view class="guess-list">
    <HeadTitle title="你可能也想去" subTitle="发现更多出行灵感" />
    <view class="card-list hidden-scroll-bar">
      <CityCard class="mr24" v-for="city in cityList" :key="city.id" :data="city" />
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
