<template>
  <div>
    <v-app-bar dense elevation="3" color="primary" dark>
      <v-toolbar-title>XcelContacts</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/search"><v-icon>mdi-magnify</v-icon></v-btn>
    </v-app-bar>
    <div id="wrapperx">
      <component :is="selectedComponent" > </component>
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
        <span>Contacts</span>
        <v-icon v-if="selectedComponent == 'contacts'">mdi-account</v-icon>
        <v-icon v-else>mdi-account-outline</v-icon>
      </v-btn>

      <v-btn @click="selectComponent('favourites')">
        <span>Favourites</span>
        <v-icon v-if="selectedComponent == 'favourites'">mdi-star</v-icon>
        <v-icon v-else>mdi-star-outline</v-icon>
      </v-btn>

      <v-btn @click="selectComponent('priorities')">
        <span>Priorities</span>
        <v-icon v-if="selectedComponent == 'priorities'">mdi-label</v-icon>
        <v-icon v-else>mdi-label-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import contacts from "~/components/contacts.vue";
import favourites from "~/components/favourites.vue";
import priorities from "~/components/priorities.vue";
export default {
  components: {
    contacts: contacts,
    favourites: favourites,
    priorities: priorities,
  },
  data() {
    return {
      navIndex: 0,
      selectedComponent: "contacts",
    };
  },
  methods: {
    selectComponent(component) {
      this.selectedComponent = component;
    },
  },
};
</script>
<style lang="scss" scoped>
#wrapperx {
  width: 100%;
  overflow: auto;
  height: calc(100vh - 103px);
}
</style>