import { defineStore } from 'pinia';
import { useFetchData } from '../composables/useFetchData';

const { data, error, loading, load } = useFetchData()

export const usePriceStore = defineStore('prices', {
  state: () => ({
    prices: [], // Initial state
  }),

  actions: {
    async fill() {
      try {
        // Fetch data from the API
        await load('/prices/');

        this.prices = data.value;
        // Alternative: Use $patch if direct assignment doesn't work
        // this.$patch({ prices: data });
      } catch (error) {
        console.error('Failed to fetch Prices:', error);
      }
    },
  },
});