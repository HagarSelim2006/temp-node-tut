// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimun)

const names = require("./4_names");
const sayHi = require("./5_utils");
const data = require("./6_alternative_flavor");

// runs even if not assigned to a variable and not invoke that variable
// when you import a module you invoke it
require("./7_mind_grenade");
console.log(data);
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

// Built-in Modules:
// OS
// PATH
// FS
// HTTP
