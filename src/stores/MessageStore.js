import { defineStore } from 'pinia';
import axios from 'axios'
import { useFetchData } from '../composables/useFetchData';

const { data, error, loading, load } = useFetchData();

export const useMessageStore = defineStore('messages', {
  state: () => ({
    messages: [], // Initial state
    feedbacks: [],
  }),

  actions: {
    async fill() {
      try {
        // Fetch data from the API
        await load('/messages')

        // Update the state
        this.messages = data.value; // Direct assignment (reactive)

        // Alternative: Use $patch if direct assignment doesn't work
        // this.$patch({ messages: data });
      } catch (err) {
        console.error('Failed to fetch messages:', error);
      }
    },

    async fillFeedbacks() {
      try {
        // Fetch data from the API
        await load('/feedbacks')

        // Update the state
        this.feedbacks = data.value; // Direct assignment (reactive)

        // Alternative: Use $patch if direct assignment doesn't work
        // this.$patch({ messages: data });
      } catch (err) {
        console.error('Failed to fetch feedbacks:', error);
      }
    },
  },
});