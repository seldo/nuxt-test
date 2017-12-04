<template>
  <div>
    <div id="spacer"></div>
    <div class="navigation-flex">
      <ul class="navigation">
        <li v-if="prev"><a :href="'/' + prev.slug" class="link-back">{{prev.name}}</a></li>
        <li>{{current.name}}</li>
        <li v-if="next"><a :href="'/' + next.slug" class="link-forward">{{next.name}}</a></li>
        <li v-else></li>
      </ul>
    </div>
  </div>
</template>

<style>
#spacer {
  width: 100%;
  height: 1.5em;
}
.navigation-flex {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
}
.navigation {
  width: 90%;
}
.navigation {
  max-width: 30em;
  padding: 0px;
  display: flex;
  justify-content: space-between;
}
.navigation li {
  list-style-type: none;
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
