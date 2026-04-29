// Built-in Module PATH

const path = require("path");

// return my platform specific seperator
console.log(path.sep);

// joins sequence of path segments using the platform specific seperator
// as the limiter and return a normalized resulting path
const filePath = path.join("/content", "subfolder", "test.test");
console.log(filePath);
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
