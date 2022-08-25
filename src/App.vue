<!-- このファイルが全ファイル共通になるvueファイル -->

<template>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<header>
  <!-- <HumbergerMenu/> -->
  <h2>Vasy</h2>
</header>
  <router-link to="/">Top</router-link><br />
  <router-link to="/vegetable">Vegetable</router-link><br />
  <router-link to="/recipe">Recipe</router-link><br />
  <router-link to="/carousel">Carousel</router-link><br />
  <router-link to="/loading">TestLoading</router-link><br />
  <router-view />
</template>

<!--
<script>
import HumbergerMenu from '@/components/HumbergerMenu.vue'

export default {
  name: 'HumbergerMenu',
  components: {
    HumbergerMenu
  },
  data() {
    return {
      open: false,
    };
  }
}
</script>
-->



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
