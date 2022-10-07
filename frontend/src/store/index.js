import { defineStore } from 'pinia'
import axios from "axios";

export const useAuthStore = defineStore({
    id: 'auth',

    state: () => ({
        token: null,
    }),

    actions: {
        async getToken() {

            console.log('token ' + this.token);

            if(this.token == null) {
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
        },

        async getToken2() {
            if(this.token2 == null) {
                try {
                    const response = await axios.post(
                        "http://localhost:8000/token/",
                        {
                            username:'apiuser',
                            password:'BU8u71iRgT'
                        }
                    );
                    this.token2 = response.data.token;
                } catch (err) {
                    console.log(err);
                }
            }

        }
    }
})
