<template>
  <ul>
    <li>
      {{ movie.title }} ({{ movie.date }})
      <router-link :to="'/movie/' + movie.id">Details</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "movie-item",
  props: ["movie", "index"]
};
</script>