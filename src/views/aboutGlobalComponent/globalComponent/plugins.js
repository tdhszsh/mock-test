import globalComponent from "./index.vue";
export default {
    install(Vue, option) {
        // 写法一
        Vue.component('testComponent', globalComponent);

        // // 写法二
        // let test = Vue.extend(globalComponent);
        // let testEl = new test({});
        // testEl.$mount();
        // // document.body.appendChild(testEl.$el);

        // // 写法三
        // Vue.prototype.$createTestComponent = () => {
        //     let test = Vue.extend(globalComponent);
        //     let testEl = new test({});
        //     testEl.$mount();
        //     document.body.appendChild(testEl.$el);
        // }
    }
}