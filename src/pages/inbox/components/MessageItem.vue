<script lang="ts" setup></script>

<template>
  <view class="message-item">
    <image class="avatar" src="/static/images/default-avatar.png" mode="aspectFill" />
    <view class="info">
      <view class="user-info">
        <text class="name">小野</text>
        <text class="date">2020/5/17</text>
        <uni-icons type="right" />
      </view>
      <article class="message-info">
        <p>你好 小野，我叫小摹。在Rook上...</p>
        <p>行程已完成 · 2020/5/16 -2020/5/17</p>
      </article>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.message-item {
  display: flex;
  padding: 24rpx 0;
  border-bottom: 2rpx solid $bdc-light-gray;
  color: $gray;
  .avatar {
    width: 112rpx;
    height: 112rpx;
    margin-right: 24rpx;
    border-radius: 50%;
    background-color: $bgc-placeholder;
  }
  .info {
    .user-info {
      display: flex;
      align-items: center;
      margin-bottom: 24rpx;
      .name {
        flex: 1;
        color: #000;
      }
      .date {
        margin-right: 20rpx;
      }
    }
  }
}
</style>
