<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { DefineComponent } from 'vue'
import type { TMessage } from '@/types/inbox.type'
import type { TPageParams } from '@/types/common.type'
import MessageItem from './components/MessageItem.vue'

const paging = ref<DefineComponent>()
const messageList = ref<TMessage[]>([])
const searchParams = reactive<TPageParams>({
  pageNo: 1,
  pageSize: 10
})

// 获取消息列表
function getMessageList() {
  // 📌调取接口
  setTimeout(() => {
    const pageNo = searchParams.pageNo
    const pageSize = searchParams.pageSize
    let list: TMessage[] = []
    if (pageNo * pageSize <= 100) {
      for (let i = (pageNo - 1) * pageSize; i < pageNo * pageSize; i++) {
        list.push({
          id: i.toString(),
          avatarUrl:
            i === 1
              ? 'https://cdn.seovx.com/?mom=302'
              : 'https://www.dmoe.cc/random.php?timestamp=' + Date.now(),
          nickname: i === 1 ? '出行频道' : i.toString() + '小哈😁',
          date: '2020/5/17',
          content:
            i === 1
              ? `<p>你好！让每一位房客都住得安心..</p>`
              : `<p>你好 小哈😁，我叫小士。在Rook上...</p><p>行程已完成 · 2020/5/16 -2020/5/17</p>`,
          isSystemNotice: i === 1
        })
      }
    }
    paging.value!.complete(list)
  }, 500)
}

// 分页查询
const queryList = (pageNo: number, pageSize: number) => {
  searchParams.pageNo = pageNo
  searchParams.pageSize = pageSize
  getMessageList()
}
</script>

<template>
  <z-paging class="inbox" ref="paging" v-model="messageList" @query="queryList">
    <template #top>
      <HeadTitle class="p24" title="收件箱" subTitle="您没有未读消息" />
    </template>
    <view class="plrb24">
      <MessageItem v-for="message in messageList" :key="message.id" :data="message" />
    </view>
  </z-paging>
</template>

<style scoped></style>
