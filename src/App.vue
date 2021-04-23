<template>
  <Navbar />
  <div class="px-md-3 mt-3">
    <router-view />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar }
}
</script>

<style lang="scss">
</style>