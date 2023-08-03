
<template>
    <div class="text-center ma-2">
      <!-- <v-btn
        dark
        @click="obj.snackbar = true"
      >
        Open Snackbar
      </v-btn> -->
      <v-snackbar
        v-model = obj.snackbar
        :top = obj.topvar
        :bottom = obj.bottomvar
        :color = obj.color
        timeout = 1100
      >
        {{ obj.text }}
  
        <!-- <template v-slot:action="{ attrs }">
          <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template> -->
      </v-snackbar>
    </div>
  </template> 
  <script>
  export default {
    data: () => ({
      
    }),
    props:{
        obj:{}
    }
  }
</script>