# TypeScript Array to String Type Error

This repository demonstrates a common TypeScript error: passing an array to a function expecting a string argument.  The code attempts to use an array as a string argument, resulting in a type error. The solution involves type checking and handling the array appropriately before passing it to the function.

## Bug

The `greeter` function expects a string argument. However, the `user` variable is an array of strings. Calling `greeter` with `user` results in a compilation error because TypeScript detects the type mismatch.