<script lang="ts" setup>
import { ref } from 'vue'
import { onLoad, onShow } from '@dcloudio/uni-app'
import type { THouseInfo } from '@/types/home'
import SpecialItem from '../components/SpecialItem.vue'
import type { DefineComponent } from 'vue'
import BookTool from './components/BookTool.vue'

const moreHouseList = ref<THouseInfo[]>([])

// 获取更多房源列表
function getMoreHouseList() {
  // 📌调取接口
  setTimeout(() => {
    moreHouseList.value = []
    for (let i = 0; i < 4; i++) {
      moreHouseList.value.push({
        id: i.toString(),
        pictures: [
          [
            'https://img02.mockplus.cn/image/2020-09-08/552a6c00-f12c-11ea-9d17-11b700b7f8d3.jpg',
            'https://img02.mockplus.cn/image/2020-09-08/5edfc600-f12c-11ea-9948-8d15b5335fa1.jpg',
            'https://img02.mockplus.cn/image/2020-09-08/64537eb0-f12c-11ea-9d17-11b700b7f8d3.jpg',
            'https://img02.mockplus.cn/image/2020-09-08/6b242f50-f12c-11ea-9d17-11b700b7f8d3.jpg'
          ][Math.floor(Math.random() * 4)]
        ],
        facility: '整套房子 · 1室1卫1床',
        tags: [
          {
            id: '1',
            text: '太古里'
          },
          {
            id: '100',
            text: '超赞房东'
          },
          {
            id: '102',
            text: '安心住'
          },
          {
            id: '103',
            text: '免费停车'
          },
          {
            id: '104',
            text: '附近地铁'
          },
          {
            id: '105',
            text: '可以做饭'
          }
        ],
        title: '寓见·消毒安心住·观景plus',
        currentPrice: 394,
        originalPrice: 788,
        discountTag: '5折 · 仅限今晚',
        score: Math.floor(Math.random() * 5) + 1,
        city: '成都市'
      })
    }
  }, 500)
}

onShow(() => {
  getMoreHouseList()
})

// 关闭详情页，返回上一个页面
function handleClosePage() {
  uni.navigateBack({ delta: 1 })
}

const sharePopup = ref<DefineComponent>()

// 分享
function handleShare() {
  sharePopup.value!.open()
}

// 是否已收藏
const collected = ref(false)

// 收藏
function handleCollect() {
  // 📌调取接口
  setTimeout(() => {
    collected.value = !collected.value
  }, 10)
}

const houseDetail = ref<THouseInfo>({
  id: '',
  pictures: [],
  facility: '',
  tags: [],
  title: '',
  currentPrice: NaN,
  originalPrice: NaN,
  discountTag: '',
  city: ''
})

let id: string
onLoad((query) => {
  id = query!.id
  getHouseDetail()
})

