if (window.sessionStorage.path) {
  let path = window.sessionStorage.path;
  window.history.pushState(null, null, path);
} else {
  let path = window.location.pathname;
  window.sessionStorage.path = path;
  window.location.href = '/teste.html';
}
