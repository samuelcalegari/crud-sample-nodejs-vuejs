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
                        process.env.VUE_APP_API_ENDPOINT + "/token/",
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
