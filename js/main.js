'use strict';

/**
 * Code
 */
// The form validation list
const MSG_ERROR = {
  date: {
    invalid: 'Must be a valid date',
    max: 'The date must be in the past or today',
    min: '' // The value is generated below
  },

  input: {
    'input-day': {
      invalid: 'Must be a valid day',
      max: '',
      min: 'Must be >= 1'
    },
    'input-month': {
      invalid: 'Must be a valid month',
      max: 'Must be <= 12',
      min: 'Must be >= 1'
    },
    'input-year': {
      invalid: 'Must be a valid year',
      max: 'Must be in the past',
      min: '' // The value is generated below
    }
  },

  required: 'This field is required'
};
// Upd. according to the task design
MSG_ERROR.input['input-day'].min = MSG_ERROR.input['input-day'].max = MSG_ERROR.input['input-day'].invalid;
MSG_ERROR.input['input-month'].min = MSG_ERROR.input['input-month'].max = MSG_ERROR.input['input-month'].invalid;
const btnSubmit = document.querySelector('.btn');
const inputArr = Object.keys(MSG_ERROR.input);
const outputArr = ['output-day', 'output-month', 'output-year'];
const outputData = document.body.querySelector('.output-row');
// Previous error state
const wasError = {
  date: false,
  input: false
};
let inputDateMin;
let formDataPrev;
// Click event handler
btnSubmit.addEventListener('click', e => {
  // Stop submit event
  e.preventDefault();
  // Define the form element
  const form = e.target.form;
  // IF the input data has not changed THEN return
  let formData = new FormData(form).values();
  formData = [...formData].join(',');
  if (formDataPrev === formData) return;
  // ELSE save the form data string:
  formDataPrev = formData;
  // Define error vars
  let isError;
  let msgError;
  // Define the form elements
  const formCollection = form.elements;
  // Define the current date
  const dateNow = new Date();
  dateNow.setHours(0, 0, 0, 0); // Reset time
  const dateYear = dateNow.getFullYear();
  // Upd. data related to the year
  if (Number(formCollection['input-year'].max) !== dateYear) {
    formCollection['input-year'].max = `${dateYear}`;
  }
  if (!MSG_ERROR.input['input-year'].min) {
    MSG_ERROR.input['input-year'].min = `Must be >= ${formCollection['input-year'].min}`;
  }
  // (Commented, according to the task design)
  // Checking and generating [max] day and the error message of the max day number of the month
  // const inputMonthDayMax = new Date(Number(formCollection['input-year'].value), Number(formCollection['input-month'].value), 0).getDate();
  // if (Number(formCollection['input-day'].max) !== inputMonthDayMax) formCollection['input-day'].max = `${inputMonthDayMax}`;
  // if (!MSG_ERROR.input['input-day'].max) MSG_ERROR.input['input-day'].max = `Must be <= ${formCollection['input-day'].max}`;
  /**
   * 1. Check input fields
   * - IF the form is invalid
   * - Check all input fields
   * - Show/hide error messages
   * - IF the form is valid OR was invalid
   * - Just hide error messages
   */
  const formValidity = !form.checkValidity(); // (Opposite state)
  if (formValidity || wasError.input) {
    // Save the error state
    wasError.input = formValidity;
    // Check all input fields
    inputArr.forEach(inputName => {
      isError = formValidity;
      msgError = '';
      const inputError = MSG_ERROR.input[inputName];
      const inputValidity = formCollection[inputName].validity;
      // Define the error message element
      if (!inputError.tag) {
        inputError.tag = formCollection[inputName].parentNode.querySelector('.date-msg-error');
      }
      // IF error THEN check the error type
      if (isError) {
        if (inputValidity.valueMissing) {
          msgError = MSG_ERROR.required;
        } else if (inputValidity.rangeUnderflow) {
          msgError = inputError.min;
        } else if (inputValidity.rangeOverflow) {
          msgError = inputError.max;
        } else {
          isError = false; // Unplanned error 😅
        }
      }
      // IF an error THEN insert the error message
      if (isError) inputError.tag.textContent = msgError;
      // IF NOT an error THEN the error message is "hidden" (hide it)
      inputError.tag.hidden = !isError;
    });
  }
  /**
   * 2. Check the full input date
   * - Share variables with output (step 3)
   * - Inputs are valid (step 1) OR full date was invalid
   * - IF inputs are invalid
   * - Undo full date "was" state AND hide the error message
   * - IF inputs are valid
   * - Check the full date
   * - Show/hide the error message
   */
  let inputYear, inputMonth, inputDay, inputDateMs;
  if (!wasError.input || wasError.date) {
    msgError = '';
    // Define the error message element
    if (!MSG_ERROR.date.tag) {
      MSG_ERROR.date.tag = formCollection['date-field'].querySelector(':scope > .date-msg-error');
    }
    // IF there is an input error after the date error
    if (wasError.input) {
      isError = false;
    } else {
      isError = true;
      // Define the input date values
      inputDay = Number(formCollection['input-day'].value);
      inputMonth = Number(formCollection['input-month'].value);
      inputYear = Number(formCollection['input-year'].value);
      const inputDate = new Date(inputYear, inputMonth - 1, inputDay);
      inputDateMs = inputDate.getTime();
      if (!inputDateMin) inputDateMin = new Date(Number(formCollection['input-year'].min), 0, 1); // (YYYY.min)-01-01
      // Check the full date from inputs
      if (inputDate.getDate() != inputDay) {
        msgError = MSG_ERROR.date.invalid; // The day number of the month is mismatched
      } else if (inputDateMs > dateNow.getTime()) {
        msgError = MSG_ERROR.date.max;
      } else if (inputDateMs < inputDateMin.getTime()) {
        if (!MSG_ERROR.date.min) {
          MSG_ERROR.date.min = `Must be after ${inputDateMin.toLocaleDateString(navigator.language)}`;
        }
        msgError = MSG_ERROR.date.min;
      } else {
        isError = false;
      }
    }
    // IF an error THEN insert the error message
    if (isError) MSG_ERROR.date.tag.textContent = msgError;
    // IF NOT an error THEN the error message is false (hide it)
    MSG_ERROR.date.tag.hidden = !isError;
    // Save the error state
    wasError.date = isError;
  }
  /**
   * 3. Output the result
   * - IF any error THEN show the placeholder
   * - ELSE calculate the difference in years, months and days
   */
  const inputDateClassList = formCollection['date-field'].classList;
  // IF there was any error THEN show the placeholder
  if (wasError.input || wasError.date) {
    // Add error class
    inputDateClassList.add('date-error');
    // Accessibility
    if (outputData.ariaLive !== 'off') {
      outputData.ariaLive = 'off';
      outputArr.forEach(outputName => {
        const outputTag = formCollection[outputName];
        outputTag.ariaLabel = 'none';
        outputTag.value = outputTag.defaultValue; // Add the default value (placeholder)
      });
    }
  } else {
    // Remove error class
    inputDateClassList.remove('date-error');
    // Accessibility
    if (outputData.ariaLive === 'off') {
      outputArr.forEach(outputName => {
        formCollection[outputName].removeAttribute('aria-label'); // Remove [aria-label=none]
      });

      outputData.ariaLive = 'assertive';
    }
    // Get current date values
    const dateDay = dateNow.getDate();
    const dateMonth = dateNow.getMonth();
    const dateMonthDayMax = new Date(dateYear, dateMonth, 0).getDate();
    // Input date is less or equal to the date now of the same year
    const leDateNow = new Date(dateNow).setFullYear(inputYear) >= inputDateMs;
    // Input day is greater than day now
    const gtDayNow = dateDay < inputDay;
    // Calc. years
    let diffInYears = dateYear - inputYear;
    diffInYears += leDateNow ? 0 : -1;
    formCollection['output-year'].value = `${diffInYears}`;
    // Calc. months
    let diffInMonths = dateMonth - inputMonth;
    diffInMonths += leDateNow ? 0 : 12;
    diffInMonths += gtDayNow ? 0 : 1;
    formCollection['output-month'].value = `${diffInMonths}`;
    // Calc. days
    let diffInDays = dateDay - inputDay;
    diffInDays += gtDayNow ? dateMonthDayMax : 0;
    formCollection['output-day'].value = `${diffInDays}`;
  }
});