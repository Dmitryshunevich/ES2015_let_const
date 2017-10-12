/**
    Anyway, it's important to underline that const does not behave in the same way as
 constant values in many other languages where this keyword allows us to define read-only
 variables. In fact, in ES2015, const does not indicate that the assigned value will be
 constant, but that the binding with the value is constant. To clarify this concept, we can see
 that with const in ES2015 it is still possible to do something like this:
 */

const x = {};
x.name = 'John'; // That's OK

/**
    When we change a property inside the object we are actually altering the value (the object),
 but the binding between the variable and the object will not change, so this code will not
 raise an error. Conversely, if we reassign the full variable, this will change the binding
 between the variable and its value and raise an error:
 */

x = null; // TypeError: Assignment to constant variable.




