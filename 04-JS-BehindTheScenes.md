JavaScript (JS) is a high-level programming language that abstracts resource management, such as memory allocation and deallocation. For instance, **garbage collection** automatically handles memory management, so developers don’t have to manually manage resources. However, a downside of this abstraction is that JavaScript often cannot achieve the same level of optimization as low-level languages like C.

### Key Features of JavaScript:

1. **Interpreted and Just-in-Time (JIT) Compiled**  
   JavaScript combines interpretation and JIT compilation, allowing it to execute code efficiently while remaining flexible.

2. **Multi-Paradigm**  
   JavaScript supports multiple programming paradigms, making it highly versatile:

   - **Procedural Programming**
   - **Object-Oriented Programming (OOP)**
   - **Functional Programming**

3. **Imperative and Declarative Styles**  
   JavaScript allows both imperative (step-by-step instructions) and declarative (what to do, not how) programming, depending on the use case.

4. **Prototype-Based Object Orientation**  
   JavaScript uses a prototype-based object-oriented model. For example:

   ```js
   Array.prototype.push;
   ```

   Here, arrays inherit methods and properties from `Array.prototype`.

5. **First-Class Functions**  
   Functions in JavaScript are first-class citizens. They are treated as variables, meaning:

   - Functions can be passed as arguments to other functions.
   - Functions can be returned from other functions.

6. **Dynamic Typing**  
   JavaScript is a dynamically-typed language, meaning variables do not require explicit type definitions. The type is determined at runtime.

7. **Single-Threaded with Non-Blocking Behavior**  
   JavaScript operates on a **single-threaded** model, meaning it can only execute one task at a time. However, it achieves **non-blocking behavior** through its event loop, enabling asynchronous operations without halting the main thread.

---

### JavaScript Engine and Runtime

#### JavaScript Engine

A JavaScript engine is responsible for executing JavaScript code. Every browser has its own engine, with the most famous being Google's **V8 engine**, used in Chrome and Node.js.

A JavaScript engine consists of two main components:

1. **Call Stack**: Handles function execution and keeps track of where the program is in its execution.
2. **Heap**: Manages memory allocation for objects, variables, and other data.

#### Compilation vs. Interpretation

- **Compilation**: The entire source code is converted into machine code in one go, producing a binary file that can be executed directly by the computer. This approach offers better performance as the code is optimized before execution.
- **Interpretation**: The source code is executed line by line without being precompiled. While this allows for quicker startup, it often results in poor performance due to the lack of optimization.

JavaScript adopts a hybrid approach known as **Just-In-Time (JIT) Compilation**, which combines the benefits of both compilation and interpretation.

#### How JIT Compilation Works:

1. The JavaScript engine **parses** the code into an **Abstract Syntax Tree (AST)**.
2. The AST is then **compiled** into machine code.
3. The machine code is executed in the **Call Stack**.

During execution, the engine continuously optimizes the code by recompiling frequently executed parts for better performance. This optimization happens in threads that are not directly accessible from JavaScript code.

---

### JavaScript Runtime

A **runtime** provides the environment in which JavaScript code executes. The browser is the most common runtime for JavaScript. It includes everything necessary to run JavaScript, such as:

- **The JavaScript Engine** (e.g., V8 in Chrome)
- **Web APIs**: These are accessible via the `window` object and include APIs for manipulating the DOM, making HTTP requests, timers, etc.
- **The Event Loop and Callback Queue**:
  - The **Callback Queue** holds tasks (e.g., `onclick`, `setTimeout`) that are waiting to be executed.
  - The **Event Loop** continuously checks the Callback Queue and moves tasks into the Call Stack when the stack is empty.

This mechanism allows JavaScript to perform asynchronous operations despite being single-threaded.

#### Other Runtimes

JavaScript is not limited to browsers. It can run in other runtimes like **Node.js**, which provides:

- A JavaScript engine (V8)
- Built-in modules for working with files, servers, and more
- A runtime environment designed for server-side applications

---

### Summary

- The **JavaScript engine** handles code execution, memory management, and optimization.
- The **runtime** provides the environment and additional tools (like APIs and the event loop) to enable JavaScript to interact with the system and the web.
- JIT compilation ensures a balance between performance and flexibility, allowing JavaScript to run efficiently in both browsers and other environments like Node.js.

---

### Execution Context and Call Stack

#### Execution Context

JavaScript code always runs inside an **execution context**, which is an environment that contains all the information needed to execute the code.

- **Global Execution Context**:
  - Created automatically for top-level code (code that is not inside any function).
  - There is only **one global execution context** in any JavaScript program, and it is created when the script starts running.
  - This context remains active throughout the program's lifecycle.

#### How Execution Works:

