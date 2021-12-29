export default {
    name: 'navBar',
    components: {

    },
    data() {
        return {
            navBarList: [
                {
                    title: 'Apple Store',
                    index: '/storeIndex',
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
                    title: 'ipad系列',
                    index: '3',
                    insideNav: [
                        {
                            title: 'ipad2019',
                            index: '3-1',
                        },
                        {
                            title: 'ipad2020',
                            index: '3-2',
                        },
                        {
                            title: 'ipad2021',
                            index: '3-3',
                        },
                        {
                            title: 'ipad2022',
                            index: '3-4',
                        },
                    ]
                }
            ]
        }
    },
    
}