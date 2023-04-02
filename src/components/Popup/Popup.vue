<script lang="ts" setup>
import { ref } from 'vue'
import type { DefineComponent } from 'vue'
import { useSlots } from 'vue'
import { watch } from 'vue'

const props = withDefaults(
  defineProps<{
    visible: boolean
    navTitle?: string
    // 默认顶部导航是否可见
    showTop?: boolean
  }>(),
  {
    visible: false,
    navTitle: '',
    showTop: true
  }
)

const popupRef = ref<DefineComponent>()

watch(
  () => props.visible,
  (newVal) => {
    newVal ? popupRef.value!.open() : popupRef.value!.close()
  }
)

const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()

// 弹出层显隐状态改变
function handlePopupVisibleChange({ show }: { show: boolean }) {
  emit('update:visible', show)
}

// 关闭弹出层
function handleClose() {
  emit('update:visible', false)
}

// 判断插槽 <slot name="top"/> 是否有传值
const slotTop = !!useSlots().top
</script>

<template>
  <uni-popup
    ref="popupRef"
    class="popup"
    background-color="#fff"
    @change="handlePopupVisibleChange"
  >
    <view class="default-top-bar" v-if="!slotTop && showTop">
      <uni-icons type="closeempty" @tap="handleClose" />
      <view class="title">{{ navTitle }}</view>
      <view class="cancel" @tap="handleClose">取消</view>
    </view>
    <slot name="top"></slot>
    <slot></slot>
  </uni-popup>
</template>

<style lang="scss" scoped>
.popup {
  color: #000;
  :deep(.uni-popup__wrapper) {
    position: relative;
    overflow-y: scroll;
    width: 750rpx;
    height: calc(100vh - var(--status-bar-height));
    padding: 28rpx 28rpx var(--window-bottom) !important;
    .default-top-bar {
      display: flex;
      justify-content: space-between;
      padding: 0 6rpx 28rpx;
    }
  }
}
</style>
