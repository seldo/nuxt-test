<template>
  <div class="frontpage">
    <div>
      <h1>Stuff Everybody Knows<br> About Web Development</h1>
      <h2>(except you)</h2>
      <p>The companion website to the Stuff Everybody Knows talk by <a href="https://twitter.com/seldo">@seldo</a>.</p>
      <Navigation class="huh"/>
    </div>
  </div>
</template>

<style>
.frontpage {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.huh {
  border: 1px solid red;
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
