import Title from "@/components/Title.vue"
import Button from "@/components/Button.vue";
import Head from "./Head.vue";
import ExpressInfoItem from './ExpressInfoItem.vue';
import type { App } from "vue";

export default {
    install(app:App<Element>){
        app.component('Title',Title);
        app.component('Button',Button);
        app.component('Head',Head);
        app.component('ExpressInfoItem',ExpressInfoItem);
    }
}