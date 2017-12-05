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
    <p>Another thing to be absolutely great at is your text editor. The world is full of people who will tell you that you should use vim or emacs and that anybody who doesn't use one of those two editors is not a Real Programmer™ and I am here to dispel that advice as being weapons-grade bullshit.</p>
    <p>The fact of the matter is <b>it doesn't matter what editor you use, as long as you get really good at using it</b>. And the proof of this principle is the fact that many professional programmers are incredibly productive using vim, a piece of software that was garbage when it was released 26 years ago and is still garbage today. Vim fans are huge proponents of the idea that learning keyboard shortcuts is much faster than using the mouse, when in fact decades of research show that <a href="https://danluu.com/keyboard-v-mouse/">using a mouse is consistently faster than using a keyboard</a>. For the record, emacs is also garbage.</p>
    <p>You know why people who use Vim are so productive with it? Because they have been using it for 26 years. If you consistently use the same piece of software for 26 years, you will be amazingly good and fast at using it, and it doesn't matter that it's a piece of shit that <a href="https://stackoverflow.blog/2017/05/23/stack-overflow-helping-one-million-developers-exit-vim/">you have to Google how to quit</a>.</p>
    <p>So: pick an editor. It does not matter even a little bit which one. Then use it consistently and constantly. Don't switch editors every week, don't constantly rearrange UI and remap shortcuts. Just find one you like and stick with it forever, so that using it is like breathing.</p>
    
    <h2>5: Version control</h2>
    <p>Another foundational skill that you should become fluent with is version control, and by that I mean <a href="https://try.github.io/">git</a>. There are lots of types of version control management software, but luckily that doesn't matter because everybody uses git.</p>
    <p>Git is essential to how software is put together these days. It's how teams of more than one person collaborate on code, it's how you find and correct mistakes, it's often central to how you deploy the software too.</p>
    <p>So get really, really good at git. Go beyond <kbd>clone</kbd> and <kbd>checkout</kbd>. Learn how to branch, and merge, and squash, and rebase. Get so good at it that it's effortless, because you are going to be doing it hundreds of times a day, and those seconds add up quickly.</p>
    
    <h2>6: Communication</h2>
    <h3>Your job is 50% solving the problem, 50% communicating about the problem.</h3>
    <p>An unexamined belief that a lot of developers have is that the hard part of being a programmer, in fact the only important part, is being able to solve complicated technical problems. This is a disastrous misunderstanding of the job.</p>
    <p>Generously 50% of your job is solving the problem; the other 50% is figuring out what the problem was in the first place, and letting people know how you solved it. Without fluent, accurate communication with your bosses, reports, clients and co-workers, you may find yourself solving technical problems, but they will not be the right problems, or the solutions may be inappropriate, and all your technical expertise will be wasted.</p>
    <p>Anyone, given enough time, can program a solution to a given technical problem. But to be a good working programmer, you need to have a view of the wider picture in the team and the company in which you operate. All technical problems have technical constraints -- disk, memory, processor -- but there are also organizational constraints, which if ignored will make your solutions worthless. How much time do you have to solve the problem? How expensive can the solution be? Who will be using it? What other systems are likely to be affected by my work? Being unable to answer these questions is the hallmark of a junior developer.</p>
    
    <p>Once you've mastered all of the above, you can get on to learning actual web development.</p>
    
    <p><a href="/4-html-css" class="link-forward">Next topic: HTML & CSS</a></p>
  </div>
</template>

<script>
export default {
  layout: 'page'
}
</script>

<style>
</style>
