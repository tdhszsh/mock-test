export default {
    name: 'goodsEdit',
    props: {
        goodsInfo: {
            type: Object,
            default: () => {
                return {
                    id: '111',
                    name: 'iphone12',
                    num: 100,
                    note: '来自父组件的备注'
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

    },
    mounted() {

    },
}