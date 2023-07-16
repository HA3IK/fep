# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).  
Frontend Mentor challenges help you improve your coding skills by building realistic projects.  
The solution *live URL*: [QR code component by HA3IK](https://ha3ik.github.io/fep/interactive-rating-component)

## Table of contents

- [The challenge](#the-challenge)
- [Overview](#overview)
  - [Built with](#built-with)
  - [Author](#author)

## The challenge

Users should be able to:

- [x] View the optimal layout for the app depending on their device's screen size
- [x] Hover/focus states for all interactive elements on the page
- [x] Select and submit a number rating
- [x] The "Thank you" card state after submitting a rating

## Overview

### Responsive circles

✅ Referring to the width of the `.main` block, we set the size of the circles as a percentage via `padding`.

```html
<main class=main>
  <div class="circle-wrap">
    <div class="circle">
      <!-- Circle content -->
    </div>
  </div>
</main>
```
```css
:root {
  --circle-size: 48;
  --main-padding: 32;
  --main-width: 412;
  --main-content-width: calc(var(--main-width) - var(--main-padding) * 2);
}

.main {
  max-width: calc(var(--main-width) * 1px);
}

.circle-wrap {
  display: inline-block;
  padding: calc(var(--circle-size) / 2 / var(--main-content-width) * 100%);
  position: relative;
}

.circle {
  inset: 0;
  position: absolute;
}
```

### Changing states

✅ Use the `hidden` attribute to hide the second "Thank you" state.

```html
<!-- Rating state -->
<section class="rate"></section>
<!-- Thank you state -->
<section class="thx" hidden></section>
```
And show it by `hidden` parameter.

```js
sectionRate.hidden = true;
sectionThx.hidden = false;
```

### Rating result

The user knows what he chose, therefore this information is only additional and not important.  
✅ The `small` tag is used for the string, and the `output` tag is used for the result.
```html
<small>You selected <output>0</output> out of 5<</small>
```

### Rating fields

As it should be - this is the form:
- `label` - user button
- `input[radio]` - hidden real "button"
```html
<form class="form" id="form-rate" action=".">
  <div class="circle-wrap circle-rate">
    <input class="rate-radio" type="radio" name="rate" id="rate-1" value="1">
    <label class="circle rate-label" for="rate-1">1</label>
  </div>
  <!-- div*4>input+label -->
  <button>Submit</button>
</form>
```

- The form elements are on one line, and the submit button is on its own line (`min-width:100%`).  
- Absolute elements, where `label` comes after `input[radio]`, which means it covers (hides) it.  
- `label` clicks `input[radio]` and styles itself `input[radio]:checked + label`
```scss
.form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* Inputs fieldset */

.circle-rate {
  margin-bottom: px2x(32);
}

.rate-radio,
.rate-label {
  position: absolute;
}

.rate-radio {
  height: 1px;
  width: 1px;
}

.rate-label {
  background: $color-blue-dark;
  cursor: pointer;
  inset: 0;
}

.rate-radio:checked + .rate-label {
  background: $color-grey-medium;
  color: $color-white;
}

/* Submit button */

.btn-submit {
  min-width: 100%;
}
```

1. Watch the "click" event on `button` element.
2. Stop sending the form by default.
3. Send the form ourselves.
4. If successful, apply the selected rating and display the "Thank you" state.
```js
btnSubmit.addEventListener('click', e => {
  e.preventDefault();
  fetch(fetchURL, fetchOption)
    .then(res => {
      if (res.ok) {
        out.textContent = formData.get('rate');
        // Show the "Thank you" state.
      }
    })
})

```

For accessibility purposes, logically link all non-nested form elements with `id`+`for` attributes.
```html
<!-- Rating state -->
<section>
  <form id="form-rate">
    <div>
      <input type="radio" id="rate-1" name="rate" value="1">
      <label for="rate-1">1</label>
    </div>
    <!-- div*4>input+label -->
    <button>Submit</button>
  </form>
</section>
<!-- Thank you state -->
<section>
  <p>
    <small>You selected <output form="form-rate" for="rate-1 rate-2 rate-3 rate-4 rate-5">0</output> out of 5</small>
  </p>
</section>
```

### Lighthouse

✅ See the [Lighthouse report (for mobile)](https://ha3ik.github.io/fep/interactive-rating-component/_challenge/lighthouse-report-mob.html) here.

## About

### Built with

- HTML: Semantic and Valid HTML5, WAI-ARIA…
- CSS: Responsive, flexbox, fallback font-faces…
- JS: ES6+, fetch, async Promise.then…
- Performance: hints, minification, versioned URLs…
- [Sass](https://sass-lang.com/) - CSS preprocessor.  
  …

### Author

- Frontend Mentor - [@HA3IK](https://www.frontendmentor.io/profile/ha3ik)
- Twitter - [@HA3IK](https://www.twitter.com/ha3ik)
