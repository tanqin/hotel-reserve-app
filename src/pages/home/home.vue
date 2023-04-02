<script lang="ts" setup>
import type { THouseQueryParams } from '@/types/home'
import DiscountList from './components/DiscountList.vue'
import GuessList from './components/GuessList.vue'
import NavGroup from './components/NavGroup.vue'
import SearchCard from './components/SearchCard.vue'
import SpecialList from './components/SpecialList.vue'
import SearchResultPopup from './components/SearchResultPopup.vue'
import { ref } from 'vue'

// 观看直播
function handleWatchLive() {}

const searchParams = ref<THouseQueryParams>()
const searchResultPopupVisible = ref(false)

// 搜索房源
function handleSearch(params: THouseQueryParams) {
  searchParams.value = params
  searchResultPopupVisible.value = true
}
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
        <SearchCard class="search-card" @search="handleSearch" />
        <SearchResultPopup
          v-model:visible="searchResultPopupVisible"
          :searchParams="searchParams!"
        />
        <NavGroup />
        <view class="recommend-module">
          <SpecialList />
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
    height: 100vh;
    overflow: auto;
    .main-scroll-container {
      background: radial-gradient(circle at center -680rpx, transparent 962rpx, #fff 0);
      .search-card {
        margin-top: calc(var(--status-bar-height) + 300rpx) !important;
      }
      .recommend-module {
        padding: 28rpx;
      }
    }
  }
}
</style>
