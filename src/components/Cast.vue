<template>
  <div class="mt-8 mr-4">
    <b-card class="color">
      <img class="card-border mr-2" :src="castImage" v-if="castImage" />
      <div v-else class="card">
        <h5>Cast Image not available</h5>
      </div>
      <div class="mt-2">
        <span class="spantext">In </span>
        <label class="name textname">
          {{ cast.person.name }}
        </label>
        <div>
          <label class="text-danger">As</label>
        </div>
        <label class="charname">
          {{ cast.character.name }}
        </label>
      </div>
    </b-card>
  </div>
</template>

<script>
import { BCard } from "bootstrap-vue";
export default {
  name: "Cast",
  props: ["cast"],
  components: {
    "b-card": BCard,
  },
  computed: {
    castImage() {
      if (this.cast.character.image) {
        return (
          this.cast.character.image.medium || this.cast.character.image.original
        );
      }
      if (this.cast.person.image) {
        return this.cast.person.image.medium || this.cast.person.image.original;
      }
      return null;
    },
  },
};
</script>
<style scoped>
.color {
  background-color: rgb(204, 202, 202);
  margin-bottom: 50px;
}

.textname {
  color: rgb(12, 153, 59);
}
.spantext {
  color: rgb(255, 0, 0);
  justify-content: center;
}
</style>