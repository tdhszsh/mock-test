export default {
    name: 'navBar',
    components: {

    },
    data() {
        return {
            navBarList: [
                {
                    title: 'iphone系列',
                    index: '1',
                    insideNav: [
                        {
                            title: 'iphoneX',
                            index: '1-1',
                        },
                        {
                            title: 'iphone11',
                            index: '1-2',
                        },
                        {
                            title: 'iphone12',
                            index: '1-3',
                        },
                        {
                            title: 'iphoneSE',
                            index: '1-4',
                        },
                    ]
                }
            ]
        }
    },
    
}