<script lang="ts" setup>
import { ref } from 'vue'
import type { DefineComponent } from 'vue'
import { watch } from 'vue'

const props = withDefaults(
  defineProps<{
    visible: boolean
  }>(),
  {
    visible: false
  }
)

const popupRef = ref<DefineComponent>()

const loginForm = ref({
  phoneNumber: ''
})

watch(
  () => props.visible,
  (newVal) => {
    newVal ? popupRef.value!.open() : popupRef.value!.close()
  }
)

const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()

// computed({
//   get() {
//     return props.visible
//   },
//   set(newVal) {
//     emit('update:visible', newVal)
//   }
// })

// 忘记密码弹出层显隐状态改变
function handlePopupVisibleChange({ show }: { show: boolean }) {
  emit('update:visible', show)
}
</script>

<template>
  <uni-popup
    ref="popupRef"
    class="forget-password-popup"
    background-color="#fff"
    type="bottom"
    @change="handlePopupVisibleChange"
  >
    <HeadTitle title="忘记密码？" sub-title="请输入手机号码以获取登录帮助" />
    <uni-forms label-position="top">
      <view class="code-login">
        <uni-forms-item label="手机号码" required>
          <button size="mini" class="area-code">+86</button>
          <uni-easyinput
            v-model="loginForm.phoneNumber"
            :input-border="false"
            focus
            class="phone-number-input"
            cursor-spacing="300"
          />
        </uni-forms-item>
      </view>
      <button type="primary">发送验证码</button>
    </uni-forms>
  </uni-popup>
</template>

<style lang="scss" scoped>
.forget-password-popup {
  :deep(.uni-popup__wrapper) {
    padding: 28rpx;
  }
  .uni-easyinput {
    border-bottom: 1px solid $uni-border-color;
  }

  .code-login {
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
}
</style>
