<template>
  <div class="show-detail">
    <b-row>
      <div class="ml-3 backButton">
        <div>
          <b-button class="mt-3 mb-2" variant="danger" @click="back()">
            Back to Home
          </b-button>
        </div>
      </div>
    </b-row>

    <template v-if="show">
      <b-container fluid class="detailsshow">
        <b-row>
          <b-col>
            <img
              Show
              Image
              :src="show.image.medium || show.image.original"
              v-if="show.image"
            />
            <div v-else>
              <h3>Image is not available</h3>
            </div>
          </b-col>
          <b-col lg="8">
            <div class="text-warning">
              <h2><b>Show Details</b></h2>
            </div>
            <h3>
              <i>{{ show.name }}</i>
            </h3>
            <br />
            <div class="container-fluid">
              <label>
                <b>Rating: </b>
                <b-icon icon="star-fill" class="star-icon"></b-icon>
              </label>
              <label class="ml-1" v-if="show.rating">
                {{ show.rating.average }}
              </label>
              <label v-else class="ml-1">NA</label>
              <div>
                <label>
                  <b>Premiered on:</b>
                </label>
                <label v-if="show.premiered">
                  {{ show.premiered }}
                </label>
                <label v-else class="ml-1">NA</label>
              </div>
              <label>
                <b>Genre :</b>
              </label>
              <label class="show-genres ml-1" v-if="this.genre.length > 0">
                {{ show.genres.join() }}
              </label>
              <label v-else class="ml-1">NA</label>
              <div>
                <label v-if="show.language">
                  <b>Language :</b>{{ show.language }}</label
                >
              </div>
              <div v-if="show.schedule">
                <b>Schedule :</b>
                <label
                  v-for="tvSchedule in show.schedule.days"
                  :key="tvSchedule.index"
                >
                  {{ tvSchedule }}
                  <label v-if="show.schedule.time">
                    at {{ show.schedule.time }}</label
                  >
                </label>
              </div>
              <div>
                <label class="black--text" v-if="show.status">
                  <b>Status :</b>
                  {{ show.status }}
                </label>
              </div>
              <div>
                <label class="black--text" v-if="show.officialSite">
                  <b>Official Site :</b>
                  <a :href="show.officialSite">{{ show.officialSite }}</a>
                </label>
              </div>
            </div>
            <div class="mt-5 summary">
              <h2>Summary</h2>
              <p v-if="show.summary" v-html="show.summary"></p>
              <p v-else>Unavailabel</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <div>
        <h2>Seasons</h2>
        <template v-if="seasons.length > 0">
          <b-row>
            <b-col
              lg="3"
              md="4"
              sm="6"
              v-for="season in seasons"
              :key="season.index"
            >
              <season :season="season"> </season>
            </b-col>
          </b-row>
        </template>
        <template v-else>
          <div>
            <h3>There are no seasons availabel</h3>
          </div>
        </template>
      </div>
      <div>
        <h2>Cast</h2>
        <template v-if="casts.length > 0">
          <b-row>
            <b-col lg="3" md="4" sm="6" v-for="cast in casts" :key="cast.index">
              <cast :cast="cast"> </cast>
            </b-col>
          </b-row>
        </template>
        <template v-else>
          <div>
            <h2><em>cast details not availabel</em></h2>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import Season from "./Season.vue";
import Cast from "./Cast.vue";
import { getShowDetailsById } from "../service/api.js";
import { getShowSeasonById } from "../service/api.js";
import { getShowCastsById } from "../service/api.js";


export default {
  name: "ShowDetails",
  components: {
    Season,
    Cast,
  },
  data() {
    return {
      show: {},
      casts: [],
      seasons: [],
      rating: "",
      premiered: "",
      genre: "",
      dob: "",
    };
  },
  created() {
    this.showDetails(this.$route.params.id);
  },
  methods: {
    async showDetails(id) {
      await getShowDetailsById(id).then((response) => {
        this.show = response.data;
      });
      await getShowSeasonById(id).then((response) => {
        this.seasons = response.data;
      });
      await getShowCastsById(id).then((response) => {
        this.casts = response.data;
      });
      this.genre = this.show.genres;
    },
    back() {
      this.$router.push({
        name: "Allshow",
      });
    },
  },
};
</script>

<style scoped>
.align {
  text-align: left;
  margin-left: 30%;
}
h2 {
  color: rgb(0, 0, 0);
}
h3 {
  color: rgb(116, 8, 8);
}
.star-icon {
  color: gold;
}
* {
  padding: 0;
  margin: 0;
  /* background-color: rgb(255, 232, 232); */
}
arrow-left {
  color: black;
}
.mycontainer {
  background-color: ivory;
}
</style>
