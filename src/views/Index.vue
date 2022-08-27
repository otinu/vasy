<template>
  <div id="app">
    <div class="d-none d-md-block">
      <bar-menu></bar-menu>
    </div>
    <div class="d-md-none">
      <humberger-menu></humberger-menu>
    </div>
    <div class="container">
      <div class="row">
        <h3 class="col-4 mb-5 d-none d-lg-block">🍴じゃがいも🍴</h3>
      </div>
      <!--  <div class="col-9"></div> -->
      <div class="row g-2">
        <div class="col-md-4 col-sm-12">
          <div v-ripple="'rgba(34, 139, 34, 0.2)'">
            <img
              src="https://img.cpcdn.com/recipes/7294659/200x296c/27651caeb80a0853714ba26bb9b922db?u=4768165&p=1661432365"
              alt="レシピ画像"
            />
          </div>
          <a
            class="recipe-title"
            id="recipe_title_7294659"
            style="text-decoration: none"
            target="_blank"
            rel="noopener noreferrer"
            href="https://cookpad.com/recipe/7294659"
            >レンチン！たらことじゃが芋のマヨ和え</a
          >
        </div>
        <div class="col-md-4 col-sm-12">
          <div v-ripple="'rgba(34, 139, 34, 0.2)'">
            <img
              src="https://img.cpcdn.com/recipes/7294445/200x296c/45ec09f7009fe4b4471862902b09d0d4?u=34583048&p=1661417260"
              alt="レシピ画像"
            />
          </div>
          <a
            class="recipe-title"
            id="recipe_title_7294445"
            style="text-decoration: none"
            target="_blank"
            rel="noopener noreferrer"
            href="https://cookpad.com/recipe/7294445"
            >ジャガイモとひき肉のピリ辛炒め</a
          >
        </div>
        <div class="col-md-4 col-sm-12">
          <div v-ripple="'rgba(34, 139, 34, 0.2)'">
            <img
              src="https://img.cpcdn.com/recipes/7293164/200x296c/fca639baecd4da62e65ddecd2f521b17?u=4111933&p=1661308816"
              alt="レシピ画像"
            />
          </div>
          <a
            class="recipe-title"
            id="recipe_title_7293164"
            style="text-decoration: none"
            target="_blank"
            rel="noopener noreferrer"
            href="https://cookpad.com/recipe/7293164"
            >サクサクっ軽っ☆ほくほく！ポテトコロッケ</a
          >
        </div>
        <div class="col-md-4 col-sm-12 mt-5">
          <div v-ripple="'rgba(34, 139, 34, 0.2)'">
            <img
              src="https://img.cpcdn.com/recipes/7294659/200x296c/27651caeb80a0853714ba26bb9b922db?u=4768165&p=1661432365"
              alt="レシピ画像"
            />
          </div>
          <a
            style="text-decoration: none"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.△△△.jp/"
            >アンカーテキスト</a
          >
        </div>
        <div class="col-md-4 col-sm-12 mt-5">
          <div v-ripple="'rgba(34, 139, 34, 0.2)'">
            <img
              src="https://img.cpcdn.com/recipes/7294659/200x296c/27651caeb80a0853714ba26bb9b922db?u=4768165&p=1661432365"
              alt="レシピ画像"
            />
          </div>
          <a
            style="text-decoration: none"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.△△△.jp/"
            >アンカーテキスト</a
          >
        </div>
        <div class="col-md-4 col-sm-12 mt-5">
          <div v-ripple="'rgba(34, 139, 34, 0.2)'">
            <img
              src="https://img.cpcdn.com/recipes/7294659/200x296c/27651caeb80a0853714ba26bb9b922db?u=4768165&p=1661432365"
              alt="レシピ画像"
            />
          </div>
          <a
            style="text-decoration: none"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.△△△.jp/"
            >アンカーテキスト</a
          >
        </div>
        <div class="col-md-4 col-sm-12 mt-5">
          <div v-ripple="'rgba(34, 139, 34, 0.2)'">
            <img
              src="https://img.cpcdn.com/recipes/7294659/200x296c/27651caeb80a0853714ba26bb9b922db?u=4768165&p=1661432365"
              alt="レシピ画像"
            />
          </div>
          <a
            style="text-decoration: none"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.△△△.jp/"
            >アンカーテキスト</a
          >
        </div>
        <div class="col-md-4 col-sm-12 mt-5">
          <div v-ripple="'rgba(34, 139, 34, 0.2)'">
            <img
              src="https://img.cpcdn.com/recipes/7294659/200x296c/27651caeb80a0853714ba26bb9b922db?u=4768165&p=1661432365"
              alt="レシピ画像"
            />
          </div>
          <a
            style="text-decoration: none"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.△△△.jp/"
            >アンカーテキスト</a
          >
        </div>
        <div class="col-md-4 col-sm-12 mt-5 mt-5">
          <div v-ripple="'rgba(34, 139, 34, 0.2)'">
            <img
              src="https://img.cpcdn.com/recipes/7294659/200x296c/27651caeb80a0853714ba26bb9b922db?u=4768165&p=1661432365"
              alt="レシピ画像"
            />
          </div>
          <a
            style="text-decoration: none"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.△△△.jp/"
            >アンカーテキスト</a
          >
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "IndexPage",
  data: () => ({
    open: false,
  }),
};
</script>

