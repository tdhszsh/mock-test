import goodsDetail from '@/components/goodsDetail.vue';
export default {
    name: 'mainContent',
    components: {
        goodsDetail
    },
    data() {
        return {
            currentPage: 1,
            pageSize: 6,
            goodsList: [
                {
                    goodsImg: require('../../assets/logo.png'),
                    ram: '4G',
                    rom: '128GB',
                    color: '蓝色',
                    price: 5599,
                    type: 'iphone',
                },
                {
                    goodsImg: require('../../assets/logo.png'),
                    ram: '4G',
                    rom: '128GB',
                    color: '蓝色',
                    price: 5599,
                    type: 'iphone',
                },
                {
                    goodsImg: require('../../assets/logo.png'),
                    ram: '4G',
                    rom: '128GB',
                    color: '蓝色',
                    price: 5599,
                    type: 'iphone',
                },
                {
                    goodsImg: require('../../assets/logo.png'),
                    ram: '4G',
                    rom: '128GB',
                    color: '蓝色',
                    price: 5599,
                    type: 'iphone',
                },
                {
                    goodsImg: require('../../assets/logo.png'),
                    ram: '4G',
                    rom: '128GB',
                    color: '蓝色',
                    price: 5599,
                    type: 'iphone',
                },
                {
                    goodsImg: require('../../assets/logo.png'),
                    ram: '4G',
                    rom: '128GB',
                    color: '蓝色',
                    price: 5699,
                    type: 'iphone',
                },
                {
                    goodsImg: require('../../assets/logo.png'),
                    ram: '4G',
                    rom: '128GB',
                    color: '蓝色',
                    price: 5599,
                    type: 'iphone',
                },
                {
                    goodsImg: require('../../assets/logo.png'),
                    ram: '4G',
                    rom: '128GB',
                    color: '蓝色',
                    price: 5599,
                    type: 'iphone',
                },
                {
                    goodsImg: require('../../assets/logo.png'),
                    ram: '4G',
                    rom: '128GB',
                    color: '蓝色',
                    price: 5599,
                    type: 'iphone',
                },
                {
                    goodsImg: require('../../assets/logo.png'),
                    ram: '4G',
                    rom: '128GB',
                    color: '蓝色',
                    price: 5599,
                    type: 'iphone',
                },
                {
                    goodsImg: require('../../assets/logo.png'),
                    ram: '4G',
                    rom: '128GB',
                    color: '蓝色',
                    price: 5599,
                    type: 'iphone',
                },
                {
                    goodsImg: require('../../assets/logo.png'),
                    ram: '4G',
                    rom: '128GB',
                    color: '蓝色',
                    price: 5699,
                    type: 'iphone',
                },
            ]
        }
    },
    methods: {
        currentChange(index) {
            // 这里的分页组件中，子组件修改父组件的值
            this.currentPage = index;
        },
        prevClick() {

        },
        nextClick() {

        }
    }
}