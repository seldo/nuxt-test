<template>
  <div>
    <h1>HTML & CSS</h1>
    <p>HTML is the foundation of the web, omnipresent and under-appreciated. It is often regarded as unimportant, a mere canvas on which the real web development is done with JavaScript and CSS. But the unique, unprecedented properties of HTML are what made the web into the global force that it is, and understanding what those features are is a useful north star when it comes to web development.</p>
    <p>Key to understanding HTML is its history. One of the strange things about the web being relatively new as a technology -- it was invented in 1989 -- is that its inventor is still around, alive, and very much involved. This is Sir Tim Berners-Lee:</p>
    <div class="diagram"><img src="/images/sir-tim-berners-lee.jpg"></div>
    <p>Sir Tim invented the web. He didn't do all the coding, many of the ideas were borrowed from existing and competing technologies around the same time, and all inventions are built on top of others, but there is remarkably little disagreement that HTML as it works today was substantially his idea. He built and then gave it away for free. I don't know about you, but the web is tremendously important to my life and the idea that its inventor gave it away for nothing fills me with joy, and is a debt I can never repay.</p>
    <p>The current web is primarily an application platform, highly interactive, with rich visual capabilities. However, this is not really what Tim was trying to build at the time. His original idea was for something much simpler, more like Wikipedia: a two-way, linked database of knowledge with basic formatting, that could be edited and written by the same tool.</p>
    <p>It turns out the modern web is flexible enough to build Wikipedia as well as everything else, but a central part of that original idea is still present: HTML is a <b>markup language</b>, not a presentational format. <b>The purpose of HTML is to tell you what the data is, not what it should look like.</b></p>

  </div>
</template>

<script>
export default {
  layout: 'page'
}
</script>
