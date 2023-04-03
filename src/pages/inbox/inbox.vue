<script lang="ts" setup>
import MessageItem from './components/MessageItem.vue'
</script>

<template>
  <z-paging class="inbox">
    <template #top>
      <HeadTitle class="p24" title="收件箱" subTitle="您没有未读消息" />
    </template>
    <view class="plrb24">
      <MessageItem v-for="message in 4" :key="message" />
    </view>
  </z-paging>
</template>

<style scoped></style>
