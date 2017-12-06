<template>
  <div class="flex-container"><div class="container">
    <Navigation>
      <nuxt/>
    </Navigation>
  </div></div>
</template>

<script>
import Navigation from '~/components/navigation.vue'

export default {
  components: {
    Navigation
  },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/index.css' }
      ]
    }
  }
}
</script>
