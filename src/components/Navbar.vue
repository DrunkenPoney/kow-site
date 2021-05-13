<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/4HMLogo.png" alt="Logo" :height="24" class="d-inline-block align-text-top" />
      </router-link>

      <div class="nav-item dropdown flag-wrapper">
        <a class="nav-link dropdown-toggle" href="javascript:void 0"
           id="navbarLangButton" role="button"
           data-bs-toggle="dropdown" aria-expanded="false">
          <span :class="langClasses" />
        </a>
        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark bg-dark" aria-labelledby="navbarLangButton">
          <li v-for="(lang, i) in languages" :key="i"
              :class="`dropdown-item  ${lang.active ? 'disabled active-dark' : 'text-light'}`">
            <router-link :to="{ name: $route.name, params: { ...$route.params, lang: lang.code } }"
                         :class="`btn btn-sm ${lang.active ? 'disabled' : 'text-light'}`">
              <span :class="`flag-icon flag-icon-${lang.flag}`" />
              <span class="ms-2" v-text="lang.name" />
            </router-link>
          </li>
        </ul>
      </div>

      <button class="navbar-toggler" type="button"
              data-bs-toggle="collapse" data-bs-target="#navbar"
              aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <template v-for="(link, i) in links" :key="i">
            <NavbarDropdown v-if="link.dropdown" :label="link.label" :items="link.items" />

            <li v-else class="nav-item">
              <a v-if="link.external" class="nav-link" :href="link.href"
                 target="_blank" v-text="$t(link.label)" />

              <router-link v-else :to="link.to()" active-class="active-dark" class="nav-link">
                {{ $t(link.label) }}
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
  emits: [ 'nav-collapse' ],
  data() {
    return {
      links: [ {
        label: 'navbar.home',
        to: this.routeTo('home'),
      }, {
        label: 'navbar.guides',
        dropdown: true,
        items: [ {
          label: 'officers',
          to: this.routeTo('guides_officers')
        }, {
          label: 'easy-troop-speed-ups',
          to: this.routeTo('guides_easy-troop-speed-ups')
        }, {
          label: 'march-speed',
          to: this.routeTo('guides_march-speed')
        }, {
          label: 'always-win-poker',
          to: this.routeTo('guides_win-poker')
        }, {
          label: 'hq-requirements',
          to: this.routeTo('guides_hq-requirements')
        } ]
      }, {
        label: 'navbar.interactive-map',
        external: true,
        href: 'https://kow-map.onrender.com/'
      } ]
    }
  },

  computed: {
    langClasses() {
      return [
        'flag-icon',
        `flag-icon-${this.$languages[this.$i18n.locale || 'en']?.flag}`
      ]
    },

    languages() {
      return Object.entries(this.$languages).map(([code, lang]) => {
        return {
          ...lang,
          code,
          active: this.$i18n.locale === code
        }
      })
    }
  },

  methods: {
    routeTo(name) { return () => ({ name, params: this.$route.params }) }
  }
})
</script>

<style lang="scss" scoped>
nav {
  z-index: 9000;

  .flag-wrapper {
    flex-grow: 1;
    text-align: right;

    .dropdown-toggle {
      &:hover {
        font-size: 1em;
      }

      &::after {
        display: none;
      }
    }
  }
}

@media (min-width: 992px) {
  .flag-wrapper {
    position: absolute;
    right: 0;
  }
}
</style>