1. **Global Execution Context** is created and executed first.
2. When a function is called, a new **Function Execution Context** is created for that function.
3. Functions can execute while waiting for other tasks (like callbacks) to be executed later.

---

#### Components of the Execution Context

Each execution context consists of three main components:

1. **Variable Environment**:
   - Stores variables, function declarations, and `let`/`const` bindings defined in the current context.
2. **Scope Chain**:
   - Contains references to variables in the current context and its outer (parent) contexts, ensuring access to variables in higher scopes.
3. **`this` Keyword**:
   - A special keyword automatically assigned to the execution context, determined by how the function is called.

---

#### Call Stack

The **call stack** is a data structure used to keep track of execution contexts. It manages the order in which functions are executed:

- When a program starts, the **Global Execution Context** is pushed onto the stack.
- When a function is called:
  - A new **Function Execution Context** is created and pushed onto the stack.
- When the function finishes execution:
  - Its execution context is removed (popped) from the stack, and control returns to the previous context.

---

#### Example Walkthrough:

```javascript
function greet() {
  console.log("Hello");
}

function sayGoodbye() {
  console.log("Goodbye");
}

greet(); // greet() Execution Context is added to the stack
sayGoodbye(); // sayGoodbye() Execution Context is added after greet() finishes
```

**Call Stack Process**:

1. **Global Execution Context** is created and pushed to the stack.
2. When `greet()` is called, its **Function Execution Context** is pushed onto the stack.
3. After `greet()` finishes, its context is popped off the stack.
4. `sayGoodbye()` is then called, and its context is added to the stack.
5. Once all functions are executed, only the **Global Execution Context** remains until the program ends.

---

### Summary

1. The **execution context** provides the environment where JavaScript code runs, consisting of a variable environment, scope chain, and `this`.
2. The **global execution context** is created first and persists throughout the program.
3. Function execution contexts are created dynamically and managed via the **call stack**.
4. JavaScript runs in a single-threaded manner, with one execution context processed at a time.

---

### Scoping and Scope Chain in JavaScript

#### What is Scoping?

Scoping determines how variables are organized and accessed in a program. In JavaScript, scoping is **lexical**, meaning it is controlled by the placement of variables and functions in the code at **write-time**, not at runtime.

The **scope of a variable** refers to the region in the code where the variable can be accessed.

---

#### Types of Scope in JavaScript

1. **Global Scope**:

   - Variables declared outside any function or block are in the global scope.
   - These variables can be accessed from anywhere in the code.
   - Example:
     ```javascript
     const globalVar = "I am global";
     function example() {
       console.log(globalVar); // Accessible
     }
     ```

2. **Function Scope**:

   - Variables declared inside a function are accessible only within that function. This is also referred to as **local scope**.
   - Example:
     ```javascript
     function example() {
       const localVar = "I am local";
       console.log(localVar); // Accessible inside the function
     }
     console.log(localVar); // Error: localVar is not defined
     ```

3. **Block Scope**:
   - Variables declared inside a block (e.g., within `{}` in `if` statements, loops, etc.) are accessible only within that block when using `let` or `const`.
   - Functions are also block-scoped.
   - Example:
     ```javascript
     if (true) {
       let blockScopedVar = "I am block-scoped";
       console.log(blockScopedVar); // Accessible here
     }
     console.log(blockScopedVar); // Error: blockScopedVar is not defined
     ```

---

#### Special Note on `var`

- `var` is **not block-scoped**; it is function-scoped.
  - Even if `var` is declared inside a block, it can be accessed outside of that block (if within the same function).
  - Example:
    ```javascript
    if (true) {
      var functionScopedVar = "I am function-scoped";
    }
    console.log(functionScopedVar); // Accessible even outside the block
    ```

---

#### Scope Chain

The **scope chain** defines how variables are looked up in nested scopes:

- Each child scope has access to its parent’s variables.
- The lookup starts from the current scope and moves outward to the global scope until the variable is found or determined to be undefined.

**Example**:

```javascript
const globalVar = "I am global";

function parent() {
  const parentVar = "I am in the parent function";

  function child() {
    const childVar = "I am in the child function";
    console.log(globalVar); // Accessible (global scope)
    console.log(parentVar); // Accessible (parent scope)
    console.log(childVar); // Accessible (local scope)
  }

  child();
}

parent();
```

**Output**:

```
I am global
I am in the parent function
I am in the child function
```

---

### Key Points:

1. **Global Scope**: Declared outside functions/blocks; accessible everywhere.
2. **Function Scope**: Declared within functions; accessible only inside the function.
3. **Block Scope**: Declared with `let`, `const`, or functions inside `{}`; accessible only within the block.
4. **`var`**: Function-scoped, not block-scoped.
5. **Scope Chain**: Child scopes can access variables from their parent scopes, but not vice versa.

---

