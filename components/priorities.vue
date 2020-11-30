<template>
  <div id="containerx">
    <v-tabs
      color="primary"
      :mobile-break-point="200"
      grow
      centered
      dense
      value="1"
    >
      <v-tab>
        <span>Work</span>
      </v-tab>
      <v-tab>
        <span>Family</span>
      </v-tab>
      <v-tab>
        <span>Emergency</span>
      </v-tab>

      <!-- work -->
      <v-tab-item>
        <div class="tab-item-cover">
          <v-list v-if="work_prority.length > 0">
            <v-list-item
              link
              v-for="(contact, index) in work_prority"
              :key="index"
              @click="clickedWorkPrority(index)"
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
          <v-row
            v-else
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-card elevation="0" color="transparent">
              <v-card-text> Empty Priority </v-card-text>
            </v-card>
          </v-row>
        </div>
      </v-tab-item>

      <!-- family -->
      <v-tab-item>
        <div class="tab-item-cover">
          <v-list v-if="family_prority.length > 0">
            <v-list-item
              link
              v-for="(contact, index) in family_prority"
              :key="index"
              @click="clickedFamilyPrority(index)"
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
          <v-row
            v-else
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-card elevation="0" color="transparent">
              <v-card-text> Empty Priority </v-card-text>
            </v-card>
          </v-row>
        </div>
      </v-tab-item>

      <!-- emergency -->
      <v-tab-item>
        <div class="tab-item-cover">
          <v-list v-if="emergency_prority.length > 0">
            <v-list-item
              link
              v-for="(contact, index) in emergency_prority"
              :key="index"
              @click="clickedEmergencyPrority(index)"
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
          <v-row
            v-else
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-card elevation="0" color="transparent">
              <v-card-text> Empty Priority </v-card-text>
            </v-card>
          </v-row>
        </div>
      </v-tab-item>
    </v-tabs>

    <contactinfo
      @close="showInfo = false"
      :id="selectedIndex"
      :canShow="showInfo"
    />
  </div>
</template>

<script>
import utils from "~/mixins/utils.js";

import contactinfo from "~/components/contactinfo.vue";
export default {
  mixins: [utils],
  components: {
    contactinfo,
  },
  data() {
    return {
      work_prority: [],
      family_prority: [],
      emergency_prority: [],
      selectedIndex: -1,
      showInfo: false,
    };
  },
  mounted() {
    this.work_prority = this.getPriority("Work");
    this.family_prority = this.getPriority("Family");
    this.emergency_prority = this.getPriority("Emergency");
  },
  methods: {
    getRandColor(index) {
      //random background color for avatar
      var arr = ["red", "green", "brown", "yellow"];
      return arr[Math.floor(Math.random() * arr.length)];
    },
    clickedWorkPrority(index) {
      this.selectedIndex = this.work_prority[index].id;
      this.showInfo = true;
    },
    clickedFamilyPrority(index) {
      this.selectedIndex = this.family_prority[index].id;
      this.showInfo = true;
    },
    clickedEmergencyPrority(index) {
      this.selectedIndex = this.emergency_prority[index].id;
      this.showInfo = true;
    },
  },
};
</script>

<style>
#containerx {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.tab-item-cover {
  width: 100%;
  height: calc(100vh - 155px);
  overflow: auto;
}
</style>