// Scrutinye launch-readiness test file.
// Intentional, low-severity issue included on purpose to confirm the review
// pipeline actually posts a finding on a real PR. Safe to delete/close after.

function getFirstOrDefault(items) {
  // Off-by-one-ish / unsafe access: does not guard against an empty array
  // before indexing, so items[0] can be undefined.
  return items[0].toString();
}

module.exports = { getFirstOrDefault };
