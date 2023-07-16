; (d => {
  'use strict';

  const btnSubmit = d.querySelector('.btn-submit'),
    out = d.getElementById('rate-output'),
    sectionRate = d.querySelector('.rate'),
    sectionThx = d.querySelector('.thx');

  btnSubmit.addEventListener('click', e => {
    e.preventDefault();

    let form = e.target.form,
      formData = new FormData(form),
      fetchURL = form.action,
      fetchOption = { redirect: 'error' };

    // IF method GET
    if (form.method.toLowerCase() === 'get') {
      fetchURL += '?' + (new URLSearchParams(formData)).toString();
      // ELSE method POST
    } else {
      fetchOption = Object.assign(fetchOption, {
        body: formData,
        headers: {
          'Content-Type': form.enctype
        },
        method: form.method
      });
    }

    fetch(fetchURL, fetchOption)
      .then(res => {
        // IF status 2xx
        if (res.ok) {
          out.textContent = formData.get('rate');
          sectionRate.hidden = true;
          sectionThx.hidden = false;
          return true;
        }
        // ELSE
        let failData = Object.assign(Object.create(null), {
          status: res.status,
          url: res.url,
          body: res.bodyUsed ? res.body : null
        });
        console.debug('Submit failed! %o', failData);
        return false;
      })
      .catch(error => console.error('Error! %o', error));
  });

})(document);
