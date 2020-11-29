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
        <v-list-item-action>
          <v-btn icon @click="markAsFavourite(index)"
            ><v-icon color="grey" v-if="contact.favourite">mdi-star</v-icon>
            <v-icon color="grey" v-else>mdi-star-outline</v-icon></v-btn
          >
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-row v-else class="fill-height ma-0" align="center" justify="center">
      <v-card elevation="0" color="transparent">
        <v-card-text> No Contatcs </v-card-text>
      </v-card>
    </v-row>

    <v-btn
      fab
      color="primary"
      style="position: absolute; right: 20px; bottom: 20px"
      ><v-icon>mdi-account-plus</v-icon></v-btn
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "Overcomer Emaitor",
          avatar: "",
          favourite: false,
        },
        {
          id: 23,
          name: "Jack Dorsey",
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
          favourite: true,
        },
        {
          id: 2,
          name: "Larry Paige",
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
          favourite: false,
        },
        {
          id: 4,
          name: "Elon Musk",
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
          favourite: true,
        },
      ],
    };
  },
  methods: {
    getRandColor(index) {
      var arr = ["red", "green", "brown", "yellow"];
      return arr[Math.floor(Math.random() * arr.length)];
    },
    markAsFavourite(index) {
      this.contacts[index].favourite = !this.contacts[index].favourite;
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
}
</style>