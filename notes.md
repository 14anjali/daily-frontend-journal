# closure

ans- A closure is created when an inner function  retains access to  variables of its outer function's lexical scope, even after the outer funtion has fnished executing. this happens because the inner funtion keeps  a reference of those variable,not a copy.

Closures are useful because they allow functions to create private variables that cannot be accessed directly from outside.

# this keyword

IN javaScript , this refers to the object that is bound at the time a function is called , and its value depends on how the function is invoked .

this gets its value at call time because its binding depends on how the funtion is invoked , not where it is defined.

Arrow function donot have their own this;they inherit from their lexical scope , while regular funtions get this at call time.

Arrow functions are commonly used in callbacks at their concicse syntax and laxical this binding, which avoid unexpected context issues.

# Hoisting 

Hoisting is a behavior in js where variable and function declaration are moved to the top of their containing scope during the compilation phase, before the code execution begins.

var → Hoisted and initialized with undefined

let → Hoisted but in temporal dead zone; accessing before declaration throws ReferenceError

const → Hoisted but in temporal dead zone; accessing before declaration throws ReferenceError

# Event loop

The event loop is a core mechanism in js that allows  the single threaded language to handle asynchronous operations(like API calls ,timers,and user events) efficiently without blocking the main thread.

The microtask queue has higher priority and is processed before the callback (macrotask) queue, which contains events like setTimeout, setInterval, and I/O callbacks.

JavaScript appears asynchronous because its runtime environment handles time-consuming operations like network requests and file I/O outside the main thread, allowing the event loop to continue executing other code.

# Async behavior

JavaScript's Asynchronous behavior allows time -consuming operations like Api calls or timers to run in the background without blocking the main thread.these tasks are handled using callbacks,promises,or async/await and are coordinated by the event loop , ensureing the ui remains responsive and the application does not freeze.