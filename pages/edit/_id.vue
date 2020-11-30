<template>
  <div id="wrapperx">
    <v-app-bar color="primary" dense dark>
      <v-btn icon to="/">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Edit Contact</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="delete_snack = true"
        ><v-icon>mdi-trash-can-outline</v-icon></v-btn
      >
    </v-app-bar>
    <div id="wrappery">
      <div id="avatar-wrapper">
        <v-btn
          width="210"
          height="210"
          v-if="avatar == ''"
          color="primary"
          icon
          @click="showFileChooser"
          ><v-icon size="50">mdi-image-plus</v-icon></v-btn
        >
        <v-avatar size="200" v-else @click="avatar = ''">
          <v-img style="border-radius: 50%" :src="avatar" aspect-ratio="1">
            <template v-slot:placeholder> </template>
          </v-img>

          <v-btn
            @click="avatar = ''"
            fab
            absolute
            width="100%"
            height="100%"
            color="rgba(0,0,0,0.2)"
          >
            <v-icon size="40" color="#ededed">mdi-close</v-icon></v-btn
          >
        </v-avatar>
      </div>

      <div id="form-input">
        <v-text-field
          name="Full Name"
          label="Full Name"
          v-model.trim="fullname"
          :rules="[() => !!fullname || 'Name required']"
          id="name"
          hint="firstname and lastname"
          small
          color="primary"
          prepend-inner-icon="mdi-account"
          outlined
          rounded
        ></v-text-field>
        <v-text-field
          name="Email"
          label="Email"
          type="email"
          v-model.trim="email"
          id="email"
          small
          color="primary"
          prepend-inner-icon="mdi-email"
          outlined
          rounded
          :rules="[() => /.+@.+\..+/.test(email) || 'Invalid E-mail']"
        ></v-text-field>
        <v-text-field
          name="Phone"
          label="Phone"
          id="phone"
          type="number"
          v-model.trim="phone"
          small
          color="primary"
          prepend-inner-icon="mdi-phone"
          outlined
          rounded
        ></v-text-field>
        <v-text-field
          name="Address"
          label="Address"
          id="phone"
          v-model.trim="address"
          small
          color="primary"
          prepend-inner-icon="mdi-city"
          outlined
          rounded
        ></v-text-field>
        <v-textarea
          name="Note"
          label="Note"
          v-model="note"
          id="note"
          outlined
          rounded
          color="primary"
          rows="1"
          auto-grow
          row-height="13"
          prepend-inner-icon="mdi-text"
        >
        </v-textarea>

        <v-select
          outlined
          rounded
          multiple
          color="primary"
          :items="priorites"
          v-model="priority"
          label="Priority"
          name="Priority"
          id="priority"
        ></v-select>

        <v-btn
          v-if="canSave"
          style="margin: 10px auto; display: block; padding: 0px 50px"
          color="primary"
          rounded
          @click="SAVE_CONTACT"
          ><v-icon letf>mdi-floppy-disk</v-icon> save</v-btn
        >
      </div>
    </div>

    <v-dialog v-model="cropper_dialog" fullscreen persistent>
      <div class="crop-header">
        <v-app-bar color="#000000" dark dense>
          <v-btn icon @click="cropper_dialog = !cropper_dialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Crop</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="#000000" @click="done" v-if="hasCropped">Done</v-btn>
          <v-btn icon @click="showFileChooser">
            <v-icon>mdi-reply</v-icon>
          </v-btn>
          <v-btn icon @click="crop">
            <v-icon>mdi-crop</v-icon>
          </v-btn>
        </v-app-bar>
      </div>
      <div class="cropper-container">
        <vue-cropper
          ref="cropper"
          :minCropBoxWidth="200"
          :minCropBoxHeight="200"
          :src="croppedImg"
          :viewMode="1"
          :autoCropArea="1"
          :aspectRatio="1 / 1"
          :containerStyle="stylex"
          :guides="false"
        />
      </div>
    </v-dialog>

    <input
      style="display: none"
      ref="input"
      type="file"
      name="image"
      accept="image/*"
      @change="getImage"
    />

    <v-snackbar v-model="delete_snack">
      Do you want to Delete Contact ?
      <v-btn text @click.native="deleteContactx">Yes</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import utils from "~/mixins/utils.js";
