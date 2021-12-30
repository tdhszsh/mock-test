<template>
    <div class="goods-stock-view">
        <div class="filter-control">
            <p class="test">test</p>
        </div>
        <div class="stock-table">
            <el-table :data="stockData" border style="100%" :height="style.height">
                <el-table-column prop="id" label="ID" width="180"></el-table-column>
                <el-table-column prop="name" label="名称" width="180"></el-table-column>
                <el-table-column prop="quantity" label="剩余" width="180"></el-table-column>
                <el-table-column prop="note" label="备注"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="medium" @click="editHandle(scope.row)">编辑</el-button>
                        <el-button type="text" size="medium" @click="deleteHandle(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
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
        align-items: center;
        .filter-control {
            width: 90%;
            height: 10%;
        }
        .stock-table {
            width: 90%;
            flex: 1;
        }
    }
</style>
<script src="./index.js">
</script>
