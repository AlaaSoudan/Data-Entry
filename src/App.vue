<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
      

       <h3>Alnada system</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://www.alnada-ngo.org/"
        target="_blank"
        text
      >
        <span class="mr-2">حول جمعية الندى </span>
      
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
