import { createApp } from "vue";
import { createPinia } from "pinia";
import {Tab,Tabs,Popup,Stepper,Button} from 'vant'

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./assets/lib/lib-flexable.js";
import  GlobalComponents  from "@/components";

const app = createApp(App);

app.use(GlobalComponents)


app.use(createPinia());
app.use(router);

app.use(Tab);
app.use(Tabs);
app.use(Popup);
app.use(Stepper);
app.use(Button);

app.mount("#app");
