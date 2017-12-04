<template>
  <div class="frontpage-flex">
    <div class="frontpage">
      <h1>Stuff Everybody Knows About Web Development</h1>
      <h2>(except you)</h2>
      <h3>The companion website to the Stuff Everybody Knows talk by <a href="https://twitter.com/seldo">@seldo</a>.</h3>
      <p><a id="start" class="link-deeper" href="/1-intro">Start reading</a></p>
      <div class="instructions">
        <h4>Instructions</h4>
        <ul>
          <li>This site is divided into a number of high-level topics, split into self-contained sections.</li>
          <li>To read the whole site sequentially, just click ⬇️ every time you reach the end of a section.</li>
          <li>You can consider ⬇️ going "deeper" on a topic. When you've gone as deep as you can, you'll automatically go to the next topic.</li>
          <li>If you get bored of a topic, use ➡️ to skip to the next topic.</li>
          <li>Naturally, you can use ⬆️ to go back up one level and ⬅️ to go back one topic.</li>
        </ul>
      </div>
      <div class="toc">
        <h3>Full topic list</h3>
        <ToC />
      </div>
      <div>
        <h3>This is an alpha</h3>
        <p>This site is a work in progress. It's ugly as hell. The layout, navigation and URLs cannot be trusted to stay constant, and most of the content is still missing.</p>
      </div>
    </div>
  </div>
</template>

<style>
#start {
  display: block;
  margin-top: 1em;
  font-size: 150%;
}
/* small screens are default */
.frontpage-flex {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 1em;
}
.frontpage h1 {
  font-size: 200%;
}
.frontpage h3 {
  margin-top: 1em;
}
.instructions {
  margin-top: 2em;
  text-align: left;
}
.toc {
  text-align: left;
  margin-top: 1em;
}
/* desktop screen sizes */
@media (min-width:600px) {
  .frontpage {
    max-width: 40em;
  }
  .frontpage h1 {
    font-size: 400%;
  }
  .frontpage h2 {
    font-size: 400%;
  }
  .frontpage h3 {
    margin-top: 1em;
  }
}
</style>

<script>
import ToC from '~/components/toc'

export default {
  layout: 'welcome',
  components: {
    ToC
  }
}
</script>
