<script lang="ts" setup>
import { reactive } from 'vue'
import type { THouseQueryParams } from '@/types/home.type'
import { RegionType } from '@/enums/home'
import { computed } from 'vue'

const searchParams = reactive<THouseQueryParams>({
  regionType: 0,
  city: '成都市',
  startTime: '2023/4/1',
  endTime: '2023/4/2',
  numOfPeople: 1,
  pageNo: 1,
  pageSize: 10
})

const dateRange = computed({
  get() {
    return [searchParams.startTime, searchParams.endTime]
  },
  set(newVal) {
    ;[searchParams.startTime, searchParams.endTime] = newVal
  }
})

const emit = defineEmits<{
  (e: 'search', searchParams: THouseQueryParams): void
  (e: 'selectCity'): void
}>()

// 选择城市
function handleSelectCity() {
  emit('selectCity')
}

// 搜索
function handleSearch() {
  emit('search', searchParams)
}
</script>

<template>
  <uni-card class="search-card" spacing="0" padding="0">
    <uni-segmented-control
      class="region-tabs"
      style-type="button"
      :current="searchParams.regionType"
      :values="[RegionType[0], RegionType[1]]"
      @clickItem="searchParams.regionType = $event.currentIndex"
    />
    <view class="form">
      <uni-forms>
        <uni-forms-item class="position">
          <uni-row>
            <uni-col :span="18">
              <input v-model="searchParams.city" @focus="handleSelectCity" />
            </uni-col>
            <uni-col :span="6">
              <view class="current-position"><uni-icons type="location" /> 当前位置</view>
            </uni-col>
          </uni-row>
        </uni-forms-item>
        <uni-forms-item>
          <uni-row>
            <uni-col :span="14">
              <uni-datetime-picker
                v-model="dateRange"
                :border="false"
                type="daterange"
                :clear-icon="false"
              />
            </uni-col>
            <uni-col :span="10">
              <view class="number-of-people">
                共
                <uni-number-box :min="1" :max="100" v-model="searchParams.numOfPeople" /> 人
              </view>
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
  .region-tabs {
    height: 88rpx;
    :deep(.segmented-control__item) {
      border: none;
      background-color: $bgc-gray !important;
      &:nth-child(1) {
        border-bottom-right-radius: 44rpx;
      }
      &:nth-child(2) {
        border-bottom-left-radius: 44rpx;
      }
      .segmented-control__text {
        color: $gray !important;
      }

      &.segmented-control__item--button--active {
        background-color: #fff !important;
        .segmented-control__text {
          color: #000 !important;
        }
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
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70rpx;
    }
    .explain {
      margin-bottom: 20rpx;
      color: $gray;
    }
  }
}
</style>
