<template>
  <div>
    <h1>Basic Programming Skills</h1>

    <p>Before you get started with programming in any language, there are a collection of meta-skills that every programmer needs. These skills are so fundamental that experienced programmers are often unconscious of the fact that they have these skills and took years acquiring them. As a result, they don't think to mention to new programmers that they should focus on these things first. As usual, I'm here to fix that.</p>

    <h2>There's no such thing as a 10x programmer</h2>
    <p>There is a persistent myth in tech of the "10x programmer", mythical individuals who are ten times as fast as a normal programmer and should be over-paid and allowed to get away with being anti-social assholes. Firstly, the effect on team morale of employing an asshole will always outweigh any productivity benefit they might bring. Secondly, such people don't exist.</p>
    <p>Everybody programs at about the same speed. What does exist are programmers who <b>get a lot more programming done</b>, and the way that they do it is by eliminating all of the grunt work and repetitive tasks in their programming lives. They get effortlessly fast at their tools. They type fast, edit quickly, and merge and branch as easily as breathing. They slow down <b>only to solve hard problems</b>, and as a result they go much, much faster than programmers who do not master these basic skills.</p>

    <h2>1: Automate frequent tasks</h2>
    <p>The first and most important principle is that you should automate frequent tasks. This is obvious advice, as is much of the advice in this series, but the degree to which this is true is highly counter-intuitive. This first came to my attention via <a href="https://xkcd.com/1205/">XCKD 1205: Is It Worth The Time</a>:</p>
    <div class="diagram"><img src="/images/is_it_worth_the_time.png"></div>
    <p>However, Randall Munroe does not have a real job and so the math that he used is a little weird -- he assumes you would keep doing the same task for 5 years, which is longer than most programming jobs last, and also calculates the time saved in terms of full, 24-hour days, which isn't very intuitive in terms of actual time you would save. So I made my own version:</p>
    <div class="diagram"><img src="/images/time-saved-by-automation.png"></div>
    <p>This calculates your time saved over the course of only one year, but it describes the time saved in terms of "working days", i.e. if you save 8 hours that counts as "1 working day". As you can see, the amount of time saved is quite surprising: if you have a task you do every day and you can shave 30 minutes off of it, over your year you would get 2 full working weeks back. And it turns out there is a task that wastes even more time than that.</p>

    <h2>2: Learn to touch type</h2>
    <p>Can you type with all 10 fingers, without needing to look at the keyboard? If not, stop everything you are doing and learn, because it is wasting you an absolutely staggering amount of time.</p>
    <p>There's no shame in being unable to touch type. My school didn't offer typing classes, and I didn't get around to learning to type properly until I was in my mid-20s. It took me 15 minutes a night for a couple of months, and the result was a staggering increase in productivity.</p>
    <p>Let's do some simple math: assume you type at 35 words per minute, which is pretty average for an untrained, 2- or 4-finger typist. Assume you spend 8 hours a day typing, which whether you are programming or talking to people on Slack or sending emails is not an unreasonable expectation for a working programmer. Now assume by learning to touch type you get a little faster -- 40 words per minute (a pretty good typist does more like 65wpm, but let's be conservative). This would save you an hour a day!</p>
    <p>Over the course of a year you would save <b>1.5 working months</b>. So if you were bootstrapping your startup and you knew you had enough money to work for 12 months, you could spend the first month doing <i>nothing but learning to type faster</i> and you would <b>still</b> end up getting more done.</p>
    <p>I can't emphasize it enough: your whole job is typing, whether it's code or words. Get as fast at it as you possibly can.</p>

    <h2>3: Use the command line</h2>
    <p>Unix has its fans and its detractors. Some people use Unix-based operating systems like MacOS every day, others prefer Windows. Whatever your personal preference, it doesn't matter: you will almost certainly be deploying your software to a Linux box. The sooner you accept this and <a href="http://linuxcommand.org/">get really good at using Linux</a>, the sooner you will graduate to the next level of efficiency as a working programmer.</p>
    <h3>The unreasonable effectiveness of Bash</h3>
    <p>The standard scripting language in most Unix operating systems is Bash. An old, weird, half-baked Swiss Army Knife of a programming language, Bash is nonetheless ubiquitous and hugely effective at writing very short scripts that automate command line tasks. And, per the previous section, you should be automating far more than you probably are. To do it, you should learn bash.</p>
    <p>Tasks that for some developers would be 10 minutes of typing with a bunch of tedious copying and pasting are, for people truly comfortable with bash, the work of 30 seconds of thinking very hard. If that doesn't sound like a gigantic time saving, think how often you might need to do that task and then check the table at the top of the page again.</p>
    <h3>But not just Bash</h3>
    <p>All Unix operating systems have a bunch of standard utilities that are (mostly) the same regardless of the flavor, and they are very powerful indeed. <kbd>grep</kbd>, <kbd>find</kbd>, <kbd>awk</kbd>, <kbd>sed</kbd> and other fundamental Unix utilities will save you unreasonably huge amounts of time if you take the time to learn them and use them judiciously.</p>

    <h2>4: Your text editor of choice</h2>
    <p></p>


  </div>
</template>

<script>
export default {
  layout: 'page'
}
</script>

<style>
</style>
