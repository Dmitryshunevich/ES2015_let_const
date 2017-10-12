/**
    One of the most appreciated features introduced by ES2015 is the support for arrow
 functions. The arrow function is a more concise syntax for defining functions, especially
 useful when defining a callback. To better understand the advantages of this syntax, let's
 first see an example of classic filtering on an array:
 */

const numbers = [2, 6, 7, 8, 1];
const even = numbers.filter(function(x) {
    return x%2 === 0;
});
console.log(even);


/**
    The preceding code can be rewritten as follows using the arrow function syntax:
 */

const numbers2 = [2, 6, 7, 8, 1];
const even2 = numbers2.filter(x => x%2 === 0);
console.log(even2);


/**
    The filter function can be defined inline, and the keyword function is removed, leaving
 only the list of parameters, which is followed by => (the arrow), which in turn is followed
 by the body of the function. When the list of arguments contains more than one argument,
 you must surround them with parentheses and separate the argument with commas. Also,
 when there is no argument you must provide a set of empty parentheses before the arrow:
 () => {...}. When the body of the function is just one line, there's no need to write the
 return keyword as it is applied implicitly. If we need to add more lines of code to the body
 of the function, we can wrap them in curly brackets, but beware that in this case return is
 not automatically implied, so it needs to be stated explicitly, as in the following example:
 */

const numbers3 = [2, 6, 7, 8, 1];
const even3 = numbers.filter(x => {
        if (x%2 === 0) {
    console.log(x + ' is even!');
    return true;
}
});

















