# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7).  
Frontend Mentor challenges help you improve your coding skills by building realistic projects.  
The solution *live URL*: [Testimonials grid section by HA3IK](https://ha3ik.github.io/fep/testimonials-grid-section)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [CSS Custom properties](#css-custom-properties)
  - [Sorting items](#sorting-items)
  - [Quotation marks](#quotation-marks)
  - [Scaling](#scaling)
  - [Mob version](#mob-version)
  - [HTML Semantic](#html-semantic)
- [About](#about)
  - [Built with](#built-with)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:
- View the optimal layout for the site depending on their device's screen size

### CSS Custom properties

- [x] One style for various elements.
```css
/* Vars */

.quote:first-child {
  --color-bg: hsl(263, 55%, 52%);
  --color-txt: hsl(0, 0%, 100%);
}

.quote:nth-child(2) {
  --color-bg: hsl(217, 19%, 35%);
  --color-txt: hsl(0, 0%, 100%);
}

.quote:nth-child(3),
.quote:nth-child(5) {
  --color-bg: hsl(0, 0%, 100%);
  --color-txt: hsl(217, 19%, 35%);
}

.quote:nth-child(4) {
  --color-bg: hsl(219, 29%, 14%);
  --color-txt: hsl(0, 0%, 100%);
}

/* Style */

.quote {
  background: var(--color-bg);
  color: var(--color-txt);
}
```

### Sorting items

- [x] All necessary elements are moved first in the queue THEN span.
```css
.quote:first-child,
.quote:nth-child(2),
.quote:nth-child(5) {
  order: -1;
}

.quote:first-child {
  grid-column-start: 2 span;
}

.quote:nth-child(5) {
  grid-row: 2 span;
}
```

### Quotation marks

- [x] Quotes and space are added separately from the `BLOCKQUOTE` text via `::before`, `::after` and the `open-quote`, `close-quote` constants.
```css
.quote-txt::before {
  content: open-quote "\20";
}

.quote-txt::after {
  content: "\20" close-quote;
}
```

### Scaling

- [x] Except for the first one, styles were not assigned to a specific element, but to each n-th item.
```css
.quote:nth-child(4n + 2) {
  /* ... */
}

.quote:nth-child(4n + 3),
.quote:nth-child(4n + 5) {
  /* ... */
}
```

### Mob version

- [x] There is no Grid.
```css
.quote + .quote {
  margin-top: 1.5rem;
}
```

### HTML Semantic

- [x] Visually hidden `H1` title.

- [x] Quote item: `ARTICLE` > `FIGURE` + `H2` + `BLOCKQUOTE`.
  - `ARTICLE` - a quote element is a self-sufficient autonomous element.

- [x] Author block (`FIGURE`): 
  - `B` - call attention to the name.
  - `SMALL` - as a short side note.
```html
<figure>
  <picture>
    <!-- ... -->
    <img decoding="async" src="img/avatar.jpg" width="28" height="28" />
  </picture>
  <figcaption>
    <b class="author-name">Author Name</b> <small>Verified Graduate</small>
  </figcaption>
</figure>
```

## About

### Built with

- HTML: Semantic, [WHATWG "Living Standard"](https://html.spec.whatwg.org/), preload, multiple IMG\[type] SOURCEs…
- CSS: responsive (>=240), Grid, custom properties, fallback font-faces…
- Mobile-first workflow
- [Sass](https://sass-lang.com/) - CSS preprocessor

### Author

- Frontend Mentor - [@HA3IK](https://www.frontendmentor.io/profile/ha3ik)
- Twitter - [@HA3IK](https://www.twitter.com/ha3ik)
