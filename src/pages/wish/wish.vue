<script lang="ts" setup>
import { ref } from 'vue'
import FolderCard from './components/FolderCard.vue'
import { onShow } from '@dcloudio/uni-app'
import HouseItem from './components/HouseItem.vue'
import type { THouseInfo } from '@/types/home'
import { computed } from 'vue'
import { reactive } from 'vue'
import type { DefineComponent } from 'vue'

const myCollectionCount = ref(0)

// 我的集合数量
function getMyCollectionCount() {
  // 📌调取接口
  setTimeout(() => {
    myCollectionCount.value = 1
  }, 500)
}

onShow(() => {
  getMyCollectionCount()
})

// 查看我的集合
function handleViewMyCollection() {
  console.log('查看「我的集合」')
}

// 查看历史足迹
function handleViewHistory() {
  console.log('插卡「历史足迹」')
}

const paging = ref<DefineComponent>()
const houseList = ref<THouseInfo[]>([])
const houseTotal = ref(0)
const searchParams = reactive<{
  pageNo: number
  pageSize: number
}>({
  pageNo: 1,
  pageSize: 10
})

// 获取收藏房源列表
function getHouseList() {
  // 📌调取接口
  setTimeout(() => {
    const pageNo = searchParams.pageNo
    const pageSize = searchParams.pageSize
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
          title: i.toString() + '寓见·消毒安心住·观景plus',
          currentPrice: 394,
          originalPrice: 788,
          discountTag: '5折 · 仅限今晚',
          score: Math.floor(Math.random() * 5) + 1,
          city: '成都市'
        })
      }
    }
    paging.value!.complete(list)
    houseTotal.value = 100
  }, 500)
}

// 分页查询
const queryList = (pageNo: number, pageSize: number) => {
  searchParams.pageNo = pageNo
  searchParams.pageSize = pageSize
  getHouseList()
}

const operateText = ref<'分享/删除' | '取消'>('分享/删除')

// 切换操作状态
function handleToggleOperateState() {
  operateText.value = operateText.value === '分享/删除' ? '取消' : '分享/删除'
}

const swipeShow = computed(() => {
  return operateText.value === '分享/删除' ? 'none' : 'left'
})
</script>

<template>
  <z-paging class="wish" ref="paging" v-model="houseList" @query="queryList">
    <template #top>
      <view class="p24">
        <HeadTitle title="心愿单" />
        <uni-row class="card-group">
          <uni-col :span="12">
            <FolderCard
              icon="icon-folder"
              title="我的集合"
              :subTitle="`共${myCollectionCount}个`"
              @tap="handleViewMyCollection"
            />
          </uni-col>
          <uni-col :span="12">
            <FolderCard
              icon="icon-history"
              ballColor="#008a85"
              title="历史足迹"
              subTitle="最近浏览的房源"
              @tap="handleViewHistory"
            />
          </uni-col>
        </uni-row>
        <uni-section :title="`${houseTotal}个房源`">
          <template #right>
            <view class="operate-btn" @tap="handleToggleOperateState">{{ operateText }}</view>
          </template>
        </uni-section>
      </view>
    </template>
    <view class="my-collect p24">
      <uni-swipe-action>
        <checkbox-group>
          <uni-swipe-action-item
            :threshold="0"
            :show="swipeShow"
            v-for="house in houseList"
            :key="house.id"
            :autoClose="false"
            disabled
          >
            <template #left>
              <checkbox :value="house.id" />
            </template>
            <HouseItem :houseInfo="house" />
          </uni-swipe-action-item>
        </checkbox-group>
      </uni-swipe-action>
    </view>
    <template #bottom>
      <view class="share-or-delete" v-show="operateText === '取消'">
        <button class="share-btn">分享</button>
        <button class="delete-btn">删除</button>
      </view>
    </template>
  </z-paging>
</template>

<style lang="scss" scoped>
.wish {
  .operate-btn {
    color: $green;
  }
  .my-collect {
    padding-top: 0;
    :deep(.button-group--left) {
      display: flex;
      align-items: center;
    }
  }
  .share-or-delete {
    display: flex;
    border-top: 2rpx solid $uni-border-color;
    .share-btn,
    .delete-btn {
      width: 100%;
      background-color: #fff;
      &::after {
        border: none;
      }
    }
    .share-btn {
      border-right: 2rpx solid $uni-border-color;
      color: $green;
    }

    .delete-btn {
      color: $red;
    }
  }
}
</style>
