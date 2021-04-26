<template>
  <div class="container">
    <h4 class="text-decoration-underline text-center">Win Poker Game Every Time</h4>
    <p>As soon as you hit Start put your finger on the joker and keep your finger on the screen.</p>
    <p>As the cards shuffle you will notice your card remains slightly darker than the others.</p>
    <p>Once the cards stop, slide your finger over to the dark card and release.</p>

    <div class="ratio ratio-9x16 video-wrapper">
      <iframe src="https://youtube.com/embed/HRNmMNo68uU"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "WinPoker"
}
</script>

<style lang="scss" scoped>
.ratio-9x16 {
  --bs-aspect-ratio: 16 / 9 * 100%;
  //&:before {
    //padding-top: 9 / 16 * 100%;
  //}
}

.video-wrapper {
  height: 80vh;
}
</style>