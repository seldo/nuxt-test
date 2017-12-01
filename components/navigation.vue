<template>
  <ul class="navigation">
    <li v-for="section in sections">
      <a
        :href="section.slug"
        :class="[$route.path == section.slug ? 'current' : 'woo']"
      >{{ section.name }}</a>
    </li>
  </ul>
</template>

<style>
.current {
  color: red
}
</style>

<script>
export default {
  data () {
    return {
      bob: 'yes',
      sections: [
        { name: 'Home', slug: '/' },
        { name: 'Intro', slug: '/1-intro' },
        { name: 'Dunning-Kruger', slug: '/2-dunning-kruger' }
      ]
    }
  }
}
</script>
