<script lang="ts" setup></script>

<template>
  <view class="home main-container">
    <view class="top-part">
      <HeadTitle title="和好友住进小院民宿" color="#fff">
        <button class="live-btn" size="mini" plain>直播民宿抢先看</button>
      </HeadTitle>
      <uni-card class="search-place"> 国内 </uni-card>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.home {
  // 756rpx
  background: url('@/static/images/landmark-city.png') center / cover no-repeat;
  .top-part {
    height: 810rpx;
    .live-btn {
      width: 140px;
      height: 76rpx;
      color: #fff;
      border-color: #fff;
    }
  }
}
</style>
