import { defineStore } from 'pinia';
import { useFetchData } from '../composables/useFetchData';

const { data, error, loading, load } = useFetchData()

export const useUserStore = defineStore('prices', {
  state: () => ({
    users: [], // Initial state
  }),

  actions: {
    async fill() {
      try {
        // Fetch data from the API
        await load('/users/');

        this.users = data.value;
        // Alternative: Use $patch if direct assignment doesn't work
        // this.$patch({ users: data });
      } catch (error) {
        console.error('Failed to fetch Users:', error);
      }
    },
  },
});