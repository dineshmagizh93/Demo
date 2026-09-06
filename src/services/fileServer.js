const fs = require("fs");
const path = require("path");

const UPLOADS_DIR = path.join(__dirname, "..", "..", "uploads");

function readUserFile(filename) {
  const target = path.join(UPLOADS_DIR, filename);
  return fs.readFileSync(target, "utf8");
}

module.exports = { readUserFile };
// re-trigger webhook: backend confirmed warm at 2026-09-06T08:43:20Z

function listUploads() {
  return fs.readdirSync(UPLOADS_DIR);
}

module.exports.listUploads = listUploads;

function deleteUpload(filename) {
  fs.unlinkSync(path.join(UPLOADS_DIR, filename));
}

module.exports.deleteUpload = deleteUpload;
