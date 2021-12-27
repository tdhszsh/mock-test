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
                            index: '/mac',
                        },
                        {
                            title: 'iPad',
                            index: '/ipad',
                        },
                        {
                            title: 'iPhone',
                            index: '/iphone',
                        },
                        {
                            title: 'AirPods',
                            index: '/airPods',
                        },
                        {
                            title: 'Watch',
                            index: '/watch',
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