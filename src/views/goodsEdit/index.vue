<template>
    <div class="goods-edit-view">
        <ul>
            <li>
                <span class="title">ID</span>:
                <el-input placeholder="请输入商品ID" v-model="goodsAttr.id" disabled class="attr-input"></el-input>
            </li>
            <li>
                <span class="title">名称</span>:
                <el-input placeholder="请输入商品名称" v-model="goodsAttr.name" class="attr-input"></el-input>
            </li>
            <li>
                <span class="title">剩余</span>:
                <el-input-number placeholder="请输入库存量" v-model="goodsAttr.num"
                :min="0" :max="1000" :step="10" class="attr-input"></el-input-number>
            </li>
            <li>
                <span class="title">备注</span>:
                <el-input placeholder="请输入备注" v-model="goodsAttr.note" class="attr-input"></el-input>
            </li>
        </ul>
        <div class="operation-btn">
            <el-button type="primary">保存</el-button>
            <el-button plain>取消</el-button>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .goods-edit-view {
        width: 100%;
        height: 100%;
        ul {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            li {
                width: 70%;
                margin-bottom: 20px;
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;
                align-items: center;
                .title {
                    width: 40px;
                    height: 100%;
                    text-align-last: end;
                }
                .attr-input {
                    flex: 1;
                    margin-left: 20px;
                }
            }
        }
        .operation-btn {
            margin-top: 20px;
        }
    }
</style>
<script src="./index.js">
</script>