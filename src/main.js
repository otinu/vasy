// このファイルが全ファイル共通になるJSファイル

import { createApp} from 'vue'
import App from './App.vue'
import HumbergerMenu from "@/components/HumbergerMenu.vue"
import router from './router'
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Ripple from 'vue3-whr-ripple-directive'


// console.log("ここが全ファイル共通のJSファイル！")



const app = createApp(App)

/*
const app = createApp({
    rootComponent: App,
    data: () => ({
        open: false,
    }),
})
// app.use(App)
*/


app.use(router)
app.component('humberger-menu', HumbergerMenu)
app.component("ScreenTransitionLoading", Loading)
app.use(Loading) // ボタン押下時のローディング
app.directive('ripple', Ripple) // 「v-ripple」というカスタムディレクティブを設定

app.mount('#app')