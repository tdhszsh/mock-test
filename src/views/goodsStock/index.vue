<template>
    <div class="goods-stock-view">
        <div class="filter-control">
        </div>
        <div class="stock-table">
            <el-table :data="stockData" height="200" border style="100%">
                <el-table-column prop="id" label="ID" width="180"></el-table-column>
                <el-table-column prop="name" label="名称" width="180"></el-table-column>
                <el-table-column prop="quantity" label="剩余" width="180"></el-table-column>
            </el-table>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .goods-stock-view {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-content: center;
        .filter-control {
            width: 100%;
            height: 10%;
        }
        .stock-table {
            width: 100%;
            flex: 1;
        }
    }
</style>
<script src="./index.js">
</script>