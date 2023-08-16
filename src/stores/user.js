import { defineStore } from 'pinia'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

export const useUserStore = defineStore({
  id: "user",
  state: () => {
    return {
      user: false,
      loading: false
    }
  },
  getters: {
    isLoggedIn: (state) => state.user !== false,
    getUser: (state) => state.user
  },
  actions: {

    async fetchUser() {
      const router = useRouter()
      try {
        // this.loading = true
        const { data } = await axios.get("http://zullkit-backend-main.test/api/user", {
          headers: {
            Authorization: localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token')
          }
        })
        // console.log('data from fetchuser', data)
        this.user = data
        // this.loading = false
        // console.log("isLoading", this.loading);
      } catch (error) {
        // console.log(error)
        this.user = false

        router.push("/login")


        // this.loading = false
      }
    },
  }
})