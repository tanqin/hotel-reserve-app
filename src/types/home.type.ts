import type { TPageParams } from './common.type'

/* 房源查询参数 */
export type THouseQueryParams = {
  // 地区类型（0：国内 1：国际/港澳台）
  regionType: 0 | 1
  // 折扣类型（1：短途盛夏特惠 2：房东直降优惠）
  discountType?: 1 | 2
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
} & TPageParams

/* 标签 */
export type TTag = {
  // 主键
  id: string
  // 标签文本
  text: string
  // 级别（不同级别展示不同颜色）
  level?: number
}

/* 房源信息 */
export type THouseInfo = {
  // 主键
  id: string
  // 图片
  pictures: string[]
  // 设施
  facility: string
  // 房子标签
  tags: TTag[]
  // 名称
  title: string
  // 现价
  currentPrice: number
  // 原价
  originalPrice: number
  // 折扣标签
  discountTag: string
  // 评分（星星数量）
  score?: number
  // 房源介绍
  introduce?: string
  // 所在城市
  city: string
} & {
  // 是否已收藏
  collected?: boolean
}

/* 城市信息 */
export type TCity = {
  // 主键
  id: string
  // 封面图地址
  coverUrl: string
  // 城市名
  cityName: string
}
