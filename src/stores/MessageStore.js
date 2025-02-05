import { defineStore } from 'pinia';
import axios from 'axios'

export const useMessageStore = defineStore('messages', {
  state: () => ({
    messages: [], // Initial state
  }),

  actions: {
    async fill() {
      try {
        // Fetch data from the API
        const response = await axios.get('/messages');

        const data = response.data;

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