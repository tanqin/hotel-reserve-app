<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  visible?: boolean
  pictures: string[]
}>()

const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()

const popupVisible = computed({
  get() {
    return props.visible
  },
  set(newVal) {
    emit('update:visible', newVal)
  }
})
</script>

<template>
  <Popup
    class="house-photo-wall-popup"
    type="right"
    navTitle="房源实拍"
    v-model:visible="popupVisible"
    fixedTop
    leftIcon="left"
  >
    <template #nav-right>
      <uni-icons type="redo" size="24" />
    </template>
    <image
      v-for="(item, index) in pictures"
      :class="['photo', [0, 1].includes(index) && 'full-photo']"
      :key="index"
      :src="item"
      mode="aspectFill"
    />
  </Popup>
</template>

<style lang="scss" scoped>
.house-photo-wall-popup {
  :deep(.uni-popup__wrapper) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .photo {
    width: 50%;
    height: 322rpx;
    padding: 1rpx;
    &.full-photo {
      width: 100%;
    }
  }
}
</style>
