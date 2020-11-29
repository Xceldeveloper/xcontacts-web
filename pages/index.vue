<template>
  <div>
    <v-app-bar dense elevation="3" color="primary">
      <v-toolbar-title>XcelContacts</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
    </v-app-bar>

    <div id="wrapperx">

    </div>
        <v-bottom-navigation
      v-model="navIndex"
      grow
      dense
      light
      shift
      absolute
      centered
      elevation="2"
      color="primary"
    >
      <v-btn @click="selectComponent('contacts')">
        <span>Hangouts</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn @click="selectComponent('favourites')">
        <span>DMs</span>
        <v-icon>mdi-star</v-icon>
      </v-btn>

      <v-btn @click="selectComponent('labels')">
        <span>Search</span>
        <v-icon>mdi-label</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data(){
    return{
      navIndex:0,
      selectedComponent:''
    }
  },
   methods: {
    selectComponent(component) {
      this.selectedComponent = component
    },
  },
};
</script>
<style lang="scss" scoped>

#wrapperx{
  width: 100%;
  overflow: auto;
  height: calc(100vh - 100px);
  border: 1px solid red;
}
</style>