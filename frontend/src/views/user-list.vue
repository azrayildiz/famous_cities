<script>
import axios from 'axios'
import Counter from '@/components/counter.vue'
import { mapActions } from 'vuex'

export default {
  name: 'UserList',
  components: { Counter },
  data() {
    return {
      users: [],
      time: new Date(),
    }
  },
  async created() {
    this.users = await this.fetchUsers()
    const usersRequest = await axios.get('/api/users')
    this.users = usersRequest.data
  },
  methods: {
    ...mapActions(['fetchUsers']),
  },
}
</script>

<template lang="pug">
  .home
    h1 Famous Cities
    p The time is: {{ time }}
    h2 Users
    div(v-for="user in users" :user="user")
      router-link(:to="`/users/${user._id}`") user.name
    Counter
</template>
