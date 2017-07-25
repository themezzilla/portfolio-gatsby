---
title: Why I Love And Hate Webpack
date: "2017-04-26"
layout: post
path: "/blog/webpack-love-hate"
---

Everyone knows about the state of web development and the over-saturation of tools. We all know it's rediculous and impossible to keep up on. However you can't deny that some awesome tools have emerged to help us web devs get the job done better and faster.

When it comes to development environment and build tools, I have been team Gulp for a while now. There is a Gulp plugin for everything! Set up a task for compiling SCSS, moving things around, development server, minifying JS and so on. The problem is that your `gulpfile.js` quickly became _super_ long, and you have tasks instantiated within tasks and everything is over-complicated. Not to mention you have about 30 lines of dependency requirements at the top of the file.

Enter Webpack, the latest and most advanced build tool out there. It's been around for a bit, but I only just started straying from my Gulp comfort zone. I've switched to it 100%, as modern web applications have much more JavaScript and are more dependency heavy. 

### Things I love about webpack:
* 100% of config in a single file
* option to inject CSS via JS
* easily pipe files/code from one loader to another
* built in access to build hash and tons of other build data 
* large community of contributors building loaders and plugins for just about everything
* easily transpile ES6
* package your dependencies up in one file
* extract common dependencies from multiple bundles

The list goes on, it really is the best option at the moment. However, there are a few things that really drive me crazy and took me a while to fully understand.

### Things I hate/confuse the heck out of me:
* loaders work from the bottom - up for some reason
* you need to install (via `yarn` or `npm`) about 15 things to get up and running
* some community-made plugins just don't work very well yet
* you have to add your own hacks occasionally to make a loader/plugin do what you want
* it feels like a lot of work to initially set up your config

Despite doing some serious head-to-keyboard banging initially, I've come to really appreciate Webpack and what it offers. Now that I have a good config, I can reuse and refresh it as I go.

Thanks, Webpack, for making the web harder and easier at the same time.