import Title from "@/components/Title.vue"

import type { App } from "vue";

export default {
    install(app:App<Element>){
        app.component('Title',Title);
    }
}