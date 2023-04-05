<script lang="ts" setup>
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import type { THouseInfo, THouseQueryParams } from '@/types/home.type'
import SpecialItem from './SpecialItem.vue'

const cityTagList = [
  {
    id: '0',
    text: '成都'
  },
  {
    id: '1',
    text: '重庆'
  },
  {
    id: '2',
    text: '厦门'
  },
  {
    id: '3',
    text: '西安'
  },
  {
    id: '4',
    text: '丽江'
  },
  {
    id: '5',
    text: '上海'
  },
  {
    id: '6',
    text: '大理'
  },
  {
    id: '7',
    text: '三亚'
  }
]

const specialHouseList = ref<THouseInfo[]>([])

// 获取特惠房源列表
function getSpecialHouseList() {
  // 📌调取接口
  setTimeout(() => {
    specialHouseList.value = []
    for (let i = 0; i < 4; i++) {
      specialHouseList.value.push({
        id: i.toString(),
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
        title: '寓见·消毒安心住·观景plus',
        currentPrice: 394,
        originalPrice: 788,
        discountTag: '5折 · 仅限今晚',
        score: Math.floor(Math.random() * 5) + 1,
        city: '成都市'
      })
    }
  }, 500)
}

onShow(() => {
  getSpecialHouseList()
})

const emit = defineEmits<{
  (e: 'showMore', params: THouseQueryParams): void
}>()

// 展示更多
function handleShowMore() {
  const params: THouseQueryParams = {
    regionType: 0,
    discountType: 1,
    city: '成都市',
    startTime: '2023/4/5',
    endTime: '2023/4/6',
    numOfPeople: 1,
    pageNo: 1,
    pageSize: 10
  }
  emit('showMore', params)
}
</script>

<template>
  <view class="special-list">
    <HeadTitle title="短途盛夏特惠" subTitle="短途房源贴心推荐，低至7折" />
    <TagGroup :tagList="cityTagList" size="large" />
    <uni-grid :column="2" :show-border="false" :square="false">
      <uni-grid-item
        v-for="specialHouse in specialHouseList"
        :key="specialHouse.id"
        :index="Number(specialHouse.id)"
      >
        <SpecialItem :houseInfo="specialHouse" />
      </uni-grid-item>
    </uni-grid>
    <button plain @tap="handleShowMore">展示更多成都特惠房源</button>
  </view>
</template>

<style lang="scss" scoped>
.special-list {
  margin-bottom: 40rpx;
}
</style>
