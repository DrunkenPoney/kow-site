<template>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#"
       :id="`navbarDropdown${id}`" role="button"
       data-bs-toggle="dropdown"
       aria-expanded="false"
       v-text="$t(label)"/>
    <ul class="dropdown-menu dropdown-menu-dark"
        :aria-labelledby="`navbarDropdown${id}`">
      <template v-for="(item, i) in items" :key="i">
        <NavbarDropdown v-if="item.dropdown" :label="item.label" :items="item.items" />
        <li v-if="item.divider" class="dropdown-divider" />
        <li v-else>
          <a v-if="item.external" class="dropdown-item" :href="item.href"
             target="_blank" v-text="t(item.label)" />

          <router-link v-else :to="item.to()" active-class="active-dark" class="dropdown-item">
            {{ t(item.label) }}
          </router-link>
        </li>
      </template>
    </ul>
  </li>
</template>

<script>
import { defineComponent } from 'vue'
import { uniqueId } from '@/modules/generate'

export default defineComponent({
  name: "NavbarDropdown",
  props: {
    label: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      id: uniqueId.alphanum()
    }
  },

  methods: {
    t(key) { return this.$t(`${this.label}_${key}`) }
  }
})
</script>

<style lang="scss" scoped>

</style>