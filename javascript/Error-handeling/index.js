//Ex 1.
const safeJsonParse = function (str) {
  try {
    const result = JSON.parse(str);
    return result;
  } catch {
    return "Invalid JSON format";
  }
};

console.log(safeJsonParse('{"name": "John"}'));
// Output: { name: "John" }

console.log(safeJsonParse("invalid json"));
// Output: "Invalid JSON format"

//Ex 2.

console.log("Running in:", process.cwd());
import fs from "fs";
const readFileWithErrorHandling = function (filePath, callback) {
  let data = null;
  try {
    let file = fs.openSync(filePath, "r");
    if (file) {
      try {
        data = fs.readFileSync(file, "utf8");
      } catch (err) {
        if (err.code === "EISDIR") {
          callback(`Path is a directory, not a file: ${filePath}`);
        } else {
          callback("data couldnt be processed");
        }
      }
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      callback(`File not found: ${filePath}`);
    } else if (err.code === "EISDIR") {
      callback(`Path is a directory, not a file: ${filePath}`);
    }
  } finally {
    if (data) {
      const size = Buffer.byteLength(data, "utf8");
      callback(`File read successfully. Size: ${size} bytes`);
    }
  }
};

readFileWithErrorHandling("javascript.txt", (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});

readFileWithErrorHandling(
  "./javascript/Error-handeling/workingFile.txt",
  (result) => {
    console.log(result);
    // Success: "File read successfully. Size: 150 bytes"
    // Or error: "File not found: existing.txt"
  }
);

readFileWithErrorHandling("./javascript/Error-handeling", (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});
