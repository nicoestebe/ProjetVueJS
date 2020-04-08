<template>
  <div>
    <div class="rating">
      <span @click="onClick" id="1">☆</span>
      <span @click="onClick" id="2">☆</span>
      <span @click="onClick" id="3">☆</span>
      <span @click="onClick" id="4">☆</span>
      <span @click="onClick" id="5">☆</span>
    </div>

    <router-link v-if="rate != null" :to="{ name: 'detail', params: { id: movie.id }}">
      <button type="button" class="button" id="buttonValidate" v-on:click="sendRate">Noter</button>
    </router-link>

    <router-link :to="{ name: 'detail', params: { id: movie.id }}">
      <button type="button" class="button">Retour</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "rate",
  props: {
    rate: Number
  },
  methods: {
    onClick(event) {
      this.resetStyle();
      for (let index = 1; index <= event.target.id; index++) {
        document.getElementById(index).style.color = "#ffd700";
      }
      this.rate = event.target.id;
    },
    resetStyle() {
      var spans = document.getElementsByTagName("span");
      spans.forEach(span => {
        span.style.color = "black";
      });
    },
    sendRate() {
      window.shared_data.movies[this.$route.params.id].rating = this.rate;
    }
  },
  data: function() {
    return {
      movie: window.shared_data.movies[this.$route.params.id]
    };
  }
};
</script>