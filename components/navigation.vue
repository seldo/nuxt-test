<template>
  <div>
    <div id="spacer">
      <div class="navigation-flex">
        <ul id="top-nav" class="navigation">
          <li v-if="prev"><a :href="'/' + prev.slug" class="link-back">{{prev.name}}</a></li>
          <li>{{current.name}}</li>
          <li v-if="next"><a :href="'/' + next.slug" class="link-forward">{{next.name}}</a></li>
          <li v-else></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
#spacer {
  width: 100%;
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
  font-size: 90%;
  list-style-type: none;
  margin-left: 0.3em;
  margin-right: 0.3em;
}
@media (min-width: 600px) {
  .navigation li {
    font-size: 100%;
  }
}
</style>

<script>
import topics from './topics'

export default {
  mounted () {
    // we need a gap at the top of the page equal to the height of the floating nav
    // it is pretty embarrassing that there's still no way to do this in CSS
    let topHeight = document.getElementById('top-nav').clientHeight
    let spacer = document.getElementById('spacer')
    let spacerHeight = (topHeight) + 'px'
    spacer.style.height = spacerHeight
  },
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
