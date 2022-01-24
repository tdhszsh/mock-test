import goodsEdit from '../goodsEdit/index.vue';
export default {
    name: 'goodsStock',
    components: {
        goodsEdit
    },
    data() {
        return {
            stockData: [
                {
                    id: '111',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '112',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '113',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '114',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '115',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '116',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '117',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '118',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '119',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '120',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '121',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '122',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '123',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
            ],
            editModalShow: false,
            goodsInfo: {}, // 传给子组件的对象
        }
    },
    methods: {
        editHandle(row) {
            console.log("1111查看行",row);
            this.stockData.some(item => {
                if(item.id == row.id) {
                    this.goodsInfo = item;
                    console.log("111查看goodsInfo",this.goodsInfo);
                    this.editModalShow = true;
                    return true;
                }
            })
        },
        rowClick(row, col, event) {
            console.log("1111row参数",row);
            console.log("1111col参数",col);
            console.log("1111event参数",event);
        },
        modifyGoodsAttr(bool, goodsAttr) {
            console.log("1111", bool, goodsAttr);
            if(bool) {
                this.$message.success('更新成功'); // 为什么直接更新了？？
            }
            this.editModalShow = false;
        }
    },
    mounted() {
        this.createHttp();
    }
}