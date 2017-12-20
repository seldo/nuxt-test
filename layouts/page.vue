<template>
  <div class="flex-container"><div class="container">
    <Navigation>
      <nuxt/>
    </Navigation>
  </div></div>
</template>

<script>
import Navigation from '~/components/navigation.vue'
import nav from '~/components/nav'

export default {
  components: {
    Navigation
  },
  head () {
    let navData = nav(this)
    return {
      link: [
        { rel: 'stylesheet', href: '/css/index.css' }
      ],
      title: navData.currentSection.name + ' | Stuff Everybody Knows'
    }
  }
}
</script>
