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
                    id: '111',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '111',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '111',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '111',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '111',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '111',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '111',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '111',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '111',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '111',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '111',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
                {
                    id: '111',
                    name: 'iphone12',
                    quantity: 100,
                    note: '备注备注备注备注备注备注备注备注备注备注备注备注',
                },
            ],
            editModalShow: true,
        }
    },
    methods: {
        editHandle(row) {
            console.log("1111查看行",row);
        },
        rowClick(row, col, event) {
            console.log("1111row参数",row);
            console.log("1111col参数",col);
            console.log("1111event参数",event);
        }
    },
    mounted() {
        
    }
}