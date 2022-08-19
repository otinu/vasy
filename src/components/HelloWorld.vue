<template>
  <div class="hello"></div>

  <user-information
    name="taro"
    age="18"
    gender="男"
    phoneNumber="090xxxxxx01"
  ></user-information>
  <user-information
    name="jiro"
    age="15"
    gender="男"
    phoneNumber="090xxxxxx02"
  ></user-information>
  <user-information
    name="hanako"
    age="18"
    gender="女"
    phoneNumber="080xxxxxx01"
  ></user-information>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
