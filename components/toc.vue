<template>
  <div>
    <ul>
      <li v-for="topic in topics"><a :href="'/' + topic.slug">{{topic.name}}</a></li>
    </ul>
  </div>
</template>

<script>
import topics from './topics'

export default {
  data () {
    return {
      topics
    }
  }
}
</script>

<style>
</style>
