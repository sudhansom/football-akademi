import { defineStore } from 'pinia';

export const useEventStore = defineStore('events', {
  state: () => ({
    events: [], // Initial state
  }),

  actions: {
    async fill() {
      try {
        // Fetch data from the API
        const response = await fetch('https://football-backend-dbpassword.up.railway.app/api/schedules');

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        const data = await response.json();

        // Update the state
        this.events = data; // Direct assignment (reactive)
        console.log('Events loaded:', this.events);

        // Alternative: Use $patch if direct assignment doesn't work
        // this.$patch({ events: data });
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    },
  },
});