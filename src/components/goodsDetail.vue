<template>
    <!-- 查看详情基础组件 -->
    <div class="goods-detail-view">
        <!-- 图片 -->
        <div class="goods-img-div">
            <img :src="goods.goodsImg" class="goods-img">
        </div>
        <!-- 配置 -->
        <div class="config-level">
            <div class="base-config">
                <span class="ram">{{ goods.ram }}</span>
                <span class="rom">{{ goods.rom }}</span>
                <span class="color">{{ goods.color }}</span>
            </div>
            <span class="price">单价：￥{{ goods.price }}</span>
        </div>
        <!-- 合计 -->
        <div class="number-price">
            <template>
                <el-input-number v-model="goodsNum" size="mini"
                    :min="0" :max="10" label="选购数量" class="total-number">
                </el-input-number>
            </template>
            <span class="total-price">总价：￥{{ totalPrice }}</span>
        </div>
        <!-- 操作 -->
        <div class="operation-btn">
            <el-button type="primary" size="mini" @click="buyNow">立即购买</el-button>
            <el-button type="danger" icon="el-icon-plus" size="mini" @click="addToCar">加入购物车</el-button>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .goods-detail-view {
        // width: 220px;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
        border: solid 1px #0c96e3;
        border-radius: 12px;
        box-shadow: 5px 5px 10px #666666;
        .goods-img-div {
            width: 100px;
            height: 100px;
            margin: 10px 0;
            padding: 10px;
            .goods-img {
                width: 100%;
                height: 100%;
            }
        }
        .config-level {
            width: 100%;
            display: flex;
            flex-flow: column;
            align-items: center;
            .base-config {
                display: flex;
                justify-content: center;
                align-items: center;
                .ram, .rom {
                    margin-right: 10px;
                }
            }
            .price {

            }
        }
        .number-price {
            margin-top: 10px;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            .total-number {
                margin-bottom: 5px;
            }
            .total-price {

            }
        }
        .operation-btn {
            width: 50%;
            margin-top: 10px;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            .el-button {
                width: 100%;
                margin-left: 0;
                margin-bottom: 5px;
            }
        }
    }
</style>
<script>
export default {
    name: 'goodsDetail',
    props: {
        goods: {
            type: Object,
            default: () => {
                return {
                    goodsImg: require('../assets/logo.png'),
                    ram: '4G',
                    rom: '128GB',
                    color: '蓝色',
                    price: 5599,
                    type: 'iphone',
                }
            }
        }
    },
    data() {
        return {
            goodsNum: 0,
            totalPrice: 0,
        }
    },
    methods: {
        
        buyNow() {
            !this.goodsNum && this.$message.warning('未选购任何商品！');
        },
        
        addToCar() {
            !this.goodsNum && this.$message.warning('未选购任何商品！');
        }
    },
    mounted() {
        
    },
    watch: {
        goodsNum: function() {
            this.totalPrice = parseFloat(this.goodsNum * this.goods.price);
        }
    }
}
</script>