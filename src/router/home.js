const home = () => import('@/views/home/home.vue')
const index1 = () => import('@/views/home/index1.vue')
const index1_2 = () => import('@/views/home/index1_2.vue')
const index2 = () => import('@/views/home/index2.vue')
const index3 = () => import('@/views/home/index3.vue')

export default {
    path: '/index',
    component: home,
    name: '首页',
    children: [
        {
            path: '/index1',
            component: index1
        },
        {
            path: '/index1_2',
            component: index1_2
        },
        {
            path: '/index2',
            component: index2
        },
        {
            path: '/index3',
            component: index3
        }
    ]
}

// {
//     path: '/customerCenter/customerList',
//     component: customerList,
//     name: '客户中心-客户信息',
//     meta: {
//         requireAuth: true,
//         menuName: '客户信息',
//     },
//     show: true
// },