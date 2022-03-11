<template>
    <div class="index-page-view">
        导航首页内容
        <global-component></global-component>
        <div class="">
            我是来自vuex的变量：{{$store.state.state1}}
        </div>
    </div>
</template>
<style scoped lang="scss">
    .index-page-view {
        width: 100%;
        height: 100%;
    }
</style>
<script src="./index.js">
</script>