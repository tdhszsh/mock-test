<template>
    <div class="main-content-view">
        <div class="goods-search">
            <el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="searchKey"></el-input>
        </div>
        <div class="goods-show">
            <div class="goods-detail" v-for="(goods, index) in goodsList" :key="index"
                v-show="(index >= (currentPage-1) * pageSize) && (index < (currentPage) * pageSize)">
                <goods-detail
                    :goods="goods">
                </goods-detail>
            </div>
        </div>
        <div class="goods-pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                :current-page="currentPage"
                :page-size="pageSize"
                :total="this.goodsList.length"
                @current-change="currentChange"
                @prev-click="prevClick"
                @next-click="nextClick">
            </el-pagination>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .main-content-view ::-webkit-scrollbar {
        display: none;
    }
    .main-content-view {
        width: 100%;
        height: 100%;
        padding: 20px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-content: flex-start;
        .goods-search {
            width: 25%;
            align-self: flex-end;
        }
        .goods-show {
            width: 100%;
            // height: 100%;
            flex: 1;
            margin-top: 20px;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-content: flex-start;
            overflow: auto;
            .goods-detail {
                width: 220px;
                margin: 10px 10px 20px 10px;
            }
        }
    }
</style>
<script src="./index.js">
</script>