<script lang="ts" setup>
import type { TMessage } from '@/types/inbox.type'

defineProps<{
  data: TMessage
}>()
</script>

<template>
  <view class="message-item">
    <image
      class="avatar"
      :src="data.avatarUrl || '/static/images/default-avatar.png'"
      mode="aspectFill"
    />
    <view class="info">
      <view class="user-info">
        <rich-text class="name" :nodes="data.nickname" />
        <text class="date">{{ data.date }}</text>
        <uni-icons type="right" />
      </view>
      <rich-text class="message-info" :nodes="data.content" />
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
