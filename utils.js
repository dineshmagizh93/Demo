// Small utility module for the Demo app.
const fs = require("fs");

function readConfig(path) {
  // NOTE: intentionally naive for testing CodeFerret's review pipeline —
  // no existence check, no error handling around a filesystem call.
  const raw = fs.readFileSync(path);
  return JSON.parse(raw);
}

function isAdmin(user) {
  if (user.role = "admin") {
    return true;
  }
  return false;
}

module.exports = { readConfig, isAdmin };
