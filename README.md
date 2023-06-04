# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).  
Frontend Mentor challenges help you improve your coding skills by building realistic projects.  
The solution *live URL*: [QR code component by HA3IK](https://ha3ik.github.io/fep/qr-code-component)

## Table of contents

- [Overview](#overview)
- [About](#about)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### NO Flex/Grid - Main content centralization

✅ I used a mock table:  
`display:table;` >  
`display:table-cell; text-align:center; vertical-align:middle;` >  
`display:inline-block;`

### QR code image accessibility

✅ Since the content of the QR code is a link, I simply wrapped the image into the link with a corresponding description.

### QR code image on the design is different everywhere! 😅

1\. Differences in the Figma design file and the static images (with extra grid):

<div style="max-width:490px;min-width:240px;text-align:center">
  <img style="width:49%;min-width:240px" src="./_challenge/screenshot/qr-code.svg#figma" alt="Frontendmentor.io QR code, figma version">
  <img style="width:49%;min-width:240px" src="./_challenge/screenshot/qr-code.png" alt="Frontendmentor.io QR code, static image version">
</div>

✅ I followed the Figma design file as the QR code there looks realistic.

2\. Differences in color order for desktop and mobile:

<div style="max-width:490px;min-width:240px;text-align:center">
  <img style="width:49%;min-width:240px" src="./_challenge/screenshot/qr-code.svg#desk" alt="Frontendmentor.io QR code, desktop version">
  <img style="width:49%;min-width:240px" src="./_challenge/screenshot/qr-code.svg#mob" alt="Frontendmentor.io QR code, mobile version">
</div>

✅ Done with a single SVG file where I change the colors via the #mob fragment (`#mob:target`).

```svg
<style>
  #mob:target ~ .oval,
  .canv {
    fill: #2c7dfa;
  }

  #mob:target ~ .canv,
  .oval {
    fill: #3685ff;
  }
</style>
…
<defs id="mob"></defs>
<path class="canv" d="M288 0H0v288h288V0Z" />
<g class="oval" mask="url(#a)">
  <path d="M267 475a135 135 0 1 0-1-271 135 135 0 0 0 1 271ZM33 164a164 164 0 1 0 0-328 164 164 0 0 0 0 328Z" />
</g>
…
```

### Attribution _(Out of the challenge)_

✅ Made "absolute", so that it doesn't take up space in the "normal document flow" when centralizing the main content.

### Lighthouse

✅ See the [Lighthouse report (for mobile)](https://ha3ik.github.io/fep/qr-code-component/_challenge/lighthouse-report-mob.html) here.

## About

### Built with

- HTML: Semantic and Valid HTML5, WAI-ARIA…
- No Flexbox/Grid, Responsive.
- Performance: hints, minification, versioned URLs…
- Works fine in IE9+ and relative versions of other browsers (I'm really sorry, the progress 😇!)  
  …

### Useful resources

- [SVGO](https://github.com/svg/svgo) - tool for optimizing/minimizing SVG 👍

### Author

- Frontend Mentor - [@HA3IK](https://www.frontendmentor.io/profile/ha3ik)
- Twitter - [@HA3IK](https://www.twitter.com/ha3ik)
