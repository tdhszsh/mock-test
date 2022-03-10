<template>
    <div id="123">
        <p>关于全局组件，我想在本组件调用全局组件</p>
        <testComponent></testComponent>
    </div>
</template>
<script type="text/x-template">

export default {
    name: 'globalComponent',
    data() {
        return {
            
        }
    },
    mounted() {
        
    }
}
</script>