<template>
<div>
  <ul>
    <li>{{ movie.title }}</li>
    <li>{{ movie.date }}</li>
    <li>{{ movie.language }}</li>
    <li>{{ movie.type }}</li>
    <li>{{ movie.desc }}</li>
    <li>{{ movie.director[0].name }}</li>
    <li>{{ movie.director[0].nationality }}</li>
    <li>{{ movie.director[0].birthday }}</li>
  </ul>

  <p v-if="movie.rating != null">
    <span>Note :</span>
    {{ movie.rating }}
  </p>
  <p v-else>
    <router-link :to="'/movie/' + movie.id + '/rate'">Noter</router-link>
  </p>

  <router-link :to="'/movie/' + movie.id + '/edit'">Modifier</router-link><br/>
  <button type="button" class="btn btn-danger" @click="deleteMovie(movie.id)">Supprimer</button><br/>
  <router-link :to="'/'">Retour à la liste</router-link>
</div>
</template>

<script>
export default {
  name: "movie-item",
  data() {
    return {
      movie: window.shared_data.movies[this.$route.params.id]
    };
  },
   methods: {
    deleteMovie(index) {
      this.$emit("delete-movie", index);
    }
  }
};
</script>