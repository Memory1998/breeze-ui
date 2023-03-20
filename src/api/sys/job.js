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
    url: servicePath.sys + '/job/list',
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
 * @param ids
 * @returns {AxiosPromise}
 */
export function del (ids) {
  return request({
    url: servicePath.sys + '/job/delete',
    method: 'delete',
    data: ids
  })
}

/**
 * 新增
 *
 * @param data
 * @returns {AxiosPromise}
 */
export function save (data) {
  return request({
    url: servicePath.sys + '/job/create',
    method: 'post',
    data: data
  })
}

/**
 * 修改
 *
 * @returns {AxiosPromise}
 */
export function modify (data) {
  return request({
    url: servicePath.sys + '/job/modify',
    method: 'put',
    data: data
  })
}

/**
 * 运行一次
 *
 * @param id
 * @returns {AxiosPromise}
 */
export function runJobNow (id) {
  return request({
    url: servicePath.sys + '/job/runJobNow',
    method: 'get',
    params: {
      jobId: id
    }
  })
}

/**
 * 开启暂停
 *
 * @param jobId
 * @param status
 * @returns {AxiosPromise}
 */
export function open (jobId, status) {
  return request({
    url: servicePath.sys + '/job/open',
    method: 'put',
    params: {
      jobId: jobId,
      status: status
    }
  })
}
