<script lang="ts" setup>
import type { TTag } from '@/types/home.type'
import { computed } from 'vue'
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    // 标签列表
    tagList: TTag[]
    // 标签尺寸
    size?: 'large' | 'default'
    // 一行显示不下时是否自动换行
    wrap?: boolean
    // 禁用 tag 点击高亮
    disable?: boolean
    // 背景颜色
    backgroundColor?: string
  }>(),
  {
    tagList: () => [],
    size: 'default'
  }
)

// 格式化标签数据
const tagList = computed(() => props.tagList.map((tag) => ({ ...tag, value: tag.id })))

const activeTag = ref()
</script>

<template>
  <view
    :class="['city-checkbox', size, wrap && 'wrap', 'hidden-scroll-bar']"
    :style="{ backgroundColor: props.backgroundColor }"
  >
    <uni-data-checkbox mode="tag" v-model="activeTag" :localdata="tagList" />
  </view>
</template>

<style lang="scss" scoped>
.city-checkbox {
  overflow-x: auto;
  background-color: $bgc-gray;
  :deep(.checklist-group) {
    display: block;
    white-space: nowrap;
    .checklist-box {
      display: inline-flex;
      background-color: #fff !important;
      &.is-checked {
        background-color: $green !important;
      }
      .checklist-content {
        justify-content: center;
        align-items: center;
      }
    }
  }
  &.large {
    :deep(.checklist-group .checklist-box) {
      width: 146rpx;
      height: 80rpx;
    }
  }
  &.wrap {
    :deep(.checklist-group) {
      white-space: normal;
    }
  }
}
</style>
