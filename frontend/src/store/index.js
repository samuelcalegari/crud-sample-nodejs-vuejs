import { defineStore } from 'pinia'
import axios from "axios";

export const useAuthStore = defineStore({
    id: 'auth',

    state: () => ({
        token: ''
    }),

    getters: {
    },

    actions: {
        async getToken() {
            if(this.token == '') {
                try {
                    const response = await axios.post(
                        "http://localhost:8000/token/",
                        {
                            username:'apiuser',
                            password:'BU8u71iRgT'
                        }
                    );
                    this.token = response.data.token;
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
})
