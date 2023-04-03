<script lang="ts" setup>
import type { THouseInfo, THouseQueryParams, TTag } from '@/types/home'
import { computed } from 'vue'
import SpecialItem from './SpecialItem.vue'
import { ref } from 'vue'
import type { DefineComponent } from 'vue'

const props = defineProps<{
  visible?: boolean
  searchParams: THouseQueryParams
}>()

const allTagList = ref<TTag[]>([])

// 获取所有标签列表
function getAllTagList() {
  // 📌调取接口
  setTimeout(() => {
    allTagList.value = [
      {
        id: '1',
        text: '整个房源'
      },
      {
        id: '2',
        text: '超赞房东'
      },
      {
        id: '3',
        text: '特惠房源'
      },
      {
        id: '4',
        text: '自助入住'
      },
      {
        id: '5',
        text: '闪订'
      },
      {
        id: '6',
        text: '安心住'
      },
      {
        id: '7',
        text: '防疫设施'
      }
    ]
  }, 500)
}

const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()

const popupVisible = computed({
  get() {
    props.visible && getAllTagList()
    return props.visible
  },
  set(newVal) {
    emit('update:visible', newVal)
  }
})

// 关闭弹出层
function handleClosePopup() {
  popupVisible.value = false
}
const paging = ref<DefineComponent>()
const houseList = ref<THouseInfo[]>([])

// 获取房源列表
function getHouseList() {
  // 📌调取接口
  setTimeout(() => {
    const pageNo = searchParams.value.pageNo
    const pageSize = searchParams.value.pageSize
    let list: THouseInfo[] = []
    if (pageNo * pageSize <= 100) {
      for (let i = (pageNo - 1) * pageSize; i < pageNo * pageSize; i++) {
        list.push({
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
          tags: [
            {
              id: '1',
              text: '太古里'
            },
            {
              id: '100',
              text: '超赞房东'
            },
            {
              id: '102',
              text: '安心住'
            },
            {
              id: '103',
              text: '免费停车'
            },
            {
              id: '104',
              text: '附近地铁'
            },
            {
              id: '105',
              text: '可以做饭'
            }
          ],
          title: '寓见·消毒安心住·观景plus',
          currentPrice: 394,
          originalPrice: 788,
          discountTag: '5折 · 仅限今晚',
          city: '成都市'
        })
      }
    }
    paging.value!.complete(list)
  }, 500)
}

// 下拉菜单项数据
const filterData = [
  [
    { text: '人数', value: 0 },
    { text: '2人', value: 1 },
    { text: '3人', value: 2 },
    { text: '4人', value: 3 },
    { text: '5人', value: 4 },
    { text: '10人', value: 5 }
  ],
  [
    { text: '位置区域', value: 0 },
    { text: '位置1', value: 1 },
    { text: '位置2', value: 2 }
  ],
  [
    { text: '综合排序', value: 0 },
    { text: '排序1', value: 1 },
    { text: '排序2', value: 2 },
    { text: '排序3', value: 3 }
  ],
  [
    { text: '筛选条件', value: 0 },
    { text: '条件1', value: 1 },
    { text: '条件', value: 2 },
    { text: '条件3', value: 3 }
  ]
]

const defaultIndex = [0, 0, 0, 0]

// 下拉菜单过滤搜索
function handleSelected(res: any) {
  console.log(res)
  // searchParams.numberOfPeople = res[0][0].value === 0 ? undefined : res[0][0].value
  // searchParams.position  = res[1][0].value === 0 ? undefined : res[1][0].value
  // searchParams.comprehensive = res[2][0].value === 0 ? undefined : res[2][0].value
  // searchParams.condition = res[3][0].value === 0 ? undefined : res[3][0].value
}

const searchParams = computed(() => props.searchParams)

// 分页查询
const queryList = (pageNo: number, pageSize: number) => {
  searchParams.value.pageNo = pageNo
  searchParams.value.pageSize = pageSize
  getHouseList()
}
</script>

<template>
  <Popup class="search-result-popup" type="right" v-model:visible="popupVisible" :showTop="false">
    <z-paging ref="paging" v-model="houseList" @query="queryList">
      <template #top>
        <view class="top-part main-container">
          <uni-card class="top-bar">
            <uni-icons type="left" size="24" @tap="handleClosePopup" />
            <text class="city">{{ searchParams.city }}</text>
            <text class="tags">景点/地址/房源名</text>
            <view class="date-range">
              <uni-dateformat :date="searchParams.startTime" format="MM/dd入住" />
              <uni-dateformat :date="searchParams.endTime" format="MM/dd退房" />
            </view>
          </uni-card>
          <ren-dropdown-filter
            :filterData="filterData"
            :defaultIndex="defaultIndex"
            @onSelected="handleSelected"
          />
          <TagGroup :tagList="allTagList" />
          <h4 class="results">100多处住宿</h4>
        </view>
      </template>
      <view class="result-list">
        <SpecialItem
          v-for="houseInfo in houseList"
          :key="houseInfo.id"
          showMoreTag
          :houseInfo="houseInfo"
        />
      </view>
    </z-paging>
  </Popup>
</template>

<style lang="scss" scoped>
.top-part {
  .top-bar {
    flex: none;
    margin: 0 0 20rpx !important;
    box-shadow: rgb(0 0 0 / 8%) 2px 1px 6px 5px;
    :deep(.uni-card__content) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4rpx !important;
      color: $green;
      .city {
        padding: 0 20rpx;
        border-right: 1px solid $uni-border-color;
      }
      .tags {
        flex: 1;
        color: $gray;
        text-align: center;
      }
      .date-range {
        display: flex;
        flex-direction: column;
        font-size: 20rpx !important;
      }
    }
  }
  .results {
    margin-top: 28rpx;
    font-size: 40rpx;
  }
}
.result-list {
  padding: 0 24rpx 24rpx;
}
</style>
