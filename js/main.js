(function (d) {
  'use strict';

  const formBtn = d.querySelector('.form-btn'),
    formInput = d.querySelector('.form-input');

  formBtn.addEventListener('click', function (e) {
    if (!formInput.checkValidity()) {
      e.preventDefault();
      formInput.setAttribute('aria-invalid', 'true');
      formInput.setAttribute('aria-errormessage', 'err-msg-invalid');
    } else {
      formInput.setAttribute('aria-invalid', 'false');
      formInput.removeAttribute('aria-errormessage');
    }
  });
})(document);
