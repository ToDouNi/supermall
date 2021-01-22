import { request } from './request'
export const getHomeMultidata = () => {
  return request({
    url: '/home/multidata'
  })
}
export const getHomeGoods = (type,page) => {
  return request({
    url: 'http://localhost:8080/data/HomeGoods.json',
  })
}