<script lang="ts" setup>
import SearchCard from './components/SearchCard.vue'

// 观看直播
function handleWatchLive() {}
</script>

<template>
  <view class="home main-container">
    <view class="status-bar">
      <!-- 这里是状态栏 -->
    </view>
    <view class="top-part">
      <HeadTitle class="head-title" title="和好友住进小院民宿" color="#fff">
        <button class="watch-live-btn" size="mini" plain @tap="handleWatchLive"
          >直播民宿抢先看</button
        >
      </HeadTitle>
    </view>
    <view class="main-part">
      <SearchCard class="search-card" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.home {
  position: relative;
  .status-bar {
    height: var(--status-bar-height);
    width: 100%;
  }
  .top-part {
    height: 780rpx;
    .head-title {
      .watch-live-btn {
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
    overflow: hidden;
    overflow-y: auto;
    &::after {
      position: absolute;
      content: '';
      z-index: -1;
      top: 0;
      left: -25%;
      width: 150%;
      height: 480rpx;
      background: url('@/static/images/landmark-city.png') center / cover no-repeat;
      border-radius: 0 0 100% 100%;
    }
    .search-card {
      margin-top: 296rpx !important;
    }
  }
}
</style>
