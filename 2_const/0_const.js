/**
    This code will raise a TypeError: Assignment to constant variable error because
 we are trying to change the value of a constant.
 */

const x = 'This will never change';
x = '...';//TypeError: Assignment to constant variable.
