/**
    It is becoming best practice to use const when requiring a module in a script, so that the
 variable holding the module cannot be accidentally reassigned:
 */

const path = require('path');
// .. работа с модулем path
let path = './some/path'; // this will fail