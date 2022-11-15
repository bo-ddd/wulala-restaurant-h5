import { defineStore } from "pinia"
export const useCatrStore = defineStore({
    id: 'cart',
    state: ():  any => {
        return {
            cartList: [],
            select: []
        }
    },
    getters: {
        isChecked(): any {
            return this.select.length ==  this.cartList.length
        }
    },
    actions: {
        addCatr(list: any) {
            list.forEach((el: any) => {
                el['check'] = true
                this.select.push(el.id)
            });·
            this.cartList = list
        },
        all() {
            this.select = this.cartList.map((v:any) => {
                v['check'] = true
                return v.id
            })
        },
        unAll() {
            this.cartList.forEach(v => {
                v['check'] = false
            })
            this.select = []
        },
    }
})