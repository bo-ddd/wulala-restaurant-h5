import Title from "@/components/Title.vue"
import Button from "@/components/Button.vue";
import type { App } from "vue";

export default {
    install(app:App<Element>){
        app.component('Title',Title);
        app.component('Button',Button);
    }
}