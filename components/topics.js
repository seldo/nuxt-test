let topics = [
  {
    name: 'Home',
    slug: '' },
  {
    name: 'Intro',
    slug: '1-intro',
    children: [
      { name: 'The Long Version', slug: '2-the-long-version' }
    ]
  },
  {
    name: 'Dunning-Kruger',
    slug: '2-dunning-kruger',
    children: [
      { name: 'What this means for you', slug: '2-what-this-means-for-you' }
    ]
  },
  {
    name: 'Basic programming skills',
    slug: '3-basic-skills',
    children: [
      { name: '1: Automate frequent tasks', slug: '1-automate-frequent-tasks' },
      { name: '2: Learn to touch type', slug: '2-learn-to-touch-type' },
      { name: '3: Use the command line', slug: '3-use-the-command-line' },
      { name: '4: Master your text editor', slug: '4-master-your-text-editor' },
      { name: '5: Become effortless at version control', slug: '5-become-effortless-at-version-control' },
      { name: '6: Practice communication', slug: '6-practice-communication' }
    ]
  },
  {
    name: 'HTML & CSS',
    slug: '4-html-css'
  }
]
export default topics
