<script lang="ts" setup>
import type { TTag } from '@/types/home'
import { computed } from 'vue'
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    tagList: TTag[]
    // 禁用 tag 点击高亮
    disable?: boolean
    backgroundColor?: string
  }>(),
  {
    tagList: () => []
  }
)

// 格式化标签数据
const tagList = computed(() => props.tagList.map((tag) => ({ ...tag, value: tag.id })))

const activeTag = ref()
</script>

<template>
  <view class="city-checkbox hidden-scroll-bar" :style="{ backgroundColor: props.backgroundColor }">
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
      // width: 146rpx;
      // height: 80rpx;
      background-color: #fff !important;
      border: none !important;
      &.is-checked {
        background-color: $green !important;
      }
      .checklist-content {
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
