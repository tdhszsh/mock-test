export default {
    name: 'navBar',
    components: {

    },
    data() {
        return {
            navBarList: [
                { // 一级路由
                    title: 'Apple Store',
                    index: '/goods',
                    insideNav: [ // 二级路由
                        {
                            title: 'Mac',
                            index: '/goods/mac',
                        },
                        {
                            title: 'iPad',
                            index: '/goods/ipad',
                        },
                        {
                            title: 'iPhone',
                            index: '/goods/iphone',
                        },
                        {
                            title: 'AirPods',
                            index: '/goods/airPods',
                        },
                        {
                            title: 'Watch',
                            index: '/goods/watch',
                        },
                    ]
                },
                {
                    title: 'goodsStock',
                    index: '/storeStock',
                    insideNav: [
                        {
                            title: '库存表格',
                            index: '/storeStock/stock',
                        },
                    ]
                }
            ]
        }
    },
    
}