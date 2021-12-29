<template>
    <div class="nav-bar-view">
        <el-menu 
            unique-opened 
            router>
            <el-menu-item index="/navIndex">
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu v-for="(nav, key) in navBarList" :key="key" :index="nav.index">
                <template slot="title">
                    <span>{{ nav.title }}</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-for="(insideNav, key) in nav.insideNav" :key="key" :index="insideNav.index">
                        {{ insideNav.title }}
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>
<style scoped lang="scss">
    .nav-bar-view {
        width: 100%;
        height: 100%;
        .el-menu {
            .el-menu-item, .el-submenu {
                span {

                }
            }
        }
    }
</style>
<script src="./index.js">
</script>