// 获取房源详情
function getHouseDetail() {
  // 📌调取接口
  setTimeout(() => {
    houseDetail.value = {
      id,
      pictures: [
        'https://img02.mockplus.cn/image/2020-09-08/a1d0e0d0-f12b-11ea-bb18-5957e87ab951.jpg',
        'https://img02.mockplus.cn/image/2020-09-08/7cd54210-f150-11ea-aeeb-2db5a91e8f48.jpg',
        'https://img02.mockplus.cn/image/2020-09-08/95aafc30-f150-11ea-bf79-4bf7403aaa5c.jpg',
        'https://img02.mockplus.cn/image/2020-09-08/86be7d50-f150-11ea-aeeb-2db5a91e8f48.jpg',
        'https://img02.mockplus.cn/image/2020-09-08/9eda3640-f150-11ea-aeeb-2db5a91e8f48.jpg',
        'https://img02.mockplus.cn/image/2020-09-08/a4517160-f150-11ea-8c98-e56c1a531de9.jpg',
        'https://img02.mockplus.cn/image/2020-09-08/ac7492a0-f150-11ea-9948-8d15b5335fa1.jpg',
        'https://img02.mockplus.cn/image/2020-09-08/b1f2ab90-f150-11ea-bb18-5957e87ab951.jpg',
        'https://img02.mockplus.cn/image/2020-09-08/b749db90-f150-11ea-926a-45b4090c6c64.jpg',
        'https://img02.mockplus.cn/image/2020-09-08/c69a9a80-f150-11ea-bf79-4bf7403aaa5c.jpg',
        'https://img02.mockplus.cn/image/2020-09-08/e28cd6e0-f150-11ea-926a-45b4090c6c64.jpg'
      ],
      facility: '整套房子 · 1室1卫1床',
      tags: [
        {
          id: '1',
          text: '太古里'
        },
        {
          id: '100',
          text: '超赞房东'
        },
        {
          id: '102',
          text: '安心住'
        },
        {
          id: '103',
          text: '免费停车'
        },
        {
          id: '104',
          text: '附近地铁'
        },
        {
          id: '105',
          text: '可以做饭'
        }
      ],
      title:
        '遇见 · 景观Plus大床房 · 网红观景露台 · 近春熙路 · 太古里 · 熊猫基地 · 可停车 · 可开发票',
      score: 5.0,
      currentPrice: 394,
      originalPrice: 788,
      discountTag: '享受8月31日-11月期间的9.8折优惠',
      city: '成都市',
      introduce:
        '此房型有多套在同一栋楼内，可预订多套，公寓一共有6种房型，装修风格相同，点击房东哈哈哈哈哈哈哈哈哈哈哈哈'
    }
  }, 500)
}

// 联系房东
function handleContactLandlord() {
  uni.makePhoneCall({
    phoneNumber: '13111111111'
  })
}
</script>

<template>
  <view class="house-detail">
    <!-- 顶部导航 -->
    <uni-nav-bar class="custom-nav-bar" :border="false" backgroundColor="transparent">
      <template #left>
        <uni-icons type="closeempty" size="20" color="#000" @tap="handleClosePage" />
      </template>
      <template #right>
        <uni-icons class="share-icon" type="redo" size="20" color="#000" @tap="handleShare" />
        <uni-icons
          :type="collected ? 'heart-filled' : 'heart'"
          size="20"
          color="#a30014"
          @tap="handleCollect"
        />
      </template>
    </uni-nav-bar>
    <!-- 封面信息 -->
    <image class="cover-info" :src="houseDetail.pictures[0]" mode="aspectFill" />
    <!-- 基础信息 -->
    <view class="base-info p24">
      <view class="notes">
        <uni-icons type="info-filled" color="#f59b22" size="20" />
        <text class="quality">优质房源</text>
        <text class="about">{{ houseDetail.city }} · 成套公寓</text>
      </view>
      <view class="title">{{ houseDetail.title }} </view>
      <TagGroup :tagList="houseDetail.tags" backgroundColor="#fff" />
    </view>
    <!-- 优惠信息 -->
    <view class="discount-info p24">
      <view class="discount-description">
        <view class="discount-tag">{{ houseDetail.discountTag }}</view>
        <view>在84天内完成预订，锁好限时好价</view>
      </view>
      <uni-icons type="paperclip" color="#008a85" size="30" />
    </view>
    <!-- 房源概况 -->
    <view class="general-info p24">
      <h3>房源概况</h3>
      <uni-grid :column="4" :showBorder="false" :square="false">
        <uni-grid-item v-for="item in 4" :key="item">
          <uni-icons type="home" />
          <view class="info">1间卧室</view>
        </uni-grid-item>
      </uni-grid>
      <uni-row :gutter="20">
        <uni-col :span="12">
          <uni-card>
            <view>整个房源</view>
            <view>独享所有空间，无需与他人共用</view>
          </uni-card>
        </uni-col>
        <uni-col :span="12">
          <uni-card>
            <view>卧室1</view>
            <view>1张1.5米宽双人床</view>
          </uni-card>
        </uni-col>
      </uni-row>
    </view>
    <!-- 房源介绍 -->
    <view class="intro-info p24">
      <h3>房源介绍</h3>
      <p class="mtb24 two-line-overflow">
        {{ houseDetail.introduce }}
      </p>
      <view class="view-more">查看更多</view>
    </view>
    <!-- 房客评价 -->
    <view class="evaluate-info p24">
      <h3>房客评价</h3>
    </view>
    <!-- 房源位置 -->
    <view class="location-info p24">
      <h3>房源位置</h3>
      <view class="trip-info mt24">出行及周边信息</view>
      <p class="mtb24 two-line-overflow"
        >公寓配套设施完善，顶楼有空中花园、花园式酒吧、星空书吧、咖啡吧私人影院、健身房等。
      </p>
      <view class="map-container" />
      <view class="mtb24">房源位于成都市，四川省，中国 · 预订后可查看详细地址</view>
      <view class="contact-landlord" @tap="handleContactLandlord">联系房东</view>
    </view>
    <!-- 注意事项 -->
    <view class="notice-info p24">
      <h3>注意事项</h3>
      <view>入住退房时间</view>
      <view>入住：下午2：00后、退房：下午12：00</view>
    </view>
    <!-- 更多住处 -->
    <view class="more-info p24">
      <h3>更多住处</h3>
      <uni-grid :column="2" :show-border="false" :square="false">
        <uni-grid-item
          v-for="specialHouse in moreHouseList"
          :key="specialHouse.id"
          :index="Number(specialHouse.id)"
        >
          <SpecialItem :houseInfo="specialHouse" />
        </uni-grid-item>
      </uni-grid>
    </view>
    <!-- <uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" /> -->
    <BookTool :data="houseDetail" />
    <uni-popup ref="sharePopup" type="share">
      <uni-popup-share title="分享到" />
    </uni-popup>
  </view>
