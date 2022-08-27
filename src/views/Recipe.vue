<template>
  <div class="d-none d-md-block">
      <bar-menu></bar-menu>
    </div>
    <div class="d-md-none">
      <humberger-menu></humberger-menu>
    </div>

    <button v-ripple="'rgba(255, 255, 255, 0.35)'"  class="btn btn-success">リップルボタン</button>
</template>

<script>
export default {
  name: "RecipePage",
};
</script>