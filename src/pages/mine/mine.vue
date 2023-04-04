<script lang="ts" setup>
import type { TGridCardItem } from '@/types/common.type'
import EntranceCard from './components/EntranceCard.vue'
import SettingPopup from './components/SettingPopup.vue'
import { ref } from 'vue'

const GridCardIconList = [
  {
    icon: 'icon-order',
    text: '全部订单'
  },
  {
    icon: 'icon-valid-order',
    text: '有效订单'
  },
  {
    icon: 'icon-unpaid-order',
    text: '待支付订单'
  },
  {
    icon: 'icon-safety-center',
    text: '安全中心'
  },
  {
    icon: 'icon-help',
    text: '获取帮助'
  },
  {
    icon: 'icon-history',
    text: '历史足迹'
  }
]

const settingPopupVisible = ref(false)

// 点击设置
function handleSetting() {
  settingPopupVisible.value = true
}

// 点击查看
function handleView(item: TGridCardItem) {
  console.log(item)
}

// 开发体验
function handleExperience() {}

// 发布房源
function handlePublishHouse() {}
</script>

<template>
  <view class="mine main-container">
    <view class="setting mb24">
      <uni-icons type="gear" size="30" @tap="handleSetting" />
    </view>
    <view class="user-info">
      <view class="base-info">
        <view class="nickname">Hi 小哈😁</view>
        <view class="days">今天是 App 陪伴你的第 520 天</view>
        <view class="view-profile-btn">查看并编辑个人资料</view>
      </view>
      <image class="avatar" src="/static/images/default-avatar.png" mode="aspectFill" />
    </view>
    <view class="my-house-order ptb24">
      <h3>我的房源订单</h3>
      <GridCard :list="GridCardIconList" @itemTap="handleView" />
    </view>
    <view class="toggle-mode ptb24">
      <h3>成为房东/体验达人</h3>
      <EntranceCard title="开发体验" @tap="handleExperience" />
      <EntranceCard title="发布房源" @tap="handlePublishHouse" />
    </view>
    <SettingPopup v-model:visible="settingPopupVisible" />
  </view>
</template>

<style lang="scss" scoped>
.mine {
  .setting {
    display: flex;
    justify-content: flex-end;
  }
  .user-info {
    display: flex;
    padding-bottom: 24rpx;
    border-bottom: 2rpx solid $bdc-light-gray;
    .base-info {
      flex: 1;
      line-height: 2;
      color: $gray;
      .nickname {
        color: #000;
        font-size: 60rpx;
      }
      .view-profile-btn {
        color: $green;
      }
    }
    .avatar {
      width: 112rpx;
      height: 112rpx;
      border-radius: 50px;
      background-color: $bgc-placeholder;
    }
  }
  .my-house-order {
    border-bottom: 2rpx solid $bdc-light-gray;
  }
}
</style>
