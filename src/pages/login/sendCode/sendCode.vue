<script lang="ts" setup>
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { computed } from 'vue'

const loginForm = reactive({
  phoneNumber: '',
  code: ''
})

onLoad((query) => {
  loginForm.phoneNumber = query!.phoneNumber
})

// 手机号星号处理
const secretPhoneNumber = computed(() => {
  return loginForm.phoneNumber.replace(/^(\d{3}).*(\d{4})$/, '$1****$2')
})

// 登录
function handleLogin() {
  // 📌调取接口
  uni.navigateTo({ url: '/pages/home/home' })
}
</script>

<template>
  <view class="send-code main-container">
    <HeadTitle title="请输入6位验证码" :subTitle="'验证码已发送至' + secretPhoneNumber" />
    <uni-forms label-position="top" class="code-login">
      <uni-forms-item label="6位验证码" required>
        <uni-easyinput v-model="loginForm.code" :input-border="false" />
      </uni-forms-item>
      <button type="primary" @tap="handleLogin">登录</button>
    </uni-forms>
  </view>
</template>

<style lang="scss" scoped>
.uni-easyinput {
  border-bottom: 1px solid $uni-border-color;
}

.send-code {
  .code-login {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 360rpx;
    :deep(.uni-forms-item__label) {
      width: auto !important;
    }
    :deep(.uni-forms-item__content) {
      display: flex;
      .area-code {
        width: 70rpx;
        height: 70rpx;
        margin-right: 20rpx;
        padding: 0;
        text-align: center;
        line-height: 70rpx;
      }
      .phone-number-input {
        flex: 1;
      }
    }
  }
}
</style>
