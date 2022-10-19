import request from '@/utils/request'

export function fetchList(query){
    return request({
        url:'/vue-element-admin/article/list',
        method:'get',
        params:query
    })
}

export function createArtical(data){
    return request({
        url:'/vue-element-admin/article/create',
        method:'post',
        data
    })
}
export function updateArtical(data){
    return request({
        url:'/vue-element-admin/article/update',
        method:'post',
        data
    })
}