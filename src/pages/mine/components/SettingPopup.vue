<script lang="ts" setup>
import { computed } from 'vue'
import EntranceCard from './EntranceCard.vue'

const props = defineProps<{
  visible?: boolean
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

// 退出登录
function handleLogout() {
  uni.reLaunch({ url: '/pages/greet/greet' })
}
</script>

<template>
  <Popup class="setting-popup" type="right" v-model:visible="popupVisible">
    <HeadTitle title="设置" />
    <EntranceCard title="账号管理" />
    <EntranceCard title="通知" />
    <EntranceCard title="货币" />
    <EntranceCard title="收款方式" />
    <EntranceCard title="发票信息管理" />
    <EntranceCard title="关于应用" />
    <EntranceCard title="20.11.1版本" />
    <EntranceCard title="账号注销" />
    <EntranceCard title="退出登录" @tap="handleLogout" />
  </Popup>
</template>

<style lang="scss" scoped>
.setting-popup {
}
</style>
