<template>
    <div class="goods-sale-parent">
        <goods-sale
            :goodsList="goodsList"
        ></goods-sale>
    </div>
</template>
<style scoped lang="scss">
    .goods-sale-parent {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
    }
</style>
<script>
import goodsSale from '../views/goodsSale/index.vue';
export default {
    name: 'goodsSaleParent',
    components: {
        goodsSale
    },
    data() {
        return {
            goodsList: []
        }
    },
    methods: {
        getGoodsList() {
            let newRouter = this.$route.params.id;
            switch(newRouter) {
                case 'mac': {
                    this.goodsList = [
                        {
                            goodsImg: require('../assets/iMac.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'mac',
                        },
                        {
                            goodsImg: require('../assets/iMac.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'mac',
                        },
                        {
                            goodsImg: require('../assets/iMac.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'mac',
                        },
                        {
                            goodsImg: require('../assets/iMac.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'mac',
                        },
                        {
                            goodsImg: require('../assets/iMac.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'mac',
                        },
                        {
                            goodsImg: require('../assets/iMac.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'mac',
                        },
                        {
                            goodsImg: require('../assets/iMac.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'mac',
                        },
                        {
                            goodsImg: require('../assets/iMac.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'mac',
                        },
                        {
                            goodsImg: require('../assets/iMac.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'mac',
                        },
                        {
                            goodsImg: require('../assets/iMac.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'mac',
                        },
                        {
                            goodsImg: require('../assets/iMac.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'mac',
                        },
                        {
                            goodsImg: require('../assets/iMac.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'mac',
                        },
                    ]
                    break;
                };
                case 'ipad': {
                    this.goodsList = [
                        {
                            goodsImg: require('../assets/iPad.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'ipad',
                        },
                        {
                            goodsImg: require('../assets/iPad.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'ipad',
                        },
                        {
                            goodsImg: require('../assets/iPad.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'ipad',
                        },
                        {
                            goodsImg: require('../assets/iPad.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'ipad',
                        },
                        {
                            goodsImg: require('../assets/iPad.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'ipad',
                        },
                        {
                            goodsImg: require('../assets/iPad.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'ipad',
                        },
                        {
                            goodsImg: require('../assets/iPad.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'ipad',
                        },
                        {
                            goodsImg: require('../assets/iPad.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'ipad',
                        },
                        {
                            goodsImg: require('../assets/iPad.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '灰色',
                            price: 6599,
                            type: 'ipad',
                        },
                    ]
                    break;
                };
                case 'iphone': {
                    this.goodsList = [
                        {
                            goodsImg: require('../assets/iPhone.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '蓝色',
                            price: 6599,
                            type: 'ipad',
                        },
                        {
                            goodsImg: require('../assets/iPhone.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '蓝色',
                            price: 6599,
                            type: 'ipad',
                        },
                        {
                            goodsImg: require('../assets/iPhone.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '蓝色',
                            price: 6599,
                            type: 'ipad',
                        },
                    ]
                    break;
                };
                case 'airPods': {
                    this.goodsList = [
                        {
                            goodsImg: require('../assets/airPods.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '蓝色',
                            price: 6599,
                            type: 'airPods',
                        },
                        {
                            goodsImg: require('../assets/airPods.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '蓝色',
                            price: 6599,
                            type: 'airPods',
                        },
                        {
                            goodsImg: require('../assets/airPods.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '蓝色',
                            price: 6599,
                            type: 'airPods',
                        },
                    ]
                    break;
                };
                case 'watch': {
                    this.goodsList = [
                        {
                            goodsImg: require('../assets/iWatch.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '蓝色',
                            price: 6599,
                            type: 'watch',
                        },
                        {
                            goodsImg: require('../assets/iWatch.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '蓝色',
                            price: 6599,
                            type: 'watch',
                        },
                        {
                            goodsImg: require('../assets/iWatch.png'),
                            ram: '4G',
                            rom: '256GB',
                            color: '蓝色',
                            price: 6599,
                            type: 'watch',
                        },
                    ]
                    break;
                };
            }
        }
    },
    mounted() {
        console.log("11111查看路由内容",this.$route.params);
        // 从其它组件导航至本组件时，需要重新初始化组件，获取初始化的值
        this.getGoodsList();
    },
    watch: {
        $route(to, from) {
            console.log("1111查看路由内容",this.$route.params);
            this.getGoodsList();
        }
    },
}
</script>