<script lang="ts" setup>
import CityCheckbox from './CityCheckbox.vue'
import SpecialsItem from './SpecialsItem.vue'
</script>

<template>
  <view class="specials-list">
    <HeadTitle title="短途盛夏特惠" subTitle="短途房源贴心推荐，低至7折" />
    <CityCheckbox />
    <uni-grid :column="2" :show-border="false" :square="false">
      <uni-grid-item v-for="item in 4" :key="item" :index="item">
        <SpecialsItem />
      </uni-grid-item>
    </uni-grid>
    <button plain>展示更多成都特惠房源</button>
  </view>
</template>

<style lang="scss" scoped>
.specials-list {
  margin-bottom: 40rpx;
}
</style>
