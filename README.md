# startex
StartEx front page mockup - Static page in React

Built in React, making use of reusable components to mimic a design in a .pdf.

The sections in the .pdf had aspect ratios of 2.5:1 and above, with no narrower samples provided as a guide to the design of narrower viewports. I compromised between responsiveness and faithfulness to the original by making the sections reasonably responsive, but keeping all the features of the original design.
The sections remain attractive down to about 640px width and all features remain fully visible down to 480px.

This exercise was in part to demonstrate the use of reusable React components, so in the case of some of these components, the decisions to make new components, rather than code directly inline in higher components, were based on somewhat contrived logic.

For a mockup of a single page, even these simple components are not really necessary - the quickest way to code would be to 'Reactify' a standard HTML/CSS page. On the other hand, some components like SingleLineGrid are suited to the limited cases found in this one StartEx page - SingleLineGrid optimally takes 3 to 6 items (due to non-smart padding and other sizing issues). However, these can be resizeable images, text, or optionally any of `image`, `title`, `subtitle`, `text` (in that order).
Components such as SingleLineGrid, however, would ideally be more extensible so as to be of more general use across a entire site.

Due to working faithfully to an original design, accessibility was very much 'as is', though contrast and clarity are good in that design. My intention was to make better use of semantic HTML5 than is included here, but I unfortunately ran across problems using `<nav>` and `<address>` which I did not have time to fully resolve.
