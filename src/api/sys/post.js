import { request, servicePath } from '@/utils/axios'
import JSONBigInt from 'json-bigint'

const JSONBigInt2Str = JSONBigInt({ storeAsString: true })

/**
 * 列表
 *
 * @param data
 * @returns {AxiosPromise}
 */
export function list (data) {
  return request({
    url: servicePath.system + '/sys/post/list',
    method: 'post',
    data: data,
    transformResponse: [(data) => {
      return JSONBigInt2Str.parse(data)
    }]
  })
}

/**
 * 删除
 *
 * @Param ids
 * @returns {AxiosPromise}
 */
export function del (ids) {
  return request({
    url: servicePath.system + '/sys/post/delete',
    method: 'delete',
    data: ids
  })
}

/**
 * 新增
 *
 * @Param data
 * @returns {AxiosPromise}
 */
export function save (data) {
  return request({
    url: servicePath.system + '/sys/post/create',
    method: 'post',
    data: data
  })
}

/**
 * 修改
 *
 * @Param data
 * @returns {AxiosPromise}
 */
export function modify (data) {
  return request({
    url: servicePath.system + '/sys/post/modify',
    method: 'put',
    data: data
  })
}

/**
 * 校验岗位编码是否重复
 *
 * @param postCode
 * @param postId
 * @returns {AxiosPromise}
 */
export function checkPostCode (postCode, postId) {
  return request({
    url: servicePath.system + '/sys/post/checkPostCode',
    method: 'get',
    params: {
      postId: postId || '',
      postCode: postCode
    }
  })
}
