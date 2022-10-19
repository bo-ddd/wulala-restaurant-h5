import { createApp } from "vue";
import { createPinia } from "pinia";
/**
 * 刘总的
 */
import {Tab,Tabs,Popup ,Button,Stepper} from 'vant'
import App from "./App.vue";
/**
 * 宋总的
 */
import { Skeleton,Search } from 'vant';
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
app.use(Skeleton).use(Search);
app.use(Button);
app.use(Stepper);
app.mount("#app");
