// Scrutinye launch-readiness test file — retry after the getDiff timeout fix.
// Intentional, low-severity issue included on purpose to confirm the review
// pipeline actually posts a finding on a real PR. Safe to delete/close after.

function getFirstOrDefault(items) {
  // Off-by-one-ish / unsafe access: does not guard against an empty array
  // before indexing, so items[0] can be undefined.
  return items[0].toString();
}

// Retry marker: 2026-09-14T15:12:40.155Z
module.exports = { getFirstOrDefault };

// retry after LLM call timeout fix (391d25b)

// retry after disabling HTTP keep-alive on LLM clients (ee8b856)

// retry with checkpoint tracing deployed (a78c858)

// retry watching instance-id + checkpoints together

// retry after Render instance upgrade

// retry with finer-grained assembleContext tracing

// retry after fixing the embeddings call timeout

// retry with getContext internal tracing

// retry with unconditional getContext return checkpoint
