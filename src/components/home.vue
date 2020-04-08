  <template>
  <div>
    <div id="searchBar">
      <h4>Rechercher :</h4>
      <input type="text" name value placeholder="Titre" v-model="searchTitle" />
      <input type="text" name value placeholder="Année" v-model="searchYear" />
      <input type="text" name value placeholder="Réalisateur" v-model="searchDirector" />
    </div>
    <div id="app">
      <movies
        v-for="movie of filteredList"
        v-bind:key="movie.title"
        v-bind:movie="movie"
        v-bind:index="movie.id"
        v-on:delete-movie="deleteMovie(index)"
      ></movies>
    </div>
  </div>
</template>

<script>
import item from "./movie-item.vue";

export default {
  name: "home",
  components: {
    movies:item
  },
  data: function() {
    return {
      movies: window.shared_data.movies,
      searchTitle: "",
      searchYear: "",
      searchDirector: ""
    };
  },
  methods: {
    deleteMovie(index) {
      this.$delete(this.movies, index);
      //this.movies.splice(index, 1);
    }
  },
  computed: {
    filteredList() {
      return this.movies.filter(movie => {
        return (
          movie.title.toLowerCase().includes(this.searchTitle.toLowerCase()) &&
          movie.director[0].name.toLowerCase().includes(this.searchDirector.toLowerCase()) &&
          movie.date.toString().startsWith(this.searchYear.toString())
        );
      });
    }
  }
};
</script>