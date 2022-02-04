<template>
  <div>
    <nav class="navbar navbar-light bg-dark">
      <a class="navbar-brand" href="#">
        <h1><b>My Tv Shows</b></h1></a
      >
      <form class="form-inline">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search your shows here"
          aria-label="Search"
          v-model="searchData"
        />
        <b-button
          class="btn btn-outline-success my-2 my-sm-0"
          variant="outline-success"
          :pressed="false"
          type="submit"
          @click="search()"
          >Search</b-button
        >
      </form>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchData: "",
    };
  },
  methods: {
    search() {
      this.$router.push({
        name: "Search",
        params: {
          query: this.searchData,
        },
      });
      this.searchData = "";
    },
  },
};
</script>

<style>
h1 {
  color: aquamarine;
}
</style>