export default {
  mixins: [utils],
  components: {
    VueCropper,
  },
  data() {
    return {
      id: 0,
      avatar: "", //   "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/220px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
      fullname: "",
      email: "",
      phone: "",
      address: "",
      note: "",
      priority: "",
      priorites: ["Emergency", "Work", "Family"],
      cropper_dialog: false,
      stylex: {
        height: "100%",
        width: "100%",
      },
      croppedImg: "",
      hasCropped: false,
      showCropper: false,
      imagePath: [],
      delete_snack: false,
    };
  },
  mounted() {
    this.id = this.$route.params.id;

    var res = this.getContactInfo(this.id);

    this.avatar = res.avatar;
    this.fullname = res.name;
    this.phone = res.phone;
    this.email = res.email;
    this.address = res.address;
    this.note = res.note;
    this.favourite = res.favourite;
    this.priority = res.priority;
  },
  computed: {
    canSave() {
      //if name is not empty we can save
      if (this.fullname != "") {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    crop() {
      var imgx = this.$refs.cropper.getCroppedCanvas().toDataURL();
      this.croppedImg = imgx;
      this.$refs.cropper.replace(imgx, false);
      this.hasCropped = true;
    },

    getImage(e) {
      var file;
      try {
        file = e.target.files[0];
      } catch (error) {
        this.canShow = false;
      }
      try {
        if (file.type.indexOf("image/") === -1) {
          this.snackMessage = "Please Select an IMAGE FILE";
          this.snackBar = true;
          return;
        }
      } catch (error) {
        this.snackMessage = "Please Select an IMAGE FILE";
        this.snackBar = true;
      }

      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.croppedImg = event.target.result;

          this.cropper_dialog = true;

          try {
            // rebuild cropperjs with the updated source
            this.$refs.cropper.replace(event.target.result);
          } catch (error) {}
        };

        try {
          reader.readAsDataURL(file);
        } catch (error) {
          this.snackMessage = "Please Select an IMAGE FILE";
          this.snackBar = true;
        }
      } else {
        this.snackMessage = "An Error Occured";
        this.snackBar = true;
      }
    },
    showFileChooser() {
      this.$refs.input.click();
    },
    done() {
      this.avatar = this.croppedImg;

      this.cropper_dialog = false;
      this.croppedImg = "";
      this.hasCropped = false;
    },

    SAVE_CONTACT() {
      var update_contact = {
        id: this.id,
        favourite: false,
        name: this.fullname,
        avatar: this.avatar,
        email: this.email,
        phone: this.phone,
        address: this.address,
        note: this.note,
        priority: this.priority,
      };
      this.updateContact(update_contact);
      this.$router.replace("/");
    },
    deleteContactx() {
      this.deleteContact(this.id);
      this.$router.replace("/");
    },
  },
};
</script>

<style>
#wrapperx {
  width: 100%;
  height: 100vh;
  overflow: auto;
}

#wrappery {
  width: 100%;
  height: calc(100vh - 48px);

  overflow: auto;
}

#avatar-wrapper {
  width: 100%;
  height: auto;
  text-align: center;
  padding: 15px;
}

#form-input {
  width: 95%;
  max-width: 500px;
  margin: auto;
  height: auto;
}

.crop-header {
  width: 100%;
  height: 48px;
}
.cropper-container {
  width: 100%;
  height: calc(100% - 48px);
  background-color: #000;
}

.crop-footer {
  width: 100%;
  height: 50px;
}
</style>