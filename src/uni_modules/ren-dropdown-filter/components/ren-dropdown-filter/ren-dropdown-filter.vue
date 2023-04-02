<template>
    <view class="filter-wrapper" :style="{ height: height + 'rpx', top: top,'border-top':border?'1rpx solid #f2f2f2':'none' }" @touchmove.stop.prevent="discard">
        <view >
        </view>
        <view class="inner-wrapper">
            <view class="mask" :class="showMask ? 'show' : 'hide'" @tap="tapMask"></view>
            <view class="navs">
                <view class="c-flex-align" :class="{ 'c-flex-center': index > 0, actNav: index === actNav }" v-for="(item, index) in navData" :key="index" @click="navClick(index)">
                    <view>{{ item.find(child => child.select).text }}</view>
                    <view class="zb-dropdown-menu__title" :class="[{
					'zb-dropdown-menu__title--active':index === actNav,
					'zb-dropdown-menu__title--down':index === actNav
				}]"></view>
                </view>

                <!-- <view class="date-wrapper">
                    <picker mode="date" @change="handleDate">
                        <view class="date c-flex-align" :style="{ height: height + 'rpx' }" @click="dateClick">
                            <view>{{ selDate }}</view>
                            <image src="https://i.loli.net/2020/07/15/xjVSvzWcH9NO7al.png" mode="" class="icon-triangle"></image>
                        </view>
                    </picker>
                </view> -->
            </view>
            <scroll-view scroll-y="true" class="popup" :class="popupShow ? 'popupShow' : ''">
                <view class="item-opt c-flex-align" :class="item.select ? 'actOpt' : ''" v-for="(item, index) in navData[actNav]" :key="index" @click="handleOpt(index)">
                    {{ item.text }}
                </view>
            </scroll-view>
        </view>
    </view>
</template>

<script>
// import { getCurDateTime } from '@/libs/utils.js';
export default {
    props: {
        height: {
            type: Number,
            default: 96
        },
        top: {
            type: String,
            default: 'calc(var(--window-statsu-bar) + 44px)'
        },
        border: {
            type: Boolean,
            default: true
        },
        filterData: {
            //必填
            type: Array,
            default: () => {
                return [];
            }
            // default: () => {
            //     return [
            //         [{ text: '全部状态', value: '' }, { text: '状态1', value: 1 }, { text: '状态2', value: 2 }, { text: '状态3', value: 3 }],
            //         [{ text: '全部类型', value: '' }, { text: '类型1', value: 1 }, { text: '类型2', value: 2 }, { text: '类型3', value: 3 }]
            //     ];
            // }
        },
        defaultIndex: {
            //默认选中条件索引,超出一类时必填
            type: Array,
            default: () => {
                return [0, 0, 0];
            }
        },
        closePopup: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            navData: [],
            popupShow: false,
            showMask: false,
            actNav: null,
            selDate: '选择日期',
            selIndex: [] //选中条件索引
        };
    },
    created() {
        this.navData = this.filterData;
        this.selIndex = this.defaultIndex;
        this.keepStatus();
    },
    mounted() {
        // this.selDate = getCurDateTime().formatDate;
    },
    methods: {
        keepStatus() {
            this.navData.forEach(itemnavData => {
                itemnavData.map(child => {
                    child.select = false;
                });
                return itemnavData;
            });
            for (let i = 0; i < this.selIndex.length; i++) {
                let selindex = this.selIndex[i];
                this.navData[i][selindex].select = true;
            }
        },
        navClick(index) {
            if (index === this.actNav) {
                this.tapMask();
                return;
            }
            this.popupShow = true;
            this.showMask = true;
            this.actNav = index;
        },
        handleOpt(index) {
            this.selIndex[this.actNav] = index;
            this.keepStatus();
            setTimeout(() => {
                this.tapMask();
            }, 100);
            let data = [];
            let res = this.navData.forEach(item => {
                let sel = item.filter(child => child.select);
                data.push(sel);
            });
            this.$emit('onSelected', data);
        },
        dateClick() {
            this.tapMask();
        },
        tapMask() {
            this.showMask = false;
            this.popupShow = false;
            this.actNav = null;
        },
        handleDate(e) {
            let d = e.detail.value;
            this.selDate = d;
            this.$emit('dateChange', d);
        },
        discard() {}
    },
    watch: {
        closePopup(newVal)  {
          if(newVal) {
            this.tapMask()
            this.$emit('update:closePopup', false)
        }

        }
    }
};
</script>

<style lang="scss" scoped>
page {
    font-size: 28rpx;
}
.c-flex-align {
    display: flex;
    justify-content: center;
    align-items: center;
}
.c-flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.filter-wrapper {
    background-color: #fff;
    box-shadow: 0rpx 6rpx 12rpx 2rpx rgba(172, 172, 172, 0.16);
    .inner-wrapper {
        // position: relative;
        .navs {
            position: relative;
            height: 100rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #fff;
            border-bottom: 2rpx solid #f5f6f9;
            color: #B3B3B3;
            z-index: 999;
            box-sizing: border-box;
            & > view {
                flex: 1;
                height: 100%;
                flex-direction: row;
                z-index: 999;
            }
            .date {
                justify-content: flex-end;
            }
            .actNav {
                color: #008a85;
                font-weight: bold;
            }
        }
        .mask {
            z-index: 666;
            position: fixed;
            top: calc(var(--status-bar-height) + 44px + 117px);
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0);
            transition: background-color 0.15s linear;
            &.show {
                background-color: rgba(0, 0, 0, 0.4);
            }
            &.hide {
                display: none;
            }
        }
        .popup {
            position: absolute;
            left: 0;
            right: 0;
            max-height: 500rpx;
            background-color: #fff;
            border-bottom-left-radius: 20rpx;
            border-bottom-right-radius: 20rpx;
            overflow: scroll;
            z-index: 999;
            transition: all 1s linear;
            opacity: 0;
            display: none;
            .item-opt {
                height: 100rpx;
                padding: 0 40rpx;
                color: #B3B3B3;
                border-bottom: 2rpx solid #f5f6f9;
            }
            .actOpt {
                color: #008a85;
                font-weight: bold;
                position: relative;
                &::after {
                    content: '✓';
                    font-weight: bold;
                    font-size: 36rpx;
                    position: absolute;
                    right: 40rpx;
                }
            }
        }
        .popupShow {
            display: block;
            opacity: 1;
        }
    }

    .icon-triangle {
        width: 16rpx;
        height: 16rpx;
        margin-left: 10rpx;
    }
}
.zb-dropdown-menu__title {
  position: relative;
  box-sizing: border-box;
  max-width: 100%;
  padding: 0 8px;
  font-size: 15px;
  line-height: 22px;
}

.zb-dropdown-menu__title::after {
  position: absolute;
  top: 50%;
  right: -4px;
  margin-top: -5px;
  border: 4px solid;
  border-color: transparent transparent $uni-text-color-placeholder $uni-text-color-placeholder;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  opacity: 0.8;
  content: '';
}

.zb-dropdown-menu__title--down::after {
  margin-top: -1px;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}
.zb-dropdown-menu__title--active::after {
  border-color: transparent transparent currentColor currentColor;
}
.zb-dropdown-menu__bar--opened {
  z-index: 11;
}
.zb-dropdown-menu__title--active {
  color: #008a85;
}
.zb-dropdown-item--down {
  bottom: 0;
}
</style>
