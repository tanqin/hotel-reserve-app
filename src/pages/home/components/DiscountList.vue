<script lang="ts" setup>
import type { THouseInfo } from '@/types/home.type'
import DiscountCard from './DiscountCard.vue'
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'

const discountHouseList = ref<THouseInfo[]>([])

// 获取优惠房源列表
function getDiscountHouseList() {
  // 📌调取接口
  setTimeout(() => {
    discountHouseList.value = []
    for (let i = 0; i < 3; i++) {
      discountHouseList.value.push({
        id: i.toString(),
        pictures: [
          [
            'https://img02.mockplus.cn/image/2020-09-07/2979a210-f0dc-11ea-a598-1b4f0bef9f1b.jpg',
            'https://img02.mockplus.cn/image/2020-09-07/2d73b310-f0dc-11ea-baac-95a5b71ad650.jpg',
            'https://img02.mockplus.cn/image/2020-09-07/32698930-f0dc-11ea-baac-95a5b71ad650.jpg'
          ][i]
        ],
        facility: '整套房子 · 1室1卫1床',
        tags: [],
        title: '寓见·消毒安心住·观景plus',
        currentPrice: 394,
        originalPrice: 788,
        discountTag: ['限时5折起', '低至5折', '低至8折'][i],
        city: '成都市'
      })
    }
  }, 500)
}

onShow(() => {
  getDiscountHouseList()
})
</script>

<template>
  <view class="discount-list">
    <HeadTitle title="成都房东直降优惠" subTitle="房东直接让利，更多超值选择" />
    <view class="card-list">
      <uni-row>
        <uni-col :span="12">
          <DiscountCard :data="discountHouseList[0]" />
        </uni-col>
        <uni-col :span="12">
          <DiscountCard :data="discountHouseList[1]" size="small" class="mb24" />
          <DiscountCard :data="discountHouseList[2]" size="small" />
        </uni-col>
      </uni-row>
    </view>
  </view>
</template>

<style lang="scss" scoped></style>
