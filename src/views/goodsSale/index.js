import goodsDetail from '@/components/goodsDetail.vue';
export default {
    name: 'goodsSale',
    props: {
        goodsList: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    components: {
        goodsDetail
    },
    data() {
        return {
            currentPage: 1,
            pageSize: 5,
            searchKey: '',
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
    },
}