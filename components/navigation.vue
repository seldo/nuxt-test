<template>
  <div>
    <div id="spacer">
      <div class="navigation-flex">
        <div id="navigation-stack">
          <ul id="top-nav" class="navigation">
            <li v-if="prevTopic" class="topic-nav">
              <a :href="'/' + prevTopic.slug" class="arrow"><span>⬅️</span></a>
              <a :href="'/' + prevTopic.slug" class="text">{{prevTopic.name}}</a>
            </li>
            <li v-if="!currentSection">{{currentTopic.name}}</li>
            <li v-else></li>
            <li v-if="nextTopic" class="topic-nav">
              <a :href="'/' + nextTopic.slug" class="text">{{nextTopic.name}}</a>
              <a :href="'/' + nextTopic.slug" class="arrow"><span>➡️</span></a>
            </li>
            <li v-else></li>
          </ul>
          <ul v-if="currentSection" id="mid-nav" class="navigation">
            <li v-if="prevSection"><a :href="prevSection.path" :title="prevSection.name">⬆️</a></li>
            <li v-else></li>
            <li>{{currentTopic.name}}</li>
            <li v-if="nextSection"><a :href="'/' + currentTopic.slug + '/' + nextSection.slug" :title="nextSection.name">⬇️</a></li>
            <li v-else></li>
          </ul>
          <div v-if="currentSection && (currentSection != currentTopic)" class="navigation" id="section-title">
            {{currentSection.name}}
          </div>
        </div>
      </div>
    </div>
    <nuxt/>
    <div id="bottom-nav" class="navigation">
      <p v-if="nextSection">Next section: <a :href="'/' + currentTopic.slug + '/' + nextSection.slug" class="link-down">{{ nextSection.name }}</a></p>
      <p v-if="!nextSection && nextTopic">Next topic: <a :href="'/' + nextTopic.slug" class="link-forward">{{nextTopic.name}}</a></p>
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
#navigation-stack {
  flex-basis: 30em;
  padding: 0px;
  display: flex;
  flex-direction: column;
}
.navigation {
  display: flex;
  justify-content: space-between;
}
ul.navigation {
  margin: 0px;
  padding: 2px;
}
.navigation li {
  font-size: 90%;
  list-style-type: none;
  margin-left: 0.3em;
  margin-right: 0.3em;
}
.navigation li.topic-nav {
  display: flex;
}
.navigation li.topic-nav .arrow {
  display: inline-block;
}
.navigation li.topic-nav .arrow span {
  position: relative;
  top: calc(50% - 0.5em);
}
.navigation li.topic-nav .text {
  padding-left: 0.3em;
  padding-right: 0.3em;
}
#top-nav {
  background-color: #f5f5f5;
}
#mid-nav {
  background-color: #eee;
}
#section-title {
  display: block;
  background-color: #dcdcdc;
  text-align: center;
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
    let topHeight = document.getElementById('navigation-stack').clientHeight
    let spacer = document.getElementById('spacer')
    let spacerHeight = (topHeight) + 'px'
    spacer.style.height = spacerHeight
  },
  data () {
    let path = this.$route.path.split('/')
    let topic = path[1]
    let topicIndex = topics.findIndex((element) => {
      return element.slug === topic
    })
    let currentTopic = topics[topicIndex]
    let prevTopic = (topicIndex - 1 >= 0) ? topics[topicIndex - 1] : null
    let nextTopic = (topicIndex + 1 < topics.length) ? topics[topicIndex + 1] : null
    let currentSection = null
    let nextSection = null
    let prevSection = null
    let section = path[2] ? path[2] : null
    // we only do section-level nav if there are sections
    let sections = currentTopic.children
    if (sections) {
      let sectionIndex = sections.findIndex((element) => {
        return element.slug === section
      })
      // if we can't find the section in the children, assume we're in the first section
      if (sectionIndex < 0) {
        currentSection = currentTopic
        nextSection = sections[0]
      } else if (sectionIndex === 0) {
        currentSection = sections[sectionIndex]
        prevSection = currentTopic
        prevSection.path = '/' + currentTopic.slug
        nextSection = (sectionIndex + 1 < sections.length) ? sections[sectionIndex + 1] : null
      } else {
        currentSection = sections[sectionIndex]
        prevSection = (sectionIndex - 1 >= 0) ? sections[sectionIndex - 1] : null
        prevSection.path = '/' + currentTopic.slug + '/' + prevSection.slug
        nextSection = (sectionIndex + 1 < sections.length) ? sections[sectionIndex + 1] : null
      }
    }
    return {
      currentTopic,
      prevTopic,
      nextTopic,
      currentSection,
      prevSection,
      nextSection
    }
  }
}
</script>
