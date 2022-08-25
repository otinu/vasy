<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="msgプロパティを表示しています"/>
  </div>

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
</template>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data: () => ({
        open: false,
    }),
  components: {
    HelloWorld,
  //  LoadingTop
  }
}
</script>

<style scoped>
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

