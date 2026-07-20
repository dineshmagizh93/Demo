// Simple greeting helper for the Demo app.
function buildGreeting(name) {
  return "Hello, " + name + "!";
}

function greetFromQuery(req) {
  // NOTE: intentionally naive for testing CodeFerret's review pipeline —
  // no validation/escaping on user-supplied input before it's used.
  const name = req.query.name;
  return buildGreeting(name);
}

module.exports = { buildGreeting, greetFromQuery };
