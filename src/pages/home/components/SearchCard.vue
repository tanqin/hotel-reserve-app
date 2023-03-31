<script lang="ts" setup>
import { reactive } from 'vue'
import { ref } from 'vue'

const searchParams = reactive({
  type: 0,
  city: '成都市',
  dateRange: ['2021-02-1', '2021-3-28']
})

const currentTab = ref(0)

// 切换 tabs
function handleToggle(index: number) {
  currentTab.value = index
}

// 搜索
function handleSearch() {}
</script>

<template>
  <uni-card class="search-card" spacing="0" padding="0">
    <ul class="tabs">
      <li
        v-for="(item, index) in ['国内', '国际/港澳台']"
        :key="index"
        :class="{ 'is-active': index === currentTab }"
        @tap="handleToggle(index)"
        >{{ item }}</li
      >
    </ul>
    <view class="form">
      <uni-forms>
        <uni-forms-item class="position">
          <uni-row>
            <uni-col :span="18">
              <input v-model="searchParams.city" />
            </uni-col>
            <uni-col :span="6">
              <view class="current-position"><uni-icons type="location" /> 当前位置</view>
            </uni-col>
          </uni-row>
        </uni-forms-item>
        <uni-forms-item>
          <uni-row :gutter="30">
            <uni-col :span="16">
              <uni-datetime-picker
                v-model="searchParams.dateRange"
                :border="false"
                type="daterange"
              />
            </uni-col>
            <uni-col :span="8">
              <view class="number-of-people">共 <text class="num">99</text> 房客人数</view>
            </uni-col>
          </uni-row>
        </uni-forms-item>
        <view class="explain">景点/地址/房源名</view>
        <button type="primary" @tap="handleSearch">搜索房源</button>
      </uni-forms>
    </view>
  </uni-card>
</template>

<style lang="scss" scoped>
.search-card {
  border-radius: 30rpx;
  .tabs {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 88rpx;
      background-color: #f2f2f2;
      &:nth-child(1) {
        border-bottom-right-radius: 25rpx;
      }
      &:nth-child(2) {
        border-bottom-left-radius: 25rpx;
      }
      &.is-active {
        color: #000;
        background-color: #fff;
      }
    }
  }

  .form {
    padding: 28rpx;

    :deep(.uni-date) {
      .uniui-calendar {
        display: none;
      }
      .uni-date-range {
        padding: 0;
      }
    }
    .number-of-people {
      height: 60rpx;
      line-height: 60rpx;
    }
    .explain {
      margin-bottom: 20rpx;
      color: $gray;
    }
  }
}
</style>
