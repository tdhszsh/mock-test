<template>
    <div id="123">
        <p>关于全局组件，我想在本组件调用全局组件</p>
        <testComponent></testComponent>
        <test-component2></test-component2>
    </div>
</template>
<script type="text/x-template">

import Vue from 'vue'
Vue.component('test-component2', {
    template: `<p>这是通过Vue.component在某个组件中注册的全局组件</p>`
})
var MyComponent = Vue.component('test-component2')

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