/*
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
*/

// このファイルが全ファイル共通になるJSファイル

import { createApp} from 'vue'
import App from './App.vue'
import UserInformation from './components/UserInformation.vue'
import router from './router'
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Ripple from 'vue3-whr-ripple-directive'


// console.log("ここが全ファイル共通のJSファイル！")

const app = createApp(App)
app.use(router)
app.component('user-information', UserInformation)
app.component("ScreenTransitionLoading", Loading);
app.directive('ripple', Ripple); // 「v-ripple」というカスタムディレクティブを設定
app.use(Loading) // ボタン押下時のローディング
app.mount('#app')