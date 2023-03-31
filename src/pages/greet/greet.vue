<script lang="ts" setup></script>

<template>
  <view class="greet main-container">
    <view class="app-title">Rook</view>
    <view class="slogan">有你在，便是家</view>
    <navigator class="register-nav" url="/pages/login/login?loginWay=code">
      <button class="register-btn" type="primary">注册</button>
    </navigator>
    <view class="go-login">
      已经有账号了？
      <navigator class="login-nav" url="/pages/login/login?loginWay=account">登录</navigator>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.greet {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.7) 0%, transparent 50%),
    url('@/static/images/greet.jpg') center/cover no-repeat fixed;

  .app-title {
    display: flex;
    align-items: flex-end;
    flex: 0.3;
    margin-bottom: 20rpx;
    font-size: 60rpx;
    font-weight: bold;
  }
  .slogan {
    flex: 0.6;
    color: $green;
  }
  > :deep(.navigator-wrap) {
    width: 100% !important;
  }
  .register-nav {
    .register-btn {
      width: 100%;
      margin-bottom: 30rpx;
      border-radius: 46rpx !important;
    }
  }
  .go-login {
    flex: 0.1;
    .login-nav {
      display: inline-block;
    }
  }
}
</style>
