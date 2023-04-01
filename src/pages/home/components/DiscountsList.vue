<script lang="ts" setup>
import DiscountCard from './DiscountCard.vue'
</script>

<template>
  <view class="discounts-list">
    <HeadTitle title="成都房东直降优惠" subTitle="房东直接让利，更多超值选择" />
    <view class="card-list">
      <uni-row>
        <uni-col :span="12">
          <DiscountCard />
        </uni-col>
        <uni-col :span="12">
          <DiscountCard size="small" class="mb24" />
          <DiscountCard size="small" />
        </uni-col>
      </uni-row>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.discounts-list {
}
</style>
