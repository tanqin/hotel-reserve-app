<script lang="ts" setup>
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import type { THouseInfo } from '@/types/home'
import CityCheckbox from './CityCheckbox.vue'
import SpecialItem from './SpecialItem.vue'

const specialHouseList = ref<THouseInfo[]>([])

// 获取特惠房源列表
function getSpecialHouseList() {
  // 📌调取接口
  setTimeout(() => {
    let list: THouseInfo[] = []
    for (let i = 0; i < 4; i++) {
      list.push({
        id: i,
        pictures: [
          [
            'https://img02.mockplus.cn/image/2020-09-08/552a6c00-f12c-11ea-9d17-11b700b7f8d3.jpg',
            'https://img02.mockplus.cn/image/2020-09-08/5edfc600-f12c-11ea-9948-8d15b5335fa1.jpg',
            'https://img02.mockplus.cn/image/2020-09-08/64537eb0-f12c-11ea-9d17-11b700b7f8d3.jpg',
            'https://img02.mockplus.cn/image/2020-09-08/6b242f50-f12c-11ea-9d17-11b700b7f8d3.jpg'
          ][Math.floor(Math.random() * 4)]
        ],
        facility: '整套房子 · 1室1卫1床',
        tags: [],
        name: '寓见·消毒安心住·观景plus',
        currentPrice: 394,
        originalPrice: 788,
        discountTag: '5折 · 仅限今晚',
        score: Math.floor(Math.random() * 5) + 1
      })
    }
    specialHouseList.value = list
  }, 500)
}

onShow(() => {
  getSpecialHouseList()
})
</script>

<template>
  <view class="special-list">
    <HeadTitle title="短途盛夏特惠" subTitle="短途房源贴心推荐，低至7折" />
    <CityCheckbox />
    <uni-grid :column="2" :show-border="false" :square="false">
      <uni-grid-item
        v-for="specialHouse in specialHouseList"
        :key="specialHouse.id"
        :index="specialHouse.id"
      >
        <SpecialItem :houseInfo="specialHouse" />
      </uni-grid-item>
    </uni-grid>
    <button plain>展示更多成都特惠房源</button>
  </view>
</template>

<style lang="scss" scoped>
.special-list {
  margin-bottom: 40rpx;
}
</style>