### Variable Environment, Hoisting, and Temporal Dead Zone (TDZ)

#### What is the Variable Environment?

The **variable environment** is a component of the execution context where variables and functions are stored. It keeps track of variable declarations, their values, and their scope during code execution.

- The variable environment is created when an execution context is created.
- It includes:
  - **Variables** (`var`, `let`, `const`)
  - **Function Declarations**

---

### Hoisting

**Hoisting** is JavaScript's behavior of moving variable and function declarations to the top of their scope during the creation phase of the execution context. This allows certain variables and functions to be accessed **before they are explicitly declared in the code**.

#### How Hoisting Works:

1. **Function Declarations**:

   - Functions are fully hoisted, meaning the entire function can be called before its declaration in the code.
   - Example:
     ```javascript
     greet(); // Output: "Hello!"
     function greet() {
       console.log("Hello!");
     }
     ```

2. **Variables Declared with `var`**:

   - `var` declarations are hoisted but initialized with `undefined`. They can be accessed before their declaration but will return `undefined` until the code assigns a value.
   - Example:
     ```javascript
     console.log(a); // Output: undefined
     var a = 10;
     console.log(a); // Output: 10
     ```

3. **Variables Declared with `let` and `const`**:
   - `let` and `const` are hoisted but are **not initialized**. Accessing them before their declaration results in a `ReferenceError`. This is where the **Temporal Dead Zone (TDZ)** comes into play.

---

### Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is the period between entering a block of code and the point at which a variable declared with `let` or `const` is initialized. During the TDZ, accessing these variables is not allowed.

#### Example of TDZ:

```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
console.log(x); // Output: 5
```

#### Key Points about TDZ:

- It applies to variables declared with `let` and `const`.
- Prevents accessing the variable before its declaration to avoid unexpected behavior.
- Encourages safer coding practices by enforcing proper declaration before use.

---

### Summary of Hoisting and Variable Behavior:

| **Type**     | **Hoisted?**  | **Initialization?**           | **TDZ Applies?** |
| ------------ | ------------- | ----------------------------- | ---------------- |
| **Function** | Fully hoisted | Initialized with the function | No               |
| **`var`**    | Hoisted       | Initialized with `undefined`  | No               |
| **`let`**    | Hoisted       | Not initialized               | Yes              |
| **`const`**  | Hoisted       | Not initialized               | Yes              |

---

### Key Takeaways:

1. Hoisting allows you to use variables and functions before their declarations in the code, but their behavior depends on how they are declared (`var`, `let`, `const`, or function).
2. **`let` and `const` declarations are hoisted but remain in the Temporal Dead Zone until their initialization.**
3. Always declare variables and functions at the top of their scope to avoid confusion caused by hoisting.

---

### `this` Keyword in JavaScript

#### What is `this`?

The `this` keyword is a special identifier automatically created for each **execution context** in JavaScript. It refers to an object depending on **how** a function is invoked. The value of `this` is determined dynamically at runtime.

---

### Key Rules of `this`

1. **In the Global Context**:

   - In the global scope (outside any function), `this` refers to the **global object**.
     - In browsers, the global object is `window`.
   - Example:
     ```javascript
     console.log(this); // Output: Window (in browsers)
     ```

2. **Inside Regular Functions**:

   - In a regular function (not a method), `this` refers to the **global object** (`window` in browsers) if not in strict mode.
   - In **strict mode**, `this` is `undefined` inside regular functions.
   - Example:
     ```javascript
     function regularFunction() {
       console.log(this); // Output: Window (non-strict mode) or undefined (strict mode)
     }
     ```

3. **Inside Methods**:

   - When a function is called as a method of an object, `this` refers to the object that owns the method.
   - Example:
     ```javascript
     const obj = {
       name: "Object",
       greet: function () {
         console.log(this.name); // Output: "Object"
       },
     };
     obj.greet();
     ```

4. **Arrow Functions**:

   - Arrow functions **do not have their own `this` keyword**. Instead, they inherit `this` from their **lexical scope** (the context in which they were created).
   - Example:
     ```javascript
     const obj = {
       name: "Object",
       greet: () => {
         console.log(this.name); // Output: undefined (inherits from global scope)
       },
     };
     obj.greet();
     ```

5. **As an Event Listener**:

   - When a function is used as an event listener, `this` points to the **DOM element** that the event handler is attached to.
   - Example:
     ```javascript
     const button = document.querySelector("button");
     button.addEventListener("click", function () {
       console.log(this); // Output: <button> element
     });
     ```

6. **Explicit Binding with `call`, `apply`, or `bind`**:

   - You can explicitly set the value of `this` using `call`, `apply`, or `bind`.
   - Example:

     ```javascript
     function greet() {
       console.log(this.name);
     }

     const obj = { name: "Explicit Object" };
     greet.call(obj); // Output: "Explicit Object"
     greet.apply(obj); // Output: "Explicit Object"

     const boundGreet = greet.bind(obj);
     boundGreet(); // Output: "Explicit Object"
     ```

