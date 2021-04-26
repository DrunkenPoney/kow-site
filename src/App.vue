<template>
  <Navbar ref="navbar" />
  <div ref="view" id="routerViewWrapper" class="container py-3" :data-view="$route.name">
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar },
  data() {
    return {
      baseNavHeight: 0
    }
  },
  mounted() {
    this.baseNavHeight              = this.$refs.navbar.$el.clientHeight;
    new ResizeObserver(this.onNavResize).observe(this.$refs.navbar.$el)
  },

  updated() { this.onNavResize() },

  methods: {
    onNavResize() {
      const style = this.$refs.view.style
      if (this.$route.name === 'home') {
        style.maxHeight = style.height = `calc(100vh - ${this.baseNavHeight}px)`;
        style.marginTop = `-${this.$refs.navbar.$el.offsetHeight - this.baseNavHeight}px`
      } else {
        style.removeProperty('margin-top')
        style.removeProperty('height')
        style.removeProperty('max-height')
      }
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main';

body {
  background-image: url('./assets/Four-Horsemen-of-the-Apocalypse.jpg');
  background-attachment: fixed;
  background-origin: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#routerViewWrapper:not([data-view="home"]) {
  $c: fade-out(darken($gray-900, 0.2), 0.2);
  background-color: $c;
  box-shadow: 0 0 100px 100px $c;
}
</style>