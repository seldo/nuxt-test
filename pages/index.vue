<template>
  <div class="frontpage-flex">
    <div class="frontpage">
      <h1>Stuff Everybody Knows About Web Development</h1>
      <h2>(except you)</h2>
      <h3>The companion website to the Stuff Everybody Knows talk by <a href="https://twitter.com/seldo">@seldo</a>.</h3>
      <div class="instructions">
        If you don't know where to start, head on over to the <a href="/1-intro">introduction</a> and all will be explained. Otherwise, pick a section to visit.
      </div>
      <Navigation class="frontnav"/>
    </div>
  </div>
</template>

<style>
.frontpage-flex {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.frontpage {
  max-width: 40em;
}
.frontpage h1 {
  font-size: 400%;
}
.frontpage h2 {
  font-size: 400%;
}
.frontnav {
  margin: 1em;
  padding: 0.5em;
  background-color: #efefef;
}
.instructions {
  margin-top: 4em;
}
</style>

<script>
import Navigation from '~/components/navigation.vue'

export default {
  layout: 'welcome',
  components: {
    Navigation
  }
}
</script>
