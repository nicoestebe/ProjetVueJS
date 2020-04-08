<template>
  <form action method="post">
    <div>
      <label for="name">Nom :</label>
      <input type="text" name="name" v-model="movie.title" />
    </div>
    <div>
      <label for="mail">Date :</label>
      <input type="text" name="date" v-model="movie.date" />
    </div>
    <div>
      <label for="msg">Réalisateur :</label>
      <input type="text" name="rea" v-model="movie.rea" />
    </div>
    <div>
      <label for="msg">Description :</label>
      <input type="text" name="desc" v-model="movie.desc" />
    </div>

     <router-link :to="'/movie/' + movie.id">Retour</router-link>
  </form>
</template>

<script>
export default {
  name: "edit",
  methods: {
    saveMovie(id) {
      this.$emit("delete-movie", id);
    }
  },
  data() {
      return {
          movie: window.shared_data.movies[this.$route.params.id]
      }
  }
};
</script>