---

### Summary of `this` Behavior

| **Context**                              | **Value of `this`**                                |
| ---------------------------------------- | -------------------------------------------------- |
| **Global Scope**                         | Global object (`window` in browsers)               |
| **Regular Function (Non-Strict)**        | Global object (`window`)                           |
| **Regular Function (Strict)**            | `undefined`                                        |
| **Object Method**                        | The object that owns the method                    |
| **Arrow Function**                       | Inherits `this` from the surrounding lexical scope |
| **Event Listener**                       | The DOM element the listener is attached to        |
| **Explicit Binding (`call/apply/bind`)** | Explicitly set value                               |

---

### Key Takeaways:

1. The `this` keyword dynamically determines its value based on **how a function is invoked**.
2. Arrow functions do not have their own `this`; they inherit it from their lexical environment.
3. Be cautious of `this` when used in different contexts, especially in callbacks, event listeners, and nested functions.

---

### Regular Functions vs. Arrow Functions

| **Feature**             | **Regular Function**                | **Arrow Function**                    |
| ----------------------- | ----------------------------------- | ------------------------------------- |
| **Own `this`**          | Yes (determined by how it’s called) | No (inherits from surrounding scope)  |
| **`arguments` Object**  | Available                           | Not available                         |
| **Behavior in Objects** | Refers to the object that called it | Refers to the outer lexical `this`    |
| **Use as Methods**      | Suitable for object methods         | Not suitable (inherits global `this`) |

---

### Key Takeaways:

1. Regular functions have their own `this`, while arrow functions inherit `this` from their surrounding scope.
2. Use regular functions for methods and arrow functions for callbacks or nested functions needing access to outer `this`.

---

### Primitives vs. Objects in JavaScript

#### Primitives:

- **Definition**: Primitives are immutable, simple data types that are not objects. Examples include `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.
- **Behavior**:
  - When you assign or copy a primitive value, a new **copy** of the value is created.
  - Changing one copy does not affect the other.
  - Example:
    ```javascript
    let a = 10;
    let b = a; // b gets a copy of a's value
    b = 20;
    console.log(a); // Output: 10 (unchanged)
    ```

#### Objects:

- **Definition**: Objects are complex data types that can store collections of properties and methods.
- **Behavior**:
  - When you assign or copy an object, you are copying a **reference** to the object, not the actual data.
  - Changing the object's content through one reference affects all other references.
  - Example:
    ```javascript
    const obj1 = { name: "Alice" };
    const obj2 = obj1; // obj2 references the same object
    obj2.name = "Bob";
    console.log(obj1.name); // Output: "Bob" (both references point to the same object)
    ```

---

### `const` Behavior with Primitives and Objects

1. **Primitives**:

   - Variables declared with `const` cannot be reassigned, but their value itself is immutable.
   - Example:
     ```javascript
     const num = 42;
     num = 50; // Error: Assignment to constant variable
     ```

2. **Objects**:
   - Variables declared with `const` cannot be reassigned to a new object, but the content (properties) of the object can be mutated.
   - Example:
     ```javascript
     const obj = { name: "Alice" };
     obj.name = "Bob"; // Allowed: Mutating the property
     obj = {}; // Error: Assignment to constant variable
     ```

---

### Copying Objects

1. **Reference Copy**:

   - Assigning an object to a new variable creates a reference to the same object.
   - Example:
     ```javascript
     const obj1 = { age: 25 };
     const obj2 = obj1;
     obj2.age = 30;
     console.log(obj1.age); // Output: 30
     ```

2. **Shallow Copy**:

   - Create a shallow copy to duplicate the object without linking references. Methods like `Object.assign()` or the spread operator (`...`) are commonly used.
   - Example:
     ```javascript
     const obj1 = { age: 25 };
     const obj2 = { ...obj1 };
     obj2.age = 30;
     console.log(obj1.age); // Output: 25 (unchanged)
     ```

3. **Deep Copy**:
   - For deeply nested objects, a shallow copy may not suffice. Use libraries like `lodash` or `structuredClone()` (built-in).
   - Example:
     ```javascript
     const obj1 = { details: { age: 25 } };
     const obj2 = structuredClone(obj1);
     obj2.details.age = 30;
     console.log(obj1.details.age); // Output: 25 (deep copy works)
     ```

---

### Key Takeaways:

1. **Primitives** are immutable and copied by value.
2. **Objects** are mutable and copied by reference.
3. `const` prevents reassignment but does not make objects immutable.
4. Use shallow or deep copying methods to duplicate objects safely without sharing references.

---
