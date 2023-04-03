/* 收件箱消息 */
export type TMessage = {
  /* 
  // 主键
  id: string
  //  头像
  avatarUrl: string
  // 昵称
  nickname: string
  // 日期
  date: string
  // 内容
  content: string
  */
  // 主键 | 头像 | 昵称 | 日期 | 内容
  [key in 'id' | 'avatarUrl' | 'nickname' | 'date' | 'content']: string
} & {
  // 是否系统通知
  isSystemNotice: boolean
}
