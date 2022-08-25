<template>
  <div id="app">
    <button type="button" class="menu-btn" v-on:click="open=!open">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </button>

    <div class="menu" v-bind:class="{'is-active' : open }">
      <div class="menu__item">TOP</div>
      <div class="menu__item">ABOUT</div>
      <div class="menu__item">BLOG</div>
      <div class="menu__item">CONTACT</div>
    </div>
  </div>

<!--
  <script>
    const app = Vue.createApp({
      data: () => ({
        open: false,
      }),
    });
    app.mount("#app");
  </script>
-->
</template>