<script lang="ts" setup>
import { ref } from 'vue'
import HeadTitle from './components/HeadTitle.vue'
import ForgetPasswordPopup from './components/ForgetPasswordPopup.vue'

const loginForm = ref({
  phoneNumber: '',
  account: '',
  password: ''
})

const loginWay = ref<'code' | 'account'>('code')

// 切换登录方式
function handleToggleLoginWay() {
  loginWay.value = loginWay.value === 'code' ? 'account' : 'code'
}

const forgetPasswordPopupVisible = ref(false)

// 忘记密码
function handleForgetPassword() {
  //
  forgetPasswordPopupVisible.value = true
}
</script>

<template>
  <view class="login main-container">
    <HeadTitle
      :title="loginWay === 'code' ? '手机动态密码登录' : '使用账号密码登录'"
      :sub-title="
        loginWay === 'code' ? '未注册的手机号验证后将自动创建新账号' : '使用已注册手机号或邮箱登录'
      "
    />
    <uni-forms label-position="top">
      <!-- 验证码登录 -->
      <view v-show="loginWay === 'code'" class="code-login">
        <uni-forms-item label="手机号码" required>
          <button size="mini" class="area-code">+86</button>
          <uni-easyinput
            v-model="loginForm.phoneNumber"
            :input-border="false"
            class="phone-number-input"
          />
        </uni-forms-item>
      </view>
      <!-- 账号登录 -->
      <view v-show="loginWay === 'account'" class="account-login">
        <uni-forms-item label="手机号码/电子邮箱地址" required>
          <uni-easyinput v-model="loginForm.account" :input-border="false" />
        </uni-forms-item>
        <uni-forms-item label="密码" required>
          <uni-easyinput v-model="loginForm.password" :input-border="false" />
        </uni-forms-item>
      </view>
      <button type="primary">{{ loginWay === 'code' ? '发送验证码' : '登录' }}</button>
    </uni-forms>
    <view class="operate">
      <button class="toggle-login-way-btn link-btn" @tap="handleToggleLoginWay"
        >{{ loginWay === 'code' ? '使用账号密码登录' : '手机动态密码登录' }}
      </button>
      <button
        v-show="loginWay === 'account'"
        class="forget-password link-btn"
        @tap="handleForgetPassword"
      >
        忘记密码？
      </button>
    </view>
    <view class="other-ways-login">
      <view>使用其他方式登录</view>
      <view class="icons">
        <uni-icons type="weixin" size="30" />
        <uni-icons custom-prefix="iconfont" type="icon-apple-fill" size="30" />
      </view>
    </view>
    <footer class="declaration">
      注册/登录即代表您年满18岁，已认真阅读并同意接受Rook《服务条款》、《隐私政策》，并同意订阅Rook特惠信息和政策更新，您可在设置中随时退订。
    </footer>
    <ForgetPasswordPopup v-model:visible="forgetPasswordPopupVisible" />
  </view>
</template>

<style lang="scss" scoped>
.uni-easyinput {
  border-bottom: 1px solid $uni-border-color;
}
.login {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 88rpx);
  .code-login,
  .account-login {
    height: 360rpx;
  }

  .code-login {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
  .account-login :deep(.uni-forms-item__label) {
    width: auto !important;
  }
  .operate {
    flex: 1;
    display: flex;
    .link-btn {
      flex: 1;
      height: 80rpx;
      padding: 0;
      color: $green;
      font-size: 28rpx;
      text-align: left;
      background-color: transparent;
      &::after {
        border: none;
      }
    }
    .forget-password {
      color: $gray;
      text-align: right;
    }
  }

  .other-ways-login {
    text-align: center;
    .icons {
      .uni-icons {
        display: inline-block;
        margin: 40rpx;
        padding: 5rpx;
        border: 1px solid #000;
        border-radius: 50%;
        &:nth-child(1) {
          color: $uni-color-success !important;
          border-color: $uni-color-success;
        }
      }
    }
  }
  .declaration {
    color: $gray;
    font-size: 24rpx;
  }
}
</style>
