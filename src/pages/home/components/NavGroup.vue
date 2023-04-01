<script lang="ts" setup>
import { reactive } from 'vue'

const navList = reactive([
  {
    icon: 'icon-cook',
    label: '可以做饭'
  },
  {
    icon: 'icon-house',
    label: '整个房源'
  },
  {
    icon: 'icon-key',
    label: '自助入住'
  },
  {
    icon: 'icon-fund',
    label: '特惠房源'
  },
  {
    icon: 'icon-photo',
    label: '当地体验'
  }
])
</script>

<template>
  <uni-grid class="nav-group" :column="5" :show-border="false" :square="false">
    <uni-grid-item v-for="(item, index) in navList" :index="index" :key="index">
      <view class="nav-item">
        <uni-icons
          class="icon"
          custom-prefix="iconfont"
          :type="item.icon"
          size="46"
          color="#f59b22"
        />
        <view>{{ item.label }}</view>
      </view>
    </uni-grid-item>
  </uni-grid>
</template>

<style lang="scss" scoped>
.nav-group {
  padding: 28rpx;
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      margin-bottom: 20rpx;
    }
  }
}
</style>
