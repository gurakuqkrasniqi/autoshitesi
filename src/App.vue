<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  overflow-x: hidden;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
