<template>
  <div class="container">
    123{{ $store.state.count }}

    <button @click="add">添加</button>
    <button @click="dec">减少</button>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import axios from "axios";
export default {
  components: {
    Logo
  },
  created() {
    axios
      .get("/api/lists")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    dec() {
      this.$store.commit("decrement");
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
