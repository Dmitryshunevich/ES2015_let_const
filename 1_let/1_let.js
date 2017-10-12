/**
    As in the previous example, this code will raise a ReferenceError: i is not defined
 error.
    This protective behavior introduced with let allows us to write safer code, because if we
 accidentally access variables that belong to another scope, we will get an error that will
 allow us to easily spot the bug and avoid potentially dangerous side effects.
 */

for (let i=0; i < 10; i++) {
    // что-то делаем здесь
}
console.log(i);//ReferenceError: i is not defined

