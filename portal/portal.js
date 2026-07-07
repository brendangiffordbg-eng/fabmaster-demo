// Shared helpers for the demo portal pages. Loaded after data.js.

function pill(status, label) {
  return '<span class="pill ' + status + '">' + label + '</span>';
}

function assetById(id) {
  return PORTAL.assets.find(function (a) { return a.id === id; });
}

// '2026-03-14' -> 'Mar 14, 2026'. Parsed by hand (no Date()) so there is
// no timezone drift; anything that isn't an ISO date passes through as-is.
function formatDate(iso) {
  var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[+m[2] - 1] + ' ' + (+m[3]) + ', ' + m[1];
}

function demoToast(msg) {
  var t = document.querySelector('.p-toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'p-toast';
    t.setAttribute('role', 'status');
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._hide);
  t._hide = setTimeout(function () { t.classList.remove('show'); }, 3200);
}

// Any element with a data-demo attribute shows a "concept only" toast on click
// instead of performing a real action (downloads, approvals, etc.).
document.addEventListener('click', function (e) {
  var stub = e.target.closest('[data-demo]');
  if (stub) {
    e.preventDefault();
    demoToast(stub.getAttribute('data-demo') || 'Demo portal — this action is not wired up in the concept.');
  }
});
