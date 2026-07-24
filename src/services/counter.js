let requestCount = 0;

async function incrementAndLog(logToDb) {
  const current = requestCount;
  await logToDb(current);
  requestCount = current + 1;
}

async function processQueue(items, handler) {
  for (const item of items) {
    try {
      await handler(item);
    } catch (err) {
      // ignore and continue
    }
  }
}

module.exports = { incrementAndLog, processQueue };
