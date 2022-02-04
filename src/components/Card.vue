<template>
  <div class="mx-auto my-8 card">
    <router-link :to="{ name: 'ShowDetails', params: { id: show.id } }">
      <img
        :src="show.image.medium || show.image.original"
        v-if="show.image"
        class="space"
      />
      <div v-else>
        <h2>Image Not Available</h2>
      </div>
      <div class="mt-1 showname" v-if="show.name">
        <h6 class="showname">
          <b>{{ show.name }}</b>
        </h6>
        <div class="rating">
          <span>
            <b>Rating: </b>
            <b-icon
              icon="star-fill"
              animation="fade"
              class="star-icon mx-1"
            ></b-icon>
          </span>
          <span class="text" v-if="show.rating.average">
            {{ show.rating.average }}
          </span>
          <span v-else class="text"> NA </span>
          <div>
            <b-icon icon="calendar2-event "></b-icon>
            <span class="text show-premiered" v-if="show.premiered">
              {{ show.premiered }}
            </span>
            <span v-else class="text"> NA </span>
          </div>
          <div class="genretitle show-genres">
            <span><b>Genre: </b></span>
            {{ show.genres.join(", ") }}
          </div>
        </div>
        <b-button variant="outline-info" @click="detailOfCard"
          >Show Details</b-button
        >
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["show"],
  methods: {
    // To get ShowDetails when we click the button
    detailOfCard() {
      this.$router.push({
        name: "ShowDetails",
        params: { id: this.show.id },
      });
    },
  },
};
</script>

<style scoped>
.card {
  height: 88%;
  background-color: rgb(3, 3, 3);
}
img:hover {
  opacity: 1;
}
.space {
  width: 100%;
}
.show-genres {
  height: 100px;
}
.text {
  color: aliceblue;
}
.star-icon {
  color: gold;
}
.text-gen {
  color: red;
}
.showname {
  color: red;
}
.rating {
  color: aliceblue;
}
</style>