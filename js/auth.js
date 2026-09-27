// auth.js — pure HTML/CSS/JS version. There's no server here, so this
// does NOT create real accounts or check real passwords. It just stops
// the form from trying to submit to a page that doesn't exist, and
// shows a message so the form still feels complete visually.

function showMessage(el, text, type) {
  el.textContent = text;
  el.className = 'form-message is-' + type;
}

// Shows or clears the little red message under one field.
function setFieldError(input, text) {
  const errorEl = document.querySelector(`[data-error-for="${input.name}"]`);
  if (!errorEl) return;

  if (text) {
    errorEl.textContent = text;
    errorEl.classList.add('is-visible');
    input.classList.add('is-invalid');
  } else {
    errorEl.textContent = '';
    errorEl.classList.remove('is-visible');
    input.classList.remove('is-invalid');
  }
}

// A friendly label for each field, used in "X is required" messages.
const FIELD_LABELS = {
  fullName: 'Full Name',
  email: 'Email Address',
  password: 'Password',
  confirmPassword: 'Confirm Password'
};

const signupForm = document.querySelector('[data-signup-form]');
if (signupForm) {
  const message = document.querySelector('[data-form-message]');

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let firstInvalidField = null;

    // Check every required field: is it empty, and — for email —
    // is it at least shaped like an email address?
    ['fullName', 'email', 'password', 'confirmPassword'].forEach((name) => {
      const input = signupForm[name];
      const value = input.value.trim();
      let error = '';

      if (!value) {
        error = `${FIELD_LABELS[name]} is required.`;
      } else if (name === 'email' && !input.validity.valid) {
        error = 'Please enter a valid email address.';
      } else if (name === 'password' && value.length < 8) {
        error = 'Password must be at least 8 characters.';
      }

      setFieldError(input, error);
      if (error && !firstInvalidField) firstInvalidField = input;
    });

    // Confirm Password gets one more check, but only once both
    // password fields are otherwise filled in correctly.
    const password = signupForm.password.value;
    const confirmPassword = signupForm.confirmPassword.value;
    if (password && confirmPassword && password !== confirmPassword) {
      setFieldError(signupForm.confirmPassword, 'Passwords do not match.');
      if (!firstInvalidField) firstInvalidField = signupForm.confirmPassword;
    }

    if (firstInvalidField) {
      message.className = 'form-message';
      firstInvalidField.focus();
      return;
    }

    showMessage(message, 'Looks good! (This demo has no backend, so no account is actually created.)', 'success');
  });

  // Clear a field's error as soon as the user starts fixing it.
  signupForm.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', () => setFieldError(input, ''));
  });
}

// const loginForm = document.querySelector('[data-login-form]');
// if (loginForm) {
//   const message = document.querySelector('[data-form-message]');
//   loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     showMessage(message, 'This demo has no backend, so login is visual only.', 'success');
//   });
// }


const loginForm = document.querySelector('[data-login-form]');
if (loginForm) {
  const message = document.querySelector('[data-form-message]');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstInvalidField = null;

    ['email', 'password'].forEach((name) => {
      const input = loginForm[name];
      const value = input.value.trim();
      let error = '';
      if (!value) {
        error = `${name === 'email' ? 'Email Address' : 'Password'} is required.`;
      } else if (name === 'email' && !input.validity.valid) {
        error = 'Please enter a valid email address.';
      }
      setFieldError(input, error);
      if (error && !firstInvalidField) firstInvalidField = input;
    });

    if (firstInvalidField) {
      message.className = 'form-message';
      firstInvalidField.focus();
      return;
    }

    showMessage(message, 'This demo has no backend, so login is visual only.', 'success');
  });

  loginForm.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', () => setFieldError(input, ''));
  });
}