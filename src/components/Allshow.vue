<template>
  <b-container>
    <div>
      <div v-if="popularShows.length > 0">
        <div class="color">
          <h3><b>Popular Shows to Watch</b></h3>
        </div>
        <div>
          <b-row>
            <b-col
              lg="3"
              md="6"
              sm="8"
              v-for="popular in popularShows"
              :key="popular.index"
              class="align"
            >
              <card :show="popular"></card>
            </b-col>
          </b-row>
        </div>
      </div>
      <div v-else>
        <div class="d-flex justify-content-center mb-3"></div>
      </div>
      <div v-if="genres.length > 0">
        <div v-for="genre in genres" :key="genre.index">
          <div class="color">
            <h4>{{ genre.name }}</h4>
          </div>
          <div>
            <b-row>
              <b-col
                lg="2"
                md="4"
                sm="6"
                v-for="show in genre.shows"
                :key="show.index"
                class="align"
              >
                <card :show="show"></card>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import Card from "../components/Card.vue";
import { getAllShows } from "../service/api.js";
export default {
  name: "Allshow",
  data() {
    return {
      shows: [],
      popularShows: [],
    };
  },
  components: {
    Card,
  },
  mounted() {
    getAllShows().then((response) => {
      this.shows = response.data;
      this.popularShows = this.ratedShow(this.shows);
    });
  },
  computed: {
    genresTitles() {
      const genre = Array.from(
        new Set(this.shows.flatMap((show) => show.genres))
      );
      return genre.sort();
    },
    genres() {
      return this.genresTitles.map((genre) => {
        return {
          name: genre,
          shows: this.ratedShow(
            this.shows.filter((show) => show.genres.includes(genre))
          ),
        };
      });
    },
  },
  methods: {
    ratedShow(shows) {
      return shows
        .filter((show) => show.rating.average)
        .sort((previousValue, nextValue) =>
          previousValue.rating.average < nextValue.rating.average ? 1 : -1
        )
        .slice(0, 12);
    },
  },
};
</script>

<style scoped>
.align {
  margin-bottom: 8px;
  margin-top: 9px;
}
.color {
  color: red;
}
</style>