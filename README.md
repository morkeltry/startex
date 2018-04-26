# startex
StartEx front page mockup - Static page in React

Built in React, making use of reusable components to mimic a design in a .pdf
The sections in the .pdf had an aspect ratio of 1.6 : 1 or wider and no narrower samples were provided. I compromised between responsiveness and faithfulness to the original by making the sections reasonably responsive, but keeping the features of the original design.
The sections remain attractive down to about 640px width and all features remain fully visible down to 480px.

This exercise was in part to demonstrate the use of reusable React components, so the logic behind making some of these components was slightly unrealistic.

For a mockup of a single page, even these simple components are not really necessary - the quickest way to code would be to 'Reactify' a standard HTML/CSS page. On the other hand, some components like SingleLineGrid are suited to the limited cases found in the one StartEx page cases - due to non-smart padding and other sizing, SingleLineGrid optimally take 3 to 6 items. However, these can be resizeable images, text, or any of `image`, `title`, `subtitle`, `text` in that order.
Components such as SingleLineGrid, however, would ideally be more extensible so as to be of more genral use across a entire site.

Due to working faithfully to an original design, accessibility was very much 'as is', though contrast and clarity are good in that design. I could have made some better use of semantic HTML5, but ran across problems using `<nav>` and `<address>` which I did not have time to fully resolve.

