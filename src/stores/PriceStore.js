import { defineStore } from 'pinia';

export const usePriceStore = defineStore('prices', {
  state: () => ({
    prices: [], // Initial state
  }),

  actions: {
    async fill() {
      try {
        // Fetch data from the API
        const response = await fetch('https://football-backend-dbpassword.up.railway.app/api/prices');

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        const data = await response.json();

        // Update the state
        this.prices = data; // Direct assignment (reactive)
        console.log('Events loaded:', this.events);

        // Alternative: Use $patch if direct assignment doesn't work
        // this.$patch({ prices: data });
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    },
  },
});