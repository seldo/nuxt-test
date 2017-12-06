<template>
  <div>
    <h2>1: Automate frequent tasks</h2>
    <p>The first and most important principle is that you should automate frequent tasks. This is obvious advice, as is much of the advice in this series, but the degree to which this is true is highly counter-intuitive. This first came to my attention via <a href="https://xkcd.com/1205/">XCKD 1205: Is It Worth The Time</a>:</p>
    <div class="diagram"><img src="/images/is_it_worth_the_time.png"></div>
    <p>However, Randall Munroe does not have a real job and so the math that he used is a little weird -- he assumes you would keep doing the same task for 5 years, which is longer than most programming jobs last, and also calculates the time saved in terms of full, 24-hour days, which isn't very intuitive in terms of actual time you would save. So I made my own version:</p>
    <div class="diagram"><img src="/images/time-saved-by-automation.png"></div>
    <p>This calculates your time saved over the course of only one year, but it describes the time saved in terms of "working days", i.e. if you save 8 hours that counts as "1 working day". As you can see, the amount of time saved is quite surprising: if you have a task you do every day and you can shave 30 minutes off of it, over your year you would get 2 full working weeks back. And it turns out there is a task that wastes even more time than that.</p>    
  </div>
</template>

<script>
export default {
  layout: 'page'
}
</script>
