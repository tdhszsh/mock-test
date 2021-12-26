<template>
    <div class="index-view">
        <div class="index-top">
            <img class="logo" src="../assets/logo.png">
            <h1 class="system-title">Welcome to Apple Store</h1>
        </div>
        <div class="index-bottom">
            <div class="index-left">
                <nav-bar></nav-bar>
            </div>
            <div class="index-right">
                <div class="index-right-top">
                </div>
                <div class="index-right-bottom">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .index-view {
        width: 100%;
        height: 100%;
        padding: 10px;
        background: #A6CDE6;
        display: flex;
        flex-flow: column nowrap;
        .index-top {
            width: 100%;
            height: 10%;
            margin-bottom: 10px;
            // background: #ffffff;
            display: flex;
            align-items: center;
            .logo {
                width: 60px;
                height: 60px;
                margin: 10px;
            }
            .system-title {
                font-style: italic;
            }
        }
        .index-bottom {
            width: 100%;
            flex: 1;
            display: flex;
            .index-left {
                width: 15%;
                height: 100%;
                background: #dbd0d0;
            }
            .index-right {
                flex: 1;
                height: 100%;
                display: flex;
                flex-flow: column nowrap;
                .index-right-top {
                    width: 100%;
                    height: 10%;
                    background: #b890d9;
                }
                .index-right-bottom {
                    width: 100%;
                    flex: 1;
                    background: #6fd783;
                }
            }
        }
    }
</style>
<script>
import navBar from './navBar/index.vue';
export default {
    name: 'index',
    components: {
        navBar
    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>
