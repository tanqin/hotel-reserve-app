<script lang="ts" setup>
import NavGroup from './components/NavGroup.vue'
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
      <!-- main-scroll-container 为滚动容器 -->
      <view class="main-scroll-container">
        <SearchCard class="search-card" />
        <NavGroup />
        <view class="recommend-module">
          <HeadTitle title="短途盛夏特惠" subTitle="短途房源贴心推荐，低至7折" />
          <ul>
            <li v-for="item in 100" :key="item">
              <h2>测试滚动{{ item }}</h2>
            </li>
          </ul>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.home {
  position: relative;
  background: url('@/static/images/landmark-city.png') no-repeat center / cover;
  .status-bar {
    height: var(--status-bar-height);
  }
  .top-part {
    height: 700rpx;
    padding-top: 100rpx;
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
