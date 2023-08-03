<template>
  <div>
    <!-- <div class="d-flex justify-center mt-12">
      <v-card width="305px" color="#00BFA5">
        <v-card-title class="text-h2 text-md-h1 text-lg-h2">{{
          note
        }}</v-card-title>
         <v-card-text class="text-h4 text-md-h4 text-lg-h4">{{ this.$state.store.Dashboard.role }}</v-card-text> -->
    <!-- <v-card-text class="text-h4 text-md-h4 text-lg-h4">{{ this.$state.store.Dashboard.userid }}</v-card-text> -->
    <!-- </v-card> -->
    <!-- </div> -->

    <div>
      <!-- <v-card  class="d-flex justify-center mt-6 ml-6" max-width="305"> -->
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="white--text text-h3 mt-13 ml-2 text-center font-weight-bold" >
            <!-- <v-text class=" blue--text text--darken-4 text-h3 mb-1">{{ note }}</v-text>  -->
          {{ note }}
          </v-list-item-title>

          <v-list-item-subtitle class="black--text text-h5 mt-1 ml-3 text-center font-weight-bold">
            {{ user_id }} {{ "(" + role + ")" }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <!-- </v-card> -->
    </div>
    <div class="mt-7">
      <biller_dash v-show="show" />
    </div>
  </div>
</template>

<script>
import biller_dash from "@/components/Biller_dash.vue";
export default {
  components: {
    biller_dash,
  },

  data() {
    return {
      note: "Welcome!!".toUpperCase(),
      user_id: this.$store.state.Dashboard.userid.toUpperCase(),
      role: "",
      show: false,
    };
  },

  beforeMount() {
    console.log("===================" + this.role);
    this.role = this.$store.state.Dashboard.role;
    console.log("===================" + this.role);
    if (this.role == "system admin" || this.role == "inventry") {
      this.show = false;
    } else if (this.role == "manager" || this.role == "biller") {
      this.show = true;
    }
  },
};
</script>
