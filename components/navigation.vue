<template>
  <ul class="navigation">
    <li v-if="prev"><a :href="'/' + prev.slug" class="link-back">{{prev.name}}</a></li>
    <li>{{current.name}}</li>
    <li v-if="next"><a :href="'/' + prev.slug" class="link-forward">{{next.name}}</a></li>
  </ul>
</template>

<style>
.current {
  color: red
}
.navigation {
  margin-bottom: 1em;
}
</style>

<script>
import topics from './topics'

export default {
  data () {
    let topic = this.$route.path.split('/')[1]
    let topicIndex = topics.findIndex((element) => {
      return element.slug === topic
    })
    let current = topics[topicIndex]
    let prev = (topicIndex - 1 >= 0) ? topics[topicIndex - 1] : null
    let next = (topicIndex + 1 < topics.length) ? topics[topicIndex + 1] : null
    return {
      current,
      prev,
      next
    }
  }
}
</script>
