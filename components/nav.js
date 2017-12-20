import topics from './topics'

export default function (router) {
  let path = router.$route.path.split('/')
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
  } else {
    // no children, therefore section is topic
    currentSection = currentTopic
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
