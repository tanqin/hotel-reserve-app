<script lang="ts" setup>
import type { TGridCardItem } from '@/types/common.type'

withDefaults(
  defineProps<{
    list: TGridCardItem[]
    // 每列显示个数
    column?: number
    // 图片和文本内容颜色
    color?: string
    // 图标颜色（优先级高于 color）
    iconColor?: string
    // 文本内容颜色（优先级高于 color）
    textColor?: string
  }>(),
  {
    column: 3
  }
)

const emit = defineEmits<{
  (e: 'itemTap', gridCardItem: TGridCardItem): void
}>()

// 点击卡片项
function handleTap(gridCardItem: TGridCardItem) {
  emit('itemTap', gridCardItem)
}
</script>

<template>
  <uni-grid class="grid-card" :column="column" :show-border="false" :square="false">
    <uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
      <view class="grid-card-item" @tap="handleTap(item)">
        <uni-icons
          class="icon"
          custom-prefix="iconfont"
          :type="item.icon"
          size="30"
          :color="iconColor || color"
        />
        <view :style="{ color: textColor || color }">{{ item.text }}</view>
      </view>
    </uni-grid-item>
  </uni-grid>
</template>

<style lang="scss" scoped>
.grid-card {
  .grid-card-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 24rpx;
    font-size: 24rpx;
    .icon {
      margin-bottom: 24rpx;
    }
  }
}
</style>
