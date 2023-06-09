/**
 * 存放公共类型或接口
 */

/* 分页查询参数 */
export type TPageParams = {
  // 页码
  pageNo: number
  // 页容量
  pageSize: number
}

/* 空格卡片项 */
export type TGridCardItem = {
  // 图标名称 | 文本内容
  [key in 'icon' | 'text']: string
}
