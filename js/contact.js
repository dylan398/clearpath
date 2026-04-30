// Clearpath Site Consulting — Contact Form Handler
// Requires firebase-config.js loaded first (defines db and INQUIRIES)

document.addEventListener('DOMContentLoaded', () => {

  const form       = document.getElementById('contact-form');
  const submitBtn  = document.getElementById('form-submit');
  const msgSuccess = document.getElementById('msg-success');
  const msgError   = document.getElementById('msg-error');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear previous messages
    [msgSuccess, msgError].forEach(el => {
      el.className = 'form-message';
      el.style.display = 'none';
      el.innerHTML = '';
    });

    // Validate required fields
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      }
    });

    // Email format check
    const emailField = form.querySelector('#email');
    if (emailField?.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value.trim())) {
      emailField.classList.add('error');
      valid = false;
    }

    if (!valid) {
      msgError.textContent  = 'Please fill in all required fields before submitting.';
      msgError.style.display = 'block';
      msgError.classList.add('error');
      return;
    }

    // Gather form data
    const payload = {
      name:        form.querySelector('#name')?.value.trim()        || '',
      company:     form.querySelector('#company')?.value.trim()     || '',
      email:       form.querySelector('#email')?.value.trim()       || '',
      phone:       form.querySelector('#phone')?.value.trim()       || '',
      projectType: form.querySelector('#project-type')?.value       || '',
      location:    form.querySelector('#location')?.value.trim()    || '',
      budget:      form.querySelector('#budget')?.value             || '',
      timeline:    form.querySelector('#timeline')?.value           || '',
      description: form.querySelector('#description')?.value.trim() || '',
      submittedAt: firebase.firestore.FieldValue.serverTimestamp(),
      source:      window.location.href,
    };

    // Submit
    submitBtn.disabled    = true;
    submitBtn.textContent = 'Sending…';

    try {
      await db.collection(INQUIRIES).add(payload);

      form.style.display = 'none';
      msgSuccess.innerHTML = '<strong>Message received.</strong> We\'ll be in touch within one business day to discuss your project.';
      msgSuccess.style.display = 'block';
      msgSuccess.classList.add('success');

    } catch (err) {
      console.error('Submission error:', err);
      msgError.innerHTML = '<strong>Something went wrong.</strong> Please try again or reach us directly at <a href="mailto:estimating@clearpathsite.com" style="color:inherit;text-decoration:underline">estimating@clearpathsite.com</a>.';
      msgError.style.display = 'block';
      msgError.classList.add('error');
      submitBtn.disabled    = false;
      submitBtn.textContent = 'Submit Project Inquiry';
    }
  });

  // Clear error highlight on input
  form.querySelectorAll('.form-control').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('error'));
  });

});
