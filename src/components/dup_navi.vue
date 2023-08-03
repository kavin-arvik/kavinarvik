<template>
<div v-if="role='Biller'">
  <v-app>
    <v-bottom-navigation dark shift>
      <v-btn>
        <span>Stock View</span>
        <v-icon>mdi-chart-histogram</v-icon>
      </v-btn>
  
      <v-btn>
        <span>Bill Entry</span>
        <v-icon>mdi-cash-multiple</v-icon>
      </v-btn>
  
      <v-btn>
        <span>Dashboard</span>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</div>

<div v-if="role='Manager'">
  <v-app>
    <v-bottom-navigation dark shift>
    <v-btn>
        <span>Stock Entry</span>
        <v-icon>mdi-truck-fast</v-icon>
    </v-btn>
      
      <v-btn>
        <span>Stock View</span>
        <v-icon>mdi-chart-histogram</v-icon>
      </v-btn>
  
      <v-btn>
        <span>Sales Report</span>
        <v-icon>mdi-clipboard-text</v-icon>
      </v-btn>
  
      <v-btn>
        <span>Dashboard</span>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</div>

  <div v-if="role='System Admin'">
  <v-app>
    <v-bottom-navigation dark shift>
    <v-btn>
        <span>Add User</span>
        <v-icon>mdi-account-multiple-plus</v-icon>
    </v-btn>
      
      <v-btn>
        <span>Login History</span>
        <v-icon>mdi-account-check</v-icon>
      </v-btn>
  
      <v-btn>
        <span>Dashboard</span>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</div>

  <div v-if="role='Inventry'">
  <v-app>
    <v-bottom-navigation dark shift>
    <v-btn>
        <span>Stock Entry</span>
        <v-icon>mdi-truck-fast</v-icon>
    </v-btn>
      
      <v-btn>
        <span>Stock View</span>
        <v-icon>mdi-chart-histogram</v-icon>
      </v-btn>
  
      <v-btn>
        <span>Dashboard</span>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</div>
</template>

<script>

</script>