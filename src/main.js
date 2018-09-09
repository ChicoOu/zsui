import Vue from 'vue';
// Import F7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7-Vue Plugin Bundle (with all F7 components registered)
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import App from './App.vue';

// Init F7-Vue Plugin
Framework7.use(Framework7Vue);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');