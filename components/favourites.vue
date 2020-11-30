<template>
  <div id="containerx">
    <v-list v-if="contacts.length > 0">
      <v-list-item link v-for="(contact, index) in contacts" :key="index">
        <v-list-item-avatar
          size="55"
          :color="getRandColor()"
          @click="clickedContact(index)"
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
        <v-list-item-title @click="clickedContact(index)">
          {{ contact.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-row v-else class="fill-height ma-0" align="center" justify="center">
      <v-card elevation="0" color="transparent">
        <v-card-text> No Favourite </v-card-text>
      </v-card>
    </v-row>

    <v-btn
      fab
      color="primary"
      style="position: absolute; right: 20px; bottom: 20px"
      ><v-icon>mdi-plus</v-icon></v-btn
    >
  </div>
</template>

<script>
import utils from "~/mixins/utils.js";
export default {
      mixins: [utils],
  data() {
    return {
      contacts: [
      ],
    };
  },
  mounted(){
   this.contacts = this.getFavourites()
  },
  methods: {
    getRandColor(index) {
      var arr = ["red", "green", "brown", "yellow"];
      return arr[Math.floor(Math.random() * arr.length)];
    },
    clickedContact(index) {
      console.log(this.contacts[index].name);
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
  position: relative;
  padding: 3px 0px;
}
</style>