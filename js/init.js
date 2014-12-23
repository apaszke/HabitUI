window.fs = require('fs');
window.config = {};

try {
  var data = fs.readFileSync('config.json');
  var credentials = JSON.parse(data);
  window.config.user = credentials;
  window.loggedIn = true;
} catch (e) {
  window.loggedIn = false;
}
