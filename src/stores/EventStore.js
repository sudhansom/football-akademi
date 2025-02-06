import { defineStore } from 'pinia';
import { useFetchData } from '../composables/useFetchData';

const { data, error, loading, load } = useFetchData();

export const useEventStore = defineStore('events', {
  state: () => ({
    events: [], // Initial state
  }),

  actions: {
    async fill() {
      try {
        // Fetch data from the API
        const response = await load('/schedules');

        this.events = data.value;
        

        // Alternative: Use $patch if direct assignment doesn't work
        // this.$patch({ events: data });
      } catch (err) {
        console.error('Failed to fetch events:', error);
      }
    },
  },
});