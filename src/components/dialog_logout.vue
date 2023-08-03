<template>
  <div id="app">
    <v-app id="inspire">
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Open Dialog
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5"> Log Out </v-card-title>
            <v-card-text>Are you sure, you want to Logout? </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text @click="dialog = false">
                No
              </v-btn>
              <v-btn color="green darken-1" text @click="dialog = false">
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    dialog: Boolean,
  },
};
</script>
