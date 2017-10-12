
/**
    This code will not fail as we might expect and it will just print undefined in the console.
 This behavior has been the cause of many bugs and a lot of frustration, and that is the
 reason why ES2015 introduces the let keyword to declare variables that respect the block
 scope.
 */

if (false) {
    var x = "hello";
}
console.log(x); //undefined
