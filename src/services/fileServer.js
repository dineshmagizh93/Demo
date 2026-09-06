const fs = require("fs");
const path = require("path");

const UPLOADS_DIR = path.join(__dirname, "..", "..", "uploads");

function readUserFile(filename) {
  const target = path.join(UPLOADS_DIR, filename);
  return fs.readFileSync(target, "utf8");
}

module.exports = { readUserFile };
