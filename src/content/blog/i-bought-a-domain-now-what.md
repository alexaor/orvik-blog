---
title: 'I bought a domain, now what?'
description: 'The first of many steps of my world wide web adventure'
pubDate: 'Aug 23 2023'
heroImage: '/blog-placeholder-3.jpg'
---

I recently bought a domain. Not for the first time, but this is my first purchase for personal use. Throughout my studies and other developer related work I have always had a lot of supporting infrastructure. Colleagues who have already set up deployment pipelines, where all I had to to was push something to a git repository. Not that this is an issue, but at the end of the day I sit with the feeling that my hand needs to be held if I want to do anything on the web, or any other software project for that matter.

I intend for that to change. And where else to start, than buying a domain. But now what? This domain needs to lead somewhere, and what should I be hosting? Writing is a skill I have always admired from afar. A poorly honed skill, which is less than ideal. I tend to write as if I am having a real life conversation, which makes sense in my head, but rarely on paper.

This is starting out as a basic astro blog template, deployed using cloudflare. Not without issues however.

```bash
023-08-23T20:12:13.895538Z	➤ YN0070: Migrating from Yarn 1; automatically enabling the compatibility node-modules linker 👍
2023-08-23T20:12:13.896241Z	
2023-08-23T20:12:13.983405Z	➤ YN0000: ┌ Resolution step
2023-08-23T20:12:15.346488Z	➤ YN0032: │ fsevents@npm:2.3.3: Implicit dependencies on node-gyp are discouraged
2023-08-23T20:12:19.618628Z	➤ YN0002: │ @astrojs/mdx@npm:0.19.7 doesn't provide astro (p33450), requested by @astrojs/markdown-remark
2023-08-23T20:12:19.619028Z	➤ YN0000: │ Some peer dependencies are incorrectly met; run yarn explain peer-requirements <hash> for details, where <hash> is the six-letter p-prefixed code
2023-08-23T20:12:19.628629Z	➤ YN0000: └ Completed in 5s 645ms
2023-08-23T20:12:19.669198Z	➤ YN0000: ┌ Post-resolution validation
2023-08-23T20:12:19.669608Z	➤ YN0028: │ The lockfile would have been modified by this install, which is explicitly forbidden.
2023-08-23T20:12:19.669889Z	➤ YN0000: └ Completed
2023-08-23T20:12:19.670074Z	➤ YN0000: Failed with errors in 5s 687ms
2023-08-23T20:12:19.723306Z	Error: Exit with error code: 1
2023-08-23T20:12:19.724172Z	    at ChildProcess.<anonymous> (/snapshot/dist/run-build.js)
2023-08-23T20:12:19.724535Z	    at Object.onceWrapper (node:events:652:26)
2023-08-23T20:12:19.724869Z	    at ChildProcess.emit (node:events:537:28)
2023-08-23T20:12:19.725327Z	    at ChildProcess._handle.onexit (node:internal/child_process:291:12)
2023-08-23T20:12:19.733189Z	Failed: build command exited with code: 1
2023-08-23T20:12:20.644278Z	Failed: error occurred while running build command
```

After some extensive googling I had my suspicion the problem either being the node version, or the packages being used. I started with getting rid of MDX, which didn't really change anything. The only thing that actually worked was replacing yarn with npm as my package manager, which is by no means an obvious solution. No one seems to have a similar problem either.

Bless.