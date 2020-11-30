<template>
  <v-bottom-sheet v-model="canShow" scrollable max-width="500" >
    <v-card style="border-radius: 10px 10px 0px 0px">
      <v-card-text style="padding: 0px">
        <v-img
          v-if="avatar !== ''"
          :src="avatar"
          style="border-radius: 10px 10px 0px 0px"
          width="100%"
          aspect-ratio="1"
          background-color="primary"
        >
        </v-img>
        <v-avatar
          v-else
          style="margin: 10px auto; display: block"
          size="150"
          color="primary"
        >
          <v-icon size="50" color="black" v-if="avatar == ''"
            >mdi-account</v-icon
          >
        </v-avatar>
        <v-card-title> {{ name }} </v-card-title>

        <v-bottom-navigation grow dense light flat elevation="0" centered>
          <v-btn @click="contactAction('phone')">
            <span>Call</span>
            <v-icon>mdi-phone</v-icon>
          </v-btn>

          <v-btn @click="contactAction('email')">
            <span>Email</span>
            <v-icon>mdi-email</v-icon>
          </v-btn>
          <v-btn @click="contactAction('favourite')">
            <span>Favourite</span>
            <v-icon v-if="favourite">mdi-star</v-icon>
            <v-icon v-else>mdi-star-outline</v-icon>
          </v-btn>
        </v-bottom-navigation>
        <br />

        <v-list-item link @click="add('phone')">
          <v-list-item-icon>
            <v-icon>mdi-phone</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{
            phone == "" ? "Add  Phone" : phone
          }}</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="add('email')">
          <v-list-item-icon>
            <v-icon>mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{
            email == "" ? "Add  Email" : email
          }}</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="add('address')">
          <v-list-item-icon>
            <v-icon>mdi-city</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{
            address == "" ? "Add  Address" : address
          }}</v-list-item-content>
        </v-list-item>
        <v-list-item link @click="add('note')">
          <v-list-item-icon>
            <v-icon>mdi-text</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{
            note == "" ? "Add  Note" : note
          }}</v-list-item-content>
        </v-list-item>

        <v-list-item link @click="add('priority')">
          <v-list-item-icon>
            <v-icon>mdi-label</v-icon>
          </v-list-item-icon>
          <v-list-item-content v-if="priorities.length == 0">
            Set Priority
          </v-list-item-content>
          <v-list-item-title v-else>
            <v-chip
              outlined
              color="primary"
              style="margin: 3px"
              v-for="(priority, index) in priorities"
              :key="index"
              >{{ priority }}</v-chip
            >
          </v-list-item-title>
        </v-list-item>

        <v-btn color="primary" block>
          <v-icon>mdi-pen</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>

    <v-snackbar v-model="snack" timeout="1500">
      {{ snackMessage }}
    </v-snackbar>
  </v-bottom-sheet>
</template>

<script>
import utils from "~/mixins/utils.js";
export default {
  mixins: [utils],
  props: {
    canShow: {
      Type: Boolean,
      default: true,
    },
    id: {
      required: true,
      default: -1,
    },
  },
  data() {
    return {
      avatar: "",
      name: "",
      phone: "",
      email: "",
      address: "",
      note: "",
      favourite: false,
      priorities: [],
      snackMessage: "",
      snack: false,
    };
  },
  mounted() {},
  methods: {
    getRandColor() {
      //random background color for avatar
      var arr = ["red", "green", "brown", "yellow"];
      return arr[Math.floor(Math.random() * arr.length)];
    },
    contactAction(which) {
      if (which == "phone") {
        if (this.phone == "") {
          this.snackMessage = "Add Phone";
          this.snack = true;
        } else {
        }
      } else if (which == "email") {
        if (this.email == "") {
          this.snackMessage = "Add Email";
          this.snack = true;
        } else {
        }
      } else if (which == "favourite") {
        this.favourite = !this.favourite;
        this.setFavourite(this.id, this.favourite);
        if (this.favourite) {
          this.snackMessage = "Marked As Favourite";
          this.snack = true;
        } else {
          this.snackMessage = "Unmarked As Favourite";
          this.snack = true;
        }
      }
    },
    add(which) {},
  },
  watch: {
    id(value) {
      if (value == -1) {
        return;
      }

      var res = this.getContactInfo(value);

      this.avatar = res.avatar;
      this.name = res.name;
      this.phone = res.phone;
      this.email = res.email;
      this.address = res.address;
      this.note = res.note;
      this.favourite = res.favourite;
      this.priorities = res.priority;
    },
    canShow(open) {
      if (!open) {
        this.$emit("close", true);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#name {
  display: block;
  padding: 5px;
  font-size: 18px;
  font-weight: bold;
}
</style>