import { defineStore } from "pinia";

export let useCounterStore = defineStore('counter', {
    // data
    state(){
        return {
            count:0
        };
    }, 
    //actions
    actions: {
        increament(){
            this.count ++;
        }, 
        decreament(){
            this.count--;
        }
    },
    // compouted
    getters: {
        remaining(){
            return 100 - this.count;
        }
    }
});