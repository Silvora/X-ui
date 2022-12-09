import { createApp } from 'vue'

import "./index.scss"
import App from './App.vue'


import Button from "./components/Button/index"
import Input from './components/Input/index'
import Dialog from "./components/Dialog/index"
import Message from './components/Message/index'

const app = createApp(App)

app.use(Button)
app.use(Input)
app.use(Dialog)
//app.use(Message)
app.config.globalProperties.$message = Message
app.mount('#app')
