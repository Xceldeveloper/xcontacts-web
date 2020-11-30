<template>
  <div id="wrapperx">
    <v-app-bar elevation="1" dense>
      <v-btn icon to="/"><v-icon>mdi-chevron-left</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-text-field
        dense
        autofocus
        hide-details
        placeholder="Search..."
        max-width="500px"
        filled
        flat
        solo
        v-model.trim="query"
        elevation="0"
        background-color="transparent"
        single-line
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>
    <div id="wrappery">
      <v-list v-if="filtered_contact.length > 0">
        <v-list-item
          link
          v-for="(contact, index) in filtered_contact"
          :key="index"
          @click="clickedContact(index)"
        >
          <v-list-item-avatar size="55" :color="getRandColor()">
            <v-img
              style="border-radius: 50%"
              :src="contact.avatar"
              aspect-ratio="1"
            >
              <template v-slot:placeholder>
                <v-icon color="black" v-if="contact.avatar == ''"
                  >mdi-account</v-icon
                >
              </template>
            </v-img>
          </v-list-item-avatar>
          <v-list-item-title>
            {{ contact.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <!-- search history -->
      <v-list v-if="filtered_contact.length == 0 && query == '' && history_query.length > 0">
        History
        <v-list-item
          link
          v-for="(contact, index) in history_query"
          :key="index"
          @click="clickedHistoryContact(index)"
        >
          <v-list-item-avatar size="55" :color="getRandColor()">
            <v-img
              style="border-radius: 50%"
              :src="contact.avatar"
              aspect-ratio="1"
            >
              <template v-slot:placeholder>
                <v-icon color="black" v-if="contact.avatar == ''"
                  >mdi-account</v-icon
                >
              </template>
            </v-img>
          </v-list-item-avatar>
          <v-list-item-title>
            {{ contact.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>

     <contactinfo @close="showInfo= false" :id="selectedIndex" :canShow="showInfo"/>
   
  </div>
</template>

<script>
import utils from "~/mixins/utils.js";
import contactinfo from "~/components/contactinfo.vue"
export default {
   components:{
    contactinfo
  },
  mixins: [utils],
  data() {
    return {
      contacts: [],
      history_query: [],
      filtered_contact: [],
      query: "",
      selectedIndex:-1,
      showInfo:false
    };
  },
  mounted() {
    this.contacts = this.getContacts();
    this.history_query = this.getSearchedContacts();
  },

  methods: {
    getRandColor(index) {
      //random background color for avatar
      var arr = ["red", "green", "brown", "yellow"];
      return arr[Math.floor(Math.random() * arr.length)];
    },
    clickedContact(index) {

      this.selectedIndex = this.filtered_contact[index].id 
      this.showInfo = true
     
      //add to search history
      this.addToSearchHistory(this.filtered_contact[index].id);

      //refresh search history
      this.history_query = this.getSearchedContacts();
    },
    clickedHistoryContact(index) {
      this.selectedIndex = this.history_query[index].id 
      this.showInfo = true
    },
  },
  computed: {

  },
  watch: {
    query(value) {
      if (value != "") {
        //if value is not empty
        this.filtered_contact = this.contacts.filter((e) => {
          return e.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });
      } else {
        this.filtered_contact = [];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#wrapperx {
  width: 100%;
  height: 100vh;
  overflow: auto;
}

#wrappery {
  width: 100%;
  max-width: 500px;
  margin: auto;
  height: calc(100vh - 48px);
  overflow: auto;
}
</style>