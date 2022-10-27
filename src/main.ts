import { createApp } from "vue";
import { createPinia } from "pinia";
/**
 * 刘总的
 */
import {Tab,Tabs,Popup ,Button,Stepper,Pagination} from 'vant'
import App from "./App.vue";
/**
 * 宋总的
 */
import { Skeleton,Search } from 'vant';
import router from "./router";
import { Icon } from 'vant';
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'
import { Rate } from 'vant';

/**
 * 周总的
 */
import { Uploader } from 'vant';
import { NoticeBar } from 'vant';
import { DatetimePicker } from 'vant';
import { Loading } from 'vant';
import { Field, CellGroup } from 'vant';
import { Picker } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Cell } from 'vant'

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
app.use(Skeleton).use(Search).use(Icon).use(UndrawUi).use(Rate);;
app.use(Button).use(Loading);
app.use(Stepper);
app.use(Uploader);
app.use(NoticeBar);
app.use(DatetimePicker);
app.use(Pagination);
app.use(Field);
app.use(CellGroup);
app.use(Picker);
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(Cell)
app.mount("#app");
