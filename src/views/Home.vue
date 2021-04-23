<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/4HM.png">
  </div>
</template>

<script>
</script>

<style lang="scss">
body {
  background-image: url('../assets/Four-Horsemen-of-the-Apocalypse.jpg');
  background-attachment: fixed;
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 56px);

  img {
    max-width: 100vw;
  }
}
</style>
