// auth.js — pure HTML/CSS/JS version. There's no server here, so this
// does NOT create real accounts or check real passwords. It just stops
// the form from trying to submit to a page that doesn't exist, and
// shows a message so the form still feels complete visually.

function showMessage(el, text, type) {
  el.textContent = text;
  el.className = 'form-message is-' + type;
}

const signupForm = document.querySelector('[data-signup-form]');
if (signupForm) {
  const message = document.querySelector('[data-form-message]');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = signupForm.password.value;
    const confirmPassword = signupForm.confirmPassword.value;

    // Basic front-end-only checks, just so the form isn't a no-op.
    if (password.length < 8) {
      showMessage(message, 'Password must be at least 8 characters.', 'error');
      return;
    }
    if (password !== confirmPassword) {
      showMessage(message, 'Passwords do not match.', 'error');
      return;
    }

    showMessage(message, 'Looks good! (This demo has no backend, so no account is actually created.)', 'success');
  });
}

const loginForm = document.querySelector('[data-login-form]');
if (loginForm) {
  const message = document.querySelector('[data-form-message]');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showMessage(message, 'This demo has no backend, so login is visual only.', 'success');
  });
}
