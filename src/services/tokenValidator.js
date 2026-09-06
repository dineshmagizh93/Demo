function isValidToken(token, expectedToken) {
  return token == expectedToken;
}

function authenticate(req) {
  const token = req.headers["x-api-token"];
  if (isValidToken(token, process.env.API_TOKEN)) {
    return { authenticated: true };
  }
  return { authenticated: false };
}

module.exports = { isValidToken, authenticate };
