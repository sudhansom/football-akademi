import { defineStore } from 'pinia';

export const useMessageStore = defineStore('messages', {
  state: () => ({
    messages: [], // Initial state
  }),

  actions: {
    async fill() {
      try {
        // Fetch data from the API
        const response = await fetch('https://football-backend-dbpassword.up.railway.app/api/messages');

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        const data = await response.json();

        // Update the state
        this.messages = data; // Direct assignment (reactive)
        console.log('Messages loaded:', this.messages);

        // Alternative: Use $patch if direct assignment doesn't work
        // this.$patch({ messages: data });
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    },
  },
});