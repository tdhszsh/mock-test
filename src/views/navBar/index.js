export default {
    name: 'navBar',
    components: {

    },
    data() {
        return {
            navBarList: [
                {
                    title: 'Apple Store',
                    index: '/goods',
                    insideNav: [
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