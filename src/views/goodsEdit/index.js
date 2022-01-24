export default {
    name: 'goodsEdit',
    props: {
        goodsInfo: {
            type: Object,
            default: () => {
                return {
                    // id: '111',
                    // name: 'iphone12',
                    // quantity: 100,
                    // note: '来自父组件的备注'
                }
            }
        }
    },
    data() {
        return {
            goodsAttr: this.goodsInfo
        }
    },
    methods: {
        // 保存或取消
        btnHandle(bool) {
            // $emit事件可以传多个数据参数
            bool && this.$emit('modify-goods-attr', bool, this.goodsAttr);
        }
    },
    mounted() {
        console.log("111修改前查看goodsInfo的值",this.goodsInfo);
        console.log("111修改前查看goodsAttr的值",this.goodsAttr);
        this.goodsAttr = {
            id: 102,
            name: 'test2',
            quantity: 900,
            note: '测试测试'
        }
        console.log("111修改后查看goodsInfo的值",this.goodsInfo);
        console.log("111修改后查看goodsAttr的值",this.goodsAttr);
    },
}