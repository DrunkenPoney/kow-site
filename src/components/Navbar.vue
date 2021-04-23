<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">The 4 Horsemen</router-link>
    <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbar"
            aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"/>
    </button>
    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <template v-for="(link, i) in links" :key="i">
          <NavbarDropdown v-if="link.dropdown" :label="link.label" :items="link.items"/>
          <li v-else class="nav-item">
            <a v-if="link.external" class="nav-link" :href="link.href" v-text="link.label" />
            <router-link v-else :to="link.path" active-class="active-dark" class="nav-link">
              {{link.label}}
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { defineComponent } from 'vue'
import NavbarDropdown from '@/components/NavbarDropdown'

export default defineComponent({
  name: "Navbar",
  components: { NavbarDropdown },
  data() {
    return {
      links: [{
        label: 'Home',
        path: '/',
      }, {
        label: 'Guides & Tips',
        dropdown: true,
        items: [{
          label: 'Officers',
          path: '/guides/officers'
        }, {
          label: 'Easy Troop Speed Ups',
          path: '/guides/easy-troops-speed-ups'
        }, {
          label: 'March Speed',
          path: '/guides/march-speed'
        }, {
          label: 'Always Win Poker',
          path: '/guides/win-poker'
        }]
      }, {
        label: 'Interactive Map',
        external: true,
        href: 'https://kow-map.onrender.com/'
      }]
    }
  }
})
</script>

<style lang="scss" scoped>

</style>