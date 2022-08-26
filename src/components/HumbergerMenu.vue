<template>

    <button type="button" class="menu-btn" v-on:click="open=!open">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </button>
    <div class="menu" v-bind:class="{'is-active' : open }">
      <router-link to="/" class="menu__item">TOP</router-link>
      <router-link to="/vegetable" class="menu__item">Vegetable</router-link>
      <router-link to="/recipe" class="menu__item">Recipe</router-link>
      <router-link to="/carousel">Carousel</router-link>
      <router-link to="/loading" class="menu__item">TestLoading</router-link>
    </div>

</template>

<script>

export default {
  name: 'HumbergerMenu',
  data() {
    return {
      open: false,
    };
  }
}
</script>

<style scope>
.menu-btn{
    position: fixed;
    top: 4vh;
    left: 20px;
    z-index: 3;
    width: 3rem;
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: green;
    color: #fff;
  }
  
  /* メニュー本体 */

  .menu{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #555;
  }
  .menu__item{
    width: 100%;
    height: auto;
    padding: .5em 1em;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
  }
  
  /* (アニメーション前)メニュー */
  .menu{
    transform: translateX(-100vw);
    transition: all .5s linear;
  }
  /* アニメーション後)メニュー */
  .menu.is-active{
    transform: translateX(0);
  }

</style>
