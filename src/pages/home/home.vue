<script lang="ts" setup>
import type { THouseQueryParams } from '@/types/home.type'
import DiscountList from './components/DiscountList.vue'
import GuessList from './components/GuessList.vue'
import SearchCard from './components/SearchCard.vue'
import SpecialList from './components/SpecialList.vue'
import SearchResultPopup from './components/SearchResultPopup.vue'
import { ref } from 'vue'
import { onBackPress } from '@dcloudio/uni-app'
import CitySelectPopup from './components/CitySelectPopup.vue'

// 观看直播
function handleWatchLive() {}

const citySelectPopupVisible = ref(false)

// 选择城市
function handleSelectCity() {
  citySelectPopupVisible.value = true
}

const searchParams = ref<THouseQueryParams>()
const searchResultPopupVisible = ref(false)

// 搜索房源
function handleSearch(params: THouseQueryParams) {
  searchParams.value = params
  searchResultPopupVisible.value = true
}

// 快捷查询
function handleQuickSearch() {
  searchParams.value = {
    regionType: 0,
    city: '成都市',
    startTime: '2023/4/4',
    endTime: '2023/4/5',
    numOfPeople: 2,
    pageNo: 1,
    pageSize: 10
  }
  searchResultPopupVisible.value = true
}
onBackPress(() => {
  // 「城市选择弹出层」或「搜索结果弹出层」打开时，侧滑时仅关闭弹出层，不执行退出操作
  if (citySelectPopupVisible.value || searchResultPopupVisible.value) {
    citySelectPopupVisible.value = false
    searchResultPopupVisible.value = false
    return true
  }
})

const gridCardList = [
  {
    icon: 'icon-cook',
    text: '可以做饭'
  },
  {
    icon: 'icon-house',
    text: '整个房源'
  },
  {
    icon: 'icon-key',
    text: '自助入住'
  },
  {
    icon: 'icon-fund',
    text: '特惠房源'
  },
  {
    icon: 'icon-photo',
    text: '当地体验'
  }
]
</script>

<template>
  <view class="home main-container">
    <view class="top-part">
      <HeadTitle class="head-title" title="和好友住进小院民宿" color="#fff">
        <button class="watch-live-btn" size="mini" plain @tap="handleWatchLive"
          >直播民宿抢先看</button
        >
      </HeadTitle>
    </view>
    <view class="main-part">
      <!-- main-scroll-container 为滚动容器 -->
      <view class="main-scroll-container">
        <SearchCard class="search-card" @search="handleSearch" @selectCity="handleSelectCity" />
        <CitySelectPopup v-model:visible="citySelectPopupVisible" />
        <SearchResultPopup
          v-model:visible="searchResultPopupVisible"
          :searchParams="searchParams!"
        />
        <GridCard :list="gridCardList" :column="5" color="#f59b22" @itemTap="handleQuickSearch" />
        <view class="recommend-module">
          <SpecialList @showMore="handleSearch" />
          <DiscountList />
          <GuessList />
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.home {
  position: relative;
  background: url('@/static/images/landmark-city.png') no-repeat center / cover;
  .top-part {
    height: 700rpx;
    padding-top: 100rpx;
    .head-title {
      .watch-live-btn {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 274rpx;
        height: 74rpx;
        color: #fff;
        border-color: #fff;
      }
    }
  }
  .main-part {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: calc(100vh - var(--window-bottom));
    overflow: auto;
    .main-scroll-container {
      background: radial-gradient(circle at center -680rpx, transparent 962rpx, #fff 0);
      .search-card {
        margin-top: calc(var(--status-bar-height) + 300rpx) !important;
      }
      .recommend-module {
        padding: 28rpx 28rpx 0;
      }
    }
  }
}
</style>
