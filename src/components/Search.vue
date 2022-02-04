<template>
  <div>
    <b-row class="ml-3">
      <b-button block variant="success" class="mt-4 md-4" @click="back()"
        >Back to Home
        <icon icon="arrow-left"></icon>
      </b-button>
    </b-row>
    <template v-if="shows.length">
      <div>
        <h2 class="text-secondary">
          <strong
            >Search result of show : {{ this.$route.params.query }}
          </strong>
        </h2>
        <b-row>
          <b-col lg="3" md="4" sm="6" v-for="show in shows" :key="show.id">
            <card :show="show"> </card>
          </b-col>
        </b-row>
      </div>
    </template>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import { searchShows } from "../service/api.js";
export default {
  name: "Search",
  components: {
    Card,
  },
  data() {
    return {
      shows: [],
    };
  },
  created() {
    this.getSearchedShows();
  },
  methods: {
    async getSearchedShows() {
      await searchShows(this.$route.params.query).then((res) => {
        this.shows = res.data.map((shows) => shows.show);
      });
      if (this.shows.length == 0) {
        this.$router.push({
          name: "page-not-found",
        });
      }
    },
    back() {
      this.$router.push({
        name: "Allshow",
      });
    },
  },
  watch: {
    $route() {
      this.getSearchedShows();
    },
  },
};
</script>