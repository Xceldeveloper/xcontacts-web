<template>
  <div id="containerx">
    <v-list v-if="contacts.length > 0"   >
      <v-list-item link v-for="(contact, index) in contacts" :key="index" @click="clickedContact(index)">
        <v-list-item-avatar
          size="55"
          :color="getRandColor()"
        
        >
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
    <v-row v-else class="fill-height ma-0" align="center" justify="center">
      <v-card elevation="0" color="transparent">
        <v-card-text> No Favourites </v-card-text>
      </v-card>
    </v-row>

    

 <contactinfo @close="showInfo= false" :id="selectedIndex" :canShow="showInfo"/>
   
  </div>
</template>

<script>
import utils from "~/mixins/utils.js";
import contactinfo from "~/components/contactinfo.vue"
export default {
  mixins: [utils],
  components:{
    contactinfo
  },
  data() {
    return {
      contacts: [],
      selectedIndex:-1,
      showInfo:false
    };
  },
  mounted() {
    this.contacts = this.getFavourites();
  },

  methods: {
    getRandColor(index) {
      //random background color for avatar
      var arr = ["red", "green", "brown", "yellow"];
      return arr[Math.floor(Math.random() * arr.length)];
    },
    clickedContact(index) {
     // console.log(this.contacts[index].name);
      this.selectedIndex = this.contacts[index].id 
      this.showInfo = true
    },
  },
};
</script>

<style>
#containerx {
  width: 100%;
  height: 100%;
  overflow: auto;
  max-width: 800px;
  margin: auto;
  padding: 3px 0px;
}
</style>