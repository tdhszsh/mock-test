export default {
    name: 'goodsStock',
    data() {
        return {
            tableHeight: '300',
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
            ]
        }
    },
    methods: {
        editHandle(row) {
            console.log("1111查看行",row);
        }
    },
    mounted() {
        this.tableHeight = $('.stock-table').height();
    }
}