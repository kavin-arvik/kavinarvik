<template>
  <div id="app">
    <v-app id="inspire" class="d-flex pa-10 grey lighten-1">
      <v-card class="grey lighten-3">
        <v-card-title class=" blue--text text--darken-4 text-h4 mb-1">
          Login History
          <v-spacer></v-spacer>
              <v-text-field v-model="search" append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              ></v-text-field>
        </v-card-title>
  
        <v-data-table :headers="headers" :items="item" :search="search" class="grey lighten-3"></v-data-table>
      </v-card>
    </v-app>
    <!-- {{ this.$store.state.LoginHistory}}<br><br>
    {{ 'item arr' }} -->
    <!-- {{ item[0].Name }} -->
  </div>
  </template>
  
  <script>
  export default{
      data () {
      return {
        search: '',
        headers: [
          { text: 'Name', value: 'Name' },
          { text: 'Log-in', value: 'Login' },
          { text: 'Log-out', value: 'Logout' },
          { text: 'Date', value: 'Date' },
        ],
        
        // item: [
        //   {
        //     Name: this.$store.state.LoginHistory[0].Name,
        //     Login: this.$store.state.LoginHistory[0].Login,
        //     Logout: this.$store.state.LoginHistory[0].Logout,
        //     Date: this.$store.state.LoginHistory[0].Date,
        //   },
        // ],
        item:this.$store.state.LoginHistory,
      }
    },
  }
  
  </script>