
/**
 This code will raise a ReferenceError: x is not defined because we are trying to
 print a variable that has been defined inside another block.
 */

if (false) {
    let x = "hello";
}
console.log(x); //ReferenceError: x is not defined



