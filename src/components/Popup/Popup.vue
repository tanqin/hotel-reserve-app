<script lang="ts" setup>
import { ref } from 'vue'
import type { DefineComponent } from 'vue'
import { watch } from 'vue'

const props = withDefaults(
  defineProps<{
    visible: boolean
    navTitle?: string
  }>(),
  {
    visible: false,
    navTitle: ''
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
</script>

<template>
  <uni-popup
    ref="popupRef"
    class="popup"
    background-color="#fff"
    @change="handlePopupVisibleChange"
  >
    <view class="nav-bar">
      <uni-icons type="closeempty" @tap="handleClose" />
      <view class="title">{{ navTitle }}</view>
      <view class="cancel" @tap="handleClose">取消</view>
    </view>
    <slot></slot>
  </uni-popup>
</template>

<style lang="scss" scoped>
.popup {
  color: #000;
  :deep(.uni-popup__wrapper) {
    position: relative;
    overflow-y: scroll;
    height: 100vh;
    padding: 28rpx 28rpx var(--window-bottom);
    .nav-bar {
      display: flex;
      justify-content: space-between;
      align-self: start;
      padding: 0 6rpx 28rpx;
    }
  }
}
</style>
