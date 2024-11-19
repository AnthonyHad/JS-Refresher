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
   Array.prototype.push
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

greet();  // greet() Execution Context is added to the stack
sayGoodbye();  // sayGoodbye() Execution Context is added after greet() finishes
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

