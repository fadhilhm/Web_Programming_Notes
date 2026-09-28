# Javascript Part 1

## Syntaxes

- similar to Java and C
- a procedural language (can be extended to OOP)
- no compilation needed
- no main method

## Variables

- `var`: function-scope, could be modified outside block
- `let`: block-scope
- `const`: a constant

#### 1. Variables Best Practice

- use `const` whenever possible
- reassignable variable should use `let`

#### 2. More on Variables

Primitive:
- string is primitive
- primitives can have method (`(100 + 23).toString();`)

exp:
- `let umur = 25;`, auto wrapped as Number
- `let umur = Number(25)`, as primitive Number
- `let umur = new Number(25)`, as object reference Number

## Equality

- usuals
- `===`, check if equal *AND* the type is the same
- `!==`, check if NOT equal *OR* type is NOT the same

## Functions

declare as such:

```javascript
function foo(a, b) {
    return a + b;
};

const add = function(a,b) {
    return a + b;
};

const foo = x => x + 1;
```

## Arrays

declare as such:
- `let arr = [];`      
- `let arr2d = [[], []]`

## Objects

declare as such:
```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 40,
    bodyHeight: 176,
    bodyWeight: 72
};  
```

## Class