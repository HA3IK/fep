# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG).  
Frontend Mentor challenges help you improve your coding skills by building realistic projects.  
The solution *live URL*: [Pod request access landing page by HA3IK](https://ha3ik.github.io/fep/pod-request-access-landing-page)

## Table of contents

- [Overview](#overview)
- [About](#about)
  - [Built with](#built-with)
  - [Author](#author)

## Overview

### DPR for background images

Two options: @media (min/max-resolution) VS using JS.

Define the current DPR and apply it as a class to HTML (`:root`):
```js
// 0.001 - to avoid 3.4999999403953552 etc.
// This error occurred when I used "Device Tool Bar" in Chrome, for "Samsung Galaxy S20 Ultra" (3.5 DPR)
const DPR = Math.round((window.devicePixelRatio + 0.001) || 1);
document.documentElement.classList.add('dpr-' + DPR);
```

Using `.dpr-2, .dpr-3, .dpr-4` classes we can define the appropriate sizes of background images.
```css
.main {
  background-image: url("../img/1x/desk-bg-img.jpg?v=1.0.0");
  background-origin: content-box;
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: 55.5rem auto;
}

.dpr-2 .main {
  background-image: url("../img/2x/desk-bg-img.jpg?v=1.0.0");
}

.dpr-3 .main {
  background-image: url("../img/3x/desk-bg-img.jpg?v=1.0.0");
}

.dpr-4 .main {
  background-image: url("../img/4x/desk-bg-img.jpg?v=1.0.0");
}
```

✅ As a result:
- JS detection: ~ 0.25ms
- CSS final size: -17% of @media (min/max-resolution) solution

### Title semantic

```html
<h1 class="title">Publish your podcasts <em>everywhere.</em></h1>
```

✅ Made the word "everywhere" not only white, according to the design, but also EMphasized it.

### Accessibility of errors

Changing `aria-invalid` and `aria-errormessage` attributes according to the error.
```js
formInput.setAttribute('aria-invalid', 'true'); // Mark the input as invalid
formInput.setAttribute('aria-errormessage', 'err-msg-invalid'); // Set the ID of the error message
```

Create a "live" element (`aria-live`) with error messages. Which are hidden by default and have their own ID to use with `aria-errormessage`.  
```html
<!-- [role=alert] implicitly sets [aria-live] -->
<div class="err-msgs" role="alert">
  <span class="err-msg" id="err-msg-invalid">Oops! Please check your email</span>
</div>
```

Show the error when it occurs
```css
[aria-errormessage="err-msg-invalid"] ~ .err-msgs > #err-msg-invalid {
  display: inline;
}
```

✅ As soon as an error becomes visible (`display:inline`), it receives an immediate focus (`role=alert`) with a message according to (`aria-errormessage`).


### HTML validator error, again

The official W3C validator, which is also referred to by WHATWG, reports errors that are not errors according to the official WHATWG Living Standard <time datetime="2023-07-12">12 July 2023</time>.

⚠️ Don't blindly trust "The Nu Html Checker" - its database is out of date.
- About the error you can read here: [link validation errors](https://github.com/HA3IK/fep/tree/skilled-elearning-landing-page#html-validator-error-again).
- And here is another one: [hgrpup validation error](https://github.com/HA3IK/fep/tree/four-card-feature-section#semantics-of-the-complex-header).

✅ The HTML is completely valid according to WHATWG standards.

### Lighthouse

✅ See the [Lighthouse report (for mobile)](https://ha3ik.github.io/fep/pod-request-access-landing-page/_challenge/lighthouse-report-mob.html) here.

## About

### Built with

- HTML: Semantic and compliant with the WHATWG "Living Standard", WAI-ARIA…
- CSS: Responsive, rem perfect 😎👍, fallback font-faces…
- Performance: hints, minification, versioned URLs…
- Works fine in IE10+ and relative versions of other browsers (I'm really sorry, the Progress 😇!)
  …

### Author

- Frontend Mentor - [@HA3IK](https://www.frontendmentor.io/profile/ha3ik)
- Twitter - [@HA3IK](https://www.twitter.com/ha3ik)
