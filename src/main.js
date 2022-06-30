import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MdCard} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'




const app = createApp(App)

app.use(router)
app.use(MdCard)
app.mount('#app')