</template>

<style lang="scss" scoped>
.house-detail {
  padding: var(--status-bar-height) 0 162rpx;
  color: #000;
  .custom-nav-bar {
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    top: var(--status-bar-height);
    :deep(.uni-navbar__header-btns-right) {
      width: 160rpx !important;
    }
    .uni-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 64rpx;
      height: 64rpx;
      background-color: #fff;
      border-radius: 50%;
      &.share-icon {
        margin-right: 24rpx;
      }
    }
  }

  .cover-info {
    width: 100%;
  }
  .base-info {
    border-bottom: 2rpx solid $border-color-light-gray;
    .notes {
      line-height: 2;
      .quality {
        margin: 0 20rpx;
      }
      .about {
        color: $uni-color-primary;
      }
    }
    .title {
      font-size: 38rpx;
    }
  }
  .discount-info {
    display: flex;
    align-items: center;
    border-bottom: 14rpx solid $border-color-light-gray;
    .discount-description {
      flex: 1;
      .discount-tag {
        font-weight: bold;
        margin-bottom: 15rpx;
      }
    }
  }
  .general-info {
    border-bottom: 14rpx solid $border-color-light-gray;
    .uni-card {
      display: flex;
      height: 176rpx;
      margin: 0 !important;
    }
  }
  .intro-info {
    border-bottom: 14rpx solid $border-color-light-gray;

    .view-more {
      color: $green;
    }
  }
  .evaluate-info {
    border-bottom: 14rpx solid $border-color-light-gray;
  }
  .location-info {
    border-bottom: 14rpx solid $border-color-light-gray;
    .map-container {
      height: 276rpx;
      background-color: $bgc-placeholder;
    }
    .contact-landlord {
      color: $green;
    }
  }
  .notice-info {
    border-bottom: 14rpx solid $border-color-light-gray;
  }
  .more-info {
  }
}
</style>
