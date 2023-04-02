/* 房源查询参数 */
export type THouseQueryParams = {
  // 查询类型（0：国内 1：国际/港澳台）
  type: 0 | 1
  // 城市
  city: string
  // 景点/地点/房源名
  // address: string
  // 入住时间
  startTime: string
  // 退房时间
  endTime: string
  // 房客人数
  numOfPeople: number
  // 页码
  pageNo: number
  // 页容量
  pageSize: number
}

/* 标签 */
export type TTag = {
  // 主键
  id: string | number
  // 标签文本
  text: string
  // 级别（不同级别展示不同颜色）
  level?: number
}

/* 房源信息 */
export type THouseInfo = {
  // 主键
  id: string | number
  // 图片
  pictures: string[]
  // 设施
  facility: string
  // 房子标签
  tags: TTag[]
  // 名称
  name: string
  // 现价
  currentPrice: number
  // 原价
  originalPrice: number
  // 折扣标签
  discountTag: string
  // 评分（星星数量）
  score?: number
}
