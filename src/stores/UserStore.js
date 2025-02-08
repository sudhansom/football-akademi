import { defineStore } from 'pinia';
import { useFetchData } from '../composables/useFetchData';

const { data, error, loading, load } = useFetchData()

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [], // Initial state
    currentUser: null,
    token: localStorage.getItem('token') || '',
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
    async fillCurrentUser(id){
        try {
            // Fetch data from the API
            await load('/users/'+id);
    
            this.currentUser = data.value;
            // Alternative: Use $patch if direct assignment doesn't work
            // this.$patch({ users: data });
          } catch (error) {
            console.error('Failed to fetch Users:', error);
          }
    },
    setToken(token){
        this.token = token;
    }
  },
});