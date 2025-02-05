import { defineStore } from "pinia";


export let useEventStore = defineStore('events', {
    state: () => {
        return {
            events: []
        }
    },

    actions: {
        fill(){
            fetch('https://football-backend-dbpassword.up.railway.app/api/schedules').then(response => response.json())
            .then(data => {
                this.events = data;
            })
        }
    